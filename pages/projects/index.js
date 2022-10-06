import Layout from "../../components/Layout";
import Image from "next/image";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import Link from "next/link";
import { useTheme } from "next-themes";

import { FaLaravel, FaReact } from "react-icons/fa";

const Projects = ({ projects }) => {
    const { theme } = useTheme();

    return (
        <Layout titlePage="Projects">
            {/* ======== START ::: BANNER SECTIOn ======== */}
            <section className="font-eina">
                <div className="layout flex items-center min-h-[21.875rem] h-[50vh] ">
                    <div className="flex items-center ">
                        {/* ======== pulse bar ======== */}
                        <div
                            data-aos="fade-right"
                            className="h-44 w-0.5 bg-gray-200 dark:bg-gray-800 rounded-full mr-8 overflow-hidden"
                        >
                            <div className="pulsing-animation h-1/4 w-full bg-black-primary dark:bg-white rounded-full"></div>
                        </div>
                        {/* ======== content ======== */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="400"
                            className="flex flex-col justify-center space-y-2 text-black-primary dark:text-white"
                        >
                            <h1 className="font-semibold text-banner md:text-banner-md dark:banner-glow">
                                My{" "}
                                <span className="dark:flicker-animation">
                                    P
                                </span>
                                rojects
                            </h1>
                            <p className="text-banner-desc md:text-banner-desc-md max-w-[32em] ">
                                I work with React and Laravel ecosystem, I love
                                building projects that useful for others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======== END ::: BANNER SECTIOn ======== */}
            {/* ======== START ::: HIGHLIGHTED PROJECTS SECTION ======== */}
            <section className="font-eina">
                <div className="layout text-black-primary pb-20">
                    <ul className="grid md:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <li
                                data-aos="fade-up"
                                data-aos-delay={`${(index + 1) * 2 * 100}`}
                                key={index}
                                className="group border dark:border-gray-700 hover:border-purple-primary dark:hover:border-purple-primary dark:hover:shadow-banner-glow rounded pt-8 pb-6 px-8 relative transition"
                            >
                                <Link href={`/projects/${project.slug}`}>
                                    <a className="dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-violet-400">
                                        <div className="w-8 h-2 bg-[#26ffae] mb-2"></div>
                                        <div className="h-56 relative border dark:border-gray-700 group-hover:border-purple-primary dark:group-hover:border-purple-primary dark:group-hover:shadow-banner-glow ">
                                            <Image
                                                layout="fill"
                                                src={`/images/${project.banner}`}
                                                alt="preview web"
                                                className="object-cover rounded border h-full w-full shadow-custom"
                                            />
                                        </div>
                                        <h3
                                            className={`${
                                                theme === "dark"
                                                    ? "group-hover:banner-glow"
                                                    : "group-hover:text-purple-primary-offset"
                                            }  transition text-[1.75rem] md:text-[2.188rem] font-semibold mb-1`}
                                        >
                                            {project.title}
                                        </h3>
                                        <time className="text-xs md:text-sm tracking-[0.25em] mb-6 block uppercase">
                                            {project.publishedAt}
                                        </time>
                                        <p className="mb-6">
                                            {project.summary}
                                        </p>
                                        <div className="flex flex-wrap">
                                            <FaLaravel className="text-3xl mr-4 mb-2" />
                                            <FaLaravel className="text-3xl mr-4 mb-2" />
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* ======== END ::: HIGHLIGHTED PROJECTS SECTION ======== */}
        </Layout>
    );
};

export default Projects;

export async function getStaticProps() {
    // fetch all the projects
    const projects = await getAllFilesFrontMatter("projects");
    return { props: { projects } };
}
