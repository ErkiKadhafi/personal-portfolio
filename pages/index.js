import Layout from "../components/Layout";
import SvgBanner from "../components/SvgBanner";
import Image from "next/image";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { useRouter } from "next/router";

export default function Home({ projects }) {
    const router = useRouter();
    return (
        <Layout titlePage="Home">
            {/* ======== START ::: BANNER SECTION ======== */}
            <section className="font-poppins py-8 sm:py-16">
                <div className="layout grid sm:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-8">
                    <div className="order-last sm:order-first flex flex-col justify-center ">
                        <h1 className="text-3xl md:text-5xl font-medium ">
                            Hi,
                            <br /> You can call me{" "}
                            <span className="from-violet-500 to-purple-500 via-fuchsia-500 bg-clip-text text-transparent bg-gradient-to-r">
                                Erki!
                            </span>
                        </h1>
                        <div className="mt-4 text-lg space-y-2">
                            <p>
                                I am a fullstack web developer. I love new
                                chalenges and passionate about tech stuff.
                            </p>
                        </div>
                    </div>
                    <div className="h-44 sm:h-auto max-h-[25rem] flex flex-col justify-center">
                        <SvgBanner />
                    </div>
                </div>
            </section>
            {/* ======== END ::: BANNER SECTION ======== */}
            {/* ======== START ::: BIG PROJECTS SECTION ======== */}
            <section className="font-poppins py-4 sm:py-8">
                <div className="layout ">
                    <h1 className="py-1 mb-4 font-medium text-2xl md:text-4xl from-violet-500 to-purple-500 via-fuchsia-500 bg-clip-text text-transparent bg-gradient-to-r">
                        My Big Projects
                    </h1>
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        {projects.map((project, index) => {
                            return (
                                <li
                                    key={index}
                                    className="group rounded-md border border-gray-300 dark:border-gray-600 hover:scale-[1.02] hover:border-violet-400 dark:hover:border-violet-400 transition cursor-pointer"
                                >
                                    <a
                                        className="block p-4 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-violet-400"
                                        href={`/projects/${project.slug}`}
                                    >
                                        <div className="space-y-1 mb-3">
                                            <h2 className="text-lg md:text-xl font-semibold">
                                                {project.title}
                                            </h2>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {project.summary}
                                            </p>
                                        </div>
                                        <div className="h-40 sm:h-48 w-full relative mb-3 rounded-md border border-gray-300 dark:border-gray-600">
                                            <Image
                                                src={`/images/${project.banner}`}
                                                className="h-full w-full rounded-md object-cover object-center"
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <p className="flex group-hover:text-violet-500 group-dark:hover:text-violet-500">
                                            <span>See More </span>
                                            <span className="group-hover:translate-x-1/3 transition">
                                                <svg
                                                    className="fill-black dark:fill-white group-hover:fill-violet-500 group-dark:hover:fill-violet-500"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z" />
                                                </svg>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        onClick={() => router.push("/projects")}
                        className="py-1 px-4 text-lg rounded-sm border border-gray-300 dark:border-gray-600 hover:scale-[1.02] hover:border-violet-400 dark:hover:border-violet-400 hover:text-violet-500 dark:hover:text-violet-500 focus:outline-none focus-visible:ring focus-visible:ring-violet-400 transition"
                    >
                        See more
                    </button>
                </div>
            </section>
            {/* ======== END ::: BIG PROJECTS SECTION ======== */}
        </Layout>
    );
}

export async function getStaticProps() {
    // fetch all the projects
    let projects = await getAllFilesFrontMatter("projects");
    projects = projects.filter((project) => project.isBigProject);
    return { props: { projects } };
}
