import Layout from "../components/Layout";
import Image from "next/image";
import { getAllFilesFrontMatter } from "../lib/mdx";
import { useTheme } from "next-themes";

import { FaLaravel, FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import {
    SiTailwindcss,
    SiChakraui,
    SiAlpinedotjs,
    SiPusher,
} from "react-icons/si";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import Link from "next/link";

const myTechstack = [
    {
        header: "Markup and Styling",
        techStacks: [
            <AiOutlineHtml5 className="mr-1.5 mb-2" />,
            <FaCss3Alt className="mr-1.5 mb-2" />,
            <FaSass className="mr-1.5 mb-2" />,
            <SiTailwindcss className="mr-1.5 mb-2" />,
            <SiChakraui className="mr-1.5 mb-2" />,
        ],
        desc: "I used to work with native CSS and Sass for easier syntax. Then since I know TailwindCSS, I use them as my default styling tools, because it's light and easy to use. For React styled components library, I use ChakraUI.",
    },
    {
        header: "Frontend Dev",
        techStacks: [
            <FaReact className="mr-1.5 mb-2" />,
            <TbBrandNextjs className="mr-1.5 mb-2" />,
            <SiAlpinedotjs className="mr-1.5 mb-2" />,
        ],
        desc: "I work with ReactJs and NextJs as my main tools in Javascript environment. I use AlpineJs to work when working with Laravel Blade templating engine.",
    },
    {
        header: "Backend Dev",
        techStacks: [
            <FaLaravel className="mr-1 mb-2" />,
            <SiPusher className="mr-1 mb-2" />,
        ],
        desc: "I use Laravel as my PHP framework for backend development and Pusher as web socket library for Laravel.",
    },
];

export default function Home({ projects }) {
    const { theme } = useTheme();

    return (
        <Layout titlePage="Home">
            {/* ======== START ::: HERO SECTION ======== */}
            <section className="font-eina ">
                <div className="layout flex items-center min-h-[21.875rem] h-[70vh] ">
                    <div className="flex items-center ">
                        {/* ======== pulse bar ======== */}
                        <div className="h-44 w-0.5 bg-gray-200 dark:bg-gray-800 rounded-full mr-8 overflow-hidden">
                            <div className="pulsing-animation h-1/4 w-full bg-black-primary dark:bg-white rounded-full"></div>
                        </div>
                        {/* ======== content ======== */}
                        <div className="flex flex-col justify-center space-y-2 text-black-primary dark:text-white">
                            <h1 className="text-xs md:text-sm md:leading-[17px] tracking-[0.25em] ">
                                HELLO, MY NAME IS ERKI
                            </h1>
                            <p className="font-semibold text-banner md:text-banner-md dark:banner-glow">
                                Full
                                <span className="dark:flicker-animation">
                                    stack
                                </span>{" "}
                                Developer.
                            </p>
                            <p className="text-banner-desc md:text-banner-desc-md max-w-[32em] ">
                                I work with React and Laravel ecosystem, I love
                                building projects that useful for others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======== END ::: HERO SECTION ======== */}
            {/* ======== START ::: TECHSTACK SECTION ======== */}
            <section className="font-eina bg-[#001e2f] dark:bg-[#143044] relative">
                <div className="w-1/2 h-3 bg-red-400 absolute -top-3" />
                <div className="layout text-white py-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-16 dark:banner-glow-green">
                        My Tech Stacks
                    </h2>
                    <ul className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-16 lg:grid-cols-3">
                        {myTechstack.map((item, index) => (
                            <li key={index}>
                                <h3 className="text-2xl md:text-[2rem] font-semibold mb-4 md:relative">
                                    <span className="text-xs md:text-sm font-bold md:absolute -left-6 top-2 tracking-widest">
                                        0{index + 1}
                                    </span>{" "}
                                    {item.header}
                                </h3>
                                <div className="flex flex-wrap text-white text-3xl ">
                                    {item.techStacks.map((icon, index) => (
                                        <span key={index} className="fill-white">
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                                <p className="mb-4">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* ======== END ::: TECHSTACK SECTION ======== */}
            {/* ======== START ::: HIGHLIGHTED PROJECTS SECTION ======== */}
            <section className="font-eina">
                <div className="layout py-16 text-black-primary">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-2 lg:mb-4 dark:banner-glow-green dark:text-white">
                        My works
                    </h2>
                    <p className="text-center text-xs lg:text-sm tracking-[0.25em] mb-16 dark:text-white">
                        HIGHLIGHTED PROJECTS
                    </p>
                    <ul className="space-y-4">
                        {projects.map((project, index) => (
                            <li
                                key={index}
                                className="group border dark:border-gray-700 hover:border-purple-primary dark:hover:border-purple-primary dark:hover:shadow-banner-glow rounded pt-8 pb-6 px-8 relative md:ml-[25%] md:pl-[calc(25%+2rem)] lg:pl-[calc(20%+2rem)] transition"
                            >
                                <Link href={`/projects/${project.slug}`}>
                                    <a className="dark:text-white">
                                        <div className="w-8 h-2 bg-[#26ffae] mb-2"></div>
                                        <div className="mb-4 md:mb-0 md:w-[70%] lg:w-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:absolute -left-4 top-1/2">
                                            <img
                                                src={`/images/${project.banner}`}
                                                alt="preview web"
                                                className="rounded border border dark:border-gray-700 group-hover:border-purple-primary dark:group-hover:border-purple-primary dark:group-hover:shadow-banner-glow h-full w-full shadow-custom"
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
}

export async function getStaticProps() {
    // fetch all the projects
    let projects = await getAllFilesFrontMatter("projects");
    projects = projects.filter((project) => project.isBigProject);
    return { props: { projects } };
}
