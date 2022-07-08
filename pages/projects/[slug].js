import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/Layout";

import { HiOutlineEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import "react-image-lightbox/style.css";

const ProjectBlog = ({ mdxSource, frontMatter }) => {
    // console.log(frontMatter);
    // console.log(mdxSource);

    return (
        <Layout titlePage={frontMatter.title}>
            <section className="font-poppins pt-3 pb-8">
                <div className="layout ">
                    <div className="relative mb-3 ">
                        <img
                            src={`/images/${frontMatter.banner}`}
                            alt={frontMatter.title}
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-2xl md:text-4xl font-semibold from-violet-500 to-purple-500 via-fuchsia-500 bg-clip-text text-transparent bg-gradient-to-r">
                                {frontMatter.title}
                            </h1>
                            <h1 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                                📅 {frontMatter.publishedAt}
                            </h1>
                        </div>
                        <div className="flex space-x-2 mb-3">
                            {frontMatter.techStacks
                                .split(",")
                                .map((techStack, index) => (
                                    <span
                                        key={index}
                                        className="block bg-violet-200 text-violet-900 py-1 px-2 rounded-sm"
                                    >
                                        {techStack}
                                    </span>
                                ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {frontMatter.summary}
                        </p>
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                                <HiOutlineEye className="stroke-gray-600 dark:stroke-gray-300" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    {frontMatter.readingTime.text}
                                </span>
                            </div>
                            <span>-</span>
                            <div className="flex items-center space-x-1">
                                <AiFillGithub className="stroke-gray-600 dark:stroke-gray-300" />
                                {frontMatter.githubLink === "-" ? (
                                    <span className="text-gray-600 dark:text-gray-300">
                                        No Repository
                                    </span>
                                ) : (
                                    <a
                                        href={frontMatter.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-500 transition"
                                    >
                                        Repository
                                    </a>
                                )}
                            </div>
                            <span>-</span>
                            <div className="flex items-center space-x-1">
                                <TbWorld className="stroke-gray-600 dark:stroke-gray-300" />
                                <a
                                    href={frontMatter.demoWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-500 transition"
                                >
                                    Demo Website
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300 dark:border-gray-600 " />
                    <MDXRemote {...mdxSource} components={MDXComponents} />
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
    const post = await getFileBySlug("projects", params.slug);

    return { props: post };
}
