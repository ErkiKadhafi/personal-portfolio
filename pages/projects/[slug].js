import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/Layout";

const ProjectBlog = ({ mdxSource, frontMatter }) => {
    console.log(mdxSource);
    console.log(frontMatter);
    console.log(MDXComponents);

    return (
        <Layout>
            <section>
                <div className="layout py-20">
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
