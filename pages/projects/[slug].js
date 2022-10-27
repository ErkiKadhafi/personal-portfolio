import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/Layout";

import "react-image-lightbox/style.css";
import useScrollSpy from "../../hooks/useScrollspy";
import readingTime from "reading-time";
import Link from "next/link";

import StyledLink from "../../components/StyledLink";
import Image from "next/image";
// import { getBase64 } from "../../lib/base64";

const ProjectBlog = ({ mdxSource, headings, frontMatter }) => {
    // console.log(frontMatter);
    // console.log(mdxSource);
    // console.log(headings);

    const activeSectionId = useScrollSpy();

    return (
        <Layout titlePage={frontMatter.title}>
            <section className="font-eina pt-3 pb-8">
                <div className="layout ">
                    <section className="grid lg:grid-cols-[auto,250px] gap-8">
                        <article data-aos="fade-up">
                            <h1 className="mb-8 text-2xl md:text-4xl font-semibold text-black dark:text-white dark:banner-glow">
                                {frontMatter.title}
                            </h1>
                            <figure className="mb-6">
                                <Image
                                    src={`/images/${frontMatter.banner}`}
                                    alt={frontMatter.title}
                                    width={3000}
                                    height={1500}
                                    objectFit="cover"
                                    className="w-full h-full rounded-lg"
                                    // placeholder="blur"
                                    // blurDataURL={frontMatter.base64Banner}
                                />
                            </figure>
                            <MDXRemote
                                {...mdxSource}
                                components={MDXComponents}
                            />
                        </article>
                        <aside className="block">
                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="sticky top-6"
                            >
                                <div className="mb-6 p-4 pb-2 text-black dark:text-white bg-gray-primary dark:bg-[#143044] rounded-md">
                                    <h3 className="text-lg mb-1 font-semibold dark:banner-glow">
                                        Table Of Content
                                    </h3>
                                    <ul className="mb-5 space-y-1">
                                        {headings.map((heading, index) => (
                                            <li
                                                key={heading.id}
                                                className="before:marker-colored before:dark:marker-colored-glow ml-7"
                                            >
                                                <Link href={`#${heading.id}`}>
                                                    <a
                                                        className={`${
                                                            activeSectionId ===
                                                            heading.id
                                                                ? "text-purple-primary dark:text-purple-primary"
                                                                : "text-black dark:text-white"
                                                        } hover:text-purple-primary dark:hover:text-purple-primary transition focus:outline-none focus-visible:ring focus-visible:ring-violet-400`}
                                                    >
                                                        <span className="mr-1">
                                                            {heading.level}
                                                        </span>
                                                        {heading.text}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-6 p-4 pb-2 text-black dark:text-white bg-gray-primary dark:bg-[#143044] rounded-md">
                                    <h2 className="text-lg mb-1 font-semibold dark:banner-glow">
                                        Details
                                    </h2>
                                    <ul className="mb-5 space-y-1">
                                        <li className="before:marker-colored before:dark:marker-colored-glow ml-7">
                                            Published at{" "}
                                            {frontMatter.publishedAt}
                                        </li>
                                        <li className="before:marker-colored before:dark:marker-colored-glow ml-7">
                                            {frontMatter.readingTime.text}
                                        </li>
                                        <li className="before:marker-colored before:dark:marker-colored-glow ml-7">
                                            {frontMatter.githubLink === "-" ? (
                                                <span className="">
                                                    No Repository
                                                </span>
                                            ) : (
                                                <StyledLink
                                                    href={
                                                        frontMatter.githubLink
                                                    }
                                                    isOpenNewWindow
                                                >
                                                    Repository Link
                                                </StyledLink>
                                            )}
                                        </li>
                                        <li className="before:marker-colored before:dark:marker-colored-glow ml-7">
                                            {frontMatter.demoWebsite === "-" ? (
                                                <span className="">
                                                    No Demo Website
                                                </span>
                                            ) : (
                                                <StyledLink
                                                    href={
                                                        frontMatter.demoWebsite
                                                    }
                                                    isOpenNewWindow
                                                >
                                                    Demo Website
                                                </StyledLink>
                                            )}
                                        </li>
                                    </ul>
                                    <h2 className="text-lg mb-3 font-semibold dark:banner-glow">
                                        Tags
                                    </h2>
                                    <ul className="flex flex-wrap">
                                        {frontMatter.techStacks
                                            .split(",")
                                            .map((techStack, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm block mr-2 mb-2 bg-black text-white dark:bg-[#26ffae] dark:text-black-primary dark:shadow-banner-glow-green py-1 px-2 rounded-md"
                                                >
                                                    {techStack}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </section>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectBlog;

export async function getStaticPaths() {
    const posts = await getFiles("projects");
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ""),
            },
        })),
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    let post = await getFileBySlug("projects", params.slug);
    
    // console.log(post);
    // post.frontMatter = {
    //     ...post.frontMatter,
    //     base64Banner: await getBase64(post.frontMatter.banner),
    // };
    // post = { ...post };

    return { props: post };
}
