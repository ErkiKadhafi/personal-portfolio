import fs from "fs";
import path from "path";
import readingTime from "reading-time";

import { serialize } from "next-mdx-remote/serialize";

import matter from "gray-matter";

import rehypeSlug from "rehype-slug";

const root = process.cwd();

export async function getFiles(type) {
    return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
    const source = slug
        ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
        : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");
    const { data, content } = matter(source);

    const options = {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
            ],
        },
    };

    const headings = [];
    const tempContent = content;
    tempContent.split("\n").forEach((item) => {
        if (item.startsWith("#")) {
            // const headingLevel = item.split(" ")[0].match(/#/g || []).length;
            const headingLevel = item.split(" ")[0].slice(0, -1);
            // console.log(headingLevel);
            const headingText = item.replace(/#/g, "").trim();
            headings.push({
                id: headingText.replace(/ /g, "-").toLocaleLowerCase(),
                text: headingText,
                level: headingLevel,
            });
        }
    });
    const mdxSource = await serialize(content, options);

    return {
        mdxSource,
        headings,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data,
        },
    };
}

export async function getAllFilesFrontMatter(type) {
    const files = fs.readdirSync(path.join(root, "data", type));
    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, "data", type, postSlug),
            "utf8"
        );
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", ""),
            },
            ...allPosts,
        ];
    }, []);
}
