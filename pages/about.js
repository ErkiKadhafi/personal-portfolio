import { Fragment } from "react";
import Layout from "../components/Layout";
import StyledLink from "../components/StyledLink";

const contacts = [
    {
        label: "Email",
        text: "erki.qaedhafi@gmail.com",
        href: "mailto: erki.qaedhafi@gmail.com",
    },
    {
        label: "LinkedIn",
        text: "linkedin.com/in/erkikadhafi",
        href: "https://www.linkedin.com/in/erkikadhafi/",
    },
    {
        label: "Github",
        text: "ErkiKadhafi",
        href: "https://github.com/ErkiKadhafi",
    },
    {
        label: "Instagram",
        text: "erki_kadhafi",
        href: "https://www.instagram.com/erki_kadhafi/",
    },
];
const timeline = [
    {
        year: 2022,
        experiences: [
            <span key={1}>
                Working as Frontend Developer intern at{" "}
                <StyledLink href="https://abbauf.com/" isOpenNewWindow>
                    PT. Abbauf Mulia Konsultan Teknologi
                </StyledLink>
            </span>,
            <span key={2}>
                Working as Frontend Developer intern at{" "}
                <StyledLink href="https://igrow.asia/" isOpenNewWindow>
                    iGrow Asia
                </StyledLink>
            </span>,
            <span key={3}>
                Awardee of Frontend Web Development Bootcamp Program by{" "}
                <StyledLink
                    href="https://www.binaracademy.com/en/about"
                    isOpenNewWindow
                >
                    Binar Academy x Kampus Merdeka
                </StyledLink>
            </span>,
            <span key={4}>
                Awardee of Fullstack Web Development Bootcamp Program by{" "}
                <StyledLink
                    href="https://www.instagram.com/yaumidigital.school/"
                    isOpenNewWindow
                >
                    Yaumi Digital School
                </StyledLink>
            </span>,
        ],
    },
    {
        year: 2021,
        experiences: [
            <span key={1}>
                Finished a Frontend Web Development Bootcamp Program by{" "}
                <StyledLink
                    href="https://sanbercode.com/bootcamp/react-js-web-frontend"
                    isOpenNewWindow
                >
                    Sanbercode Academy
                </StyledLink>
            </span>,
            <span key={2}>
                Working as an admin for Algorithm and Programming Laboratory at{" "}
                <StyledLink
                    href="https://www.its.ac.id/id/beranda/"
                    isOpenNewWindow
                >
                    Institut Technology of Sepuluh Nopember
                </StyledLink>
            </span>,
            <span key={3}>
                Joined as Staff of External Affairs of{" "}
                <StyledLink
                    href="https://www.instagram.com/hmtc_its/?hl=id"
                    isOpenNewWindow
                >
                    Informatics Students Association
                </StyledLink>
            </span>,
        ],
    },
    {
        year: 2019,
        experiences: [
            <span key={1}>
                Being an Informatic Major student at{" "}
                <StyledLink
                    href="https://www.its.ac.id/id/beranda/"
                    isOpenNewWindow
                >
                    Institut Technology of Sepuluh Nopember
                </StyledLink>
            </span>,
        ],
    },
];

export default function About() {
    return (
        <Layout titlePage="About">
            {/* ======== START ::: ABOUT SECTION ======== */}
            <section className="font-eina">
                <div className="layout py-4 md:py-16 ">
                    {/* ======== About me ======== */}
                    <article data-aos="fade-up" className="mb-10">
                        <h1 className="text-3xl md:text-4xl mb-5 font-semibold dark:banner-glow">
                            About Me
                        </h1>
                        <p className="mb-4 text-lg">
                            I am a full-stack web developer. My journey in web
                            development started in 2019, I started by joined a
                            course about HTML, CSS, and Javascript. Since then,
                            my journey continue by joining another bootcamp
                            about development (free and paid).
                        </p>
                        <p className="text-lg">
                            I like to learn new stuff especially about web
                            development and keep improving to be a better
                            version of myself. Technologies are like a tools for
                            me, I use it for achieving my goals.
                        </p>
                    </article>
                    {/* ======== Contacts ======== */}
                    <article
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mb-10"
                    >
                        <h1 className="text-3xl md:text-4xl mb-5 font-semibold dark:banner-glow">
                            Contacts
                        </h1>
                        <p className="text-lg mb-3">
                            Please contact me if you have any projects or need
                            opinion about web development stuff.
                        </p>
                        <ul className="mb-5 space-y-2 text-lg">
                            {contacts.map((contact, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="before:marker-colored before:dark:marker-colored-glow ml-7"
                                    >
                                        <span>{contact.label}: </span>
                                        <StyledLink
                                            isOpenNewWindow={
                                                contact.label !== "Email" &&
                                                true
                                            }
                                            href={contact.href}
                                        >
                                            {contact.text}
                                        </StyledLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </article>
                    {/* ======== My journey timeline ======== */}
                    <article
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className=""
                    >
                        <h1 className="text-3xl md:text-4xl mb-5 font-semibold dark:banner-glow">
                            My Journey Timeline
                        </h1>
                        <p className="mb-4 text-lg">
                            You can check more about me in{" "}
                            <a
                                href="https://drive.google.com/file/d/1XMjrR1SYo7PTXy3dIPQZNqeCMxAkNSgh/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold "
                            >
                                <span className="hover:underline font-semibold text-black dark:text-white hover:text-purple-primary dark:hover:text-purple-primary transition focus:outline-none focus-visible:ring focus-visible:ring-violet-400">
                                    My Resume
                                </span>
                            </a>
                        </p>
                        {timeline.map(({ year, experiences }) => (
                            <div
                                key={year}
                                className="sm:flex mb-3 sm:space-x-4"
                            >
                                <h2 className="text-2xl mb-3 font-semibold">
                                    {year}
                                </h2>
                                <div className="flex-1">
                                    <div className="my-4 w-full h-[2px] bg-gray-200 dark:bg-[#143044]" />
                                    <ul className="mb-5 space-y-2 text-lg">
                                        {experiences.map((exp, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="before:marker-colored before:dark:marker-colored-glow ml-5"
                                                >
                                                    {exp}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </section>
            {/* ======== END ::: ABOUT SECTION ======== */}
        </Layout>
    );
}
