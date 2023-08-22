import type { Metadata } from "next";

import clsx from "clsx";

import StyledLink from "@/components/StyledLink";

export const metadata: Metadata = {
  title: "About",
  description: "TLG ISI",
};

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
        <StyledLink openNewTab href="https://abbauf.com/">
          PT. Abbauf Mulia Konsultan Teknologi
        </StyledLink>
      </span>,
      <span key={2}>
        Working as Frontend Developer intern at{" "}
        <StyledLink openNewTab href="https://igrow.asia/">
          iGrow Asia
        </StyledLink>
      </span>,
      <span key={3}>
        Awardee of Frontend Web Development Bootcamp Program by{" "}
        <StyledLink openNewTab href="https://www.binaracademy.com/en/about">
          Binar Academy x Kampus Merdeka
        </StyledLink>
      </span>,
      <span key={4}>
        Awardee of Fullstack Web Development Bootcamp Program by{" "}
        <StyledLink
          openNewTab
          href="https://www.instagram.com/yaumidigital.school/"
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
          openNewTab
          href="https://sanbercode.com/bootcamp/react-js-web-frontend"
        >
          Sanbercode Academy
        </StyledLink>
      </span>,
      <span key={2}>
        Working as an admin for Algorithm and Programming Laboratory at{" "}
        <StyledLink openNewTab href="https://www.its.ac.id/id/beranda/">
          Institut Technology of Sepuluh Nopember
        </StyledLink>
      </span>,
      <span key={3}>
        Joined as Staff of External Affairs of{" "}
        <StyledLink openNewTab href="https://www.instagram.com/hmtc_its/?hl=id">
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
        <StyledLink openNewTab href="https://www.its.ac.id/id/beranda/">
          Institut Technology of Sepuluh Nopember
        </StyledLink>
      </span>,
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="layout pt-4 lg:pt-10 mb-8 lg:mb-10">
          <article>
            <h1
              className={clsx(
                "mb-4 lg:mb-6",
                "text-glow-black dark:text-glow-purple",
                "text-2xl sm:text-3xl lg:text-4xl font-semibold"
              )}
            >
              About Me
            </h1>
            <div
              className={clsx("space-y-4", "text-sm sm:text-base lg:text-lg")}
            >
              <p>
                I am a full-stack web developer. My journey in web development
                started in 2019, I started by joined a course about HTML, CSS,
                and Javascript. Since then, my journey continue by joining
                another bootcamp about development (free and paid).
              </p>
              <p>
                I like to learn new stuff especially about web development and
                keep improving to be a better version of myself. Technologies
                are like a tools for me, I use it for achieving my goals.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="layout mb-8 lg:mb-10">
          <article>
            <h2
              className={clsx(
                "mb-4 lg:mb-6",
                "text-glow-black dark:text-glow-purple",
                "text-2xl sm:text-3xl lg:text-4xl font-semibold"
              )}
            >
              Contacts
            </h2>
            <div
              className={clsx("space-y-4", "text-sm sm:text-base lg:text-lg")}
            >
              <p>
                Please contact me if you have any projects or need opinion about
                web development stuff.
              </p>
              <ul className="sm:ml-6 lg:ml-8 space-y-2">
                {contacts.map((contact, index) => {
                  return (
                    <li
                      key={index}
                      className="list-custom before:content-['\2022']"
                    >
                      <span>{contact.label}: </span>
                      <StyledLink openNewTab href={contact.href}>
                        {contact.text}
                      </StyledLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="layout pb-4 lg:pb-10">
          <article className="">
            <h2
              className={clsx(
                "mb-4 lg:mb-6",
                "text-glow-black dark:text-glow-purple",
                "text-2xl sm:text-3xl lg:text-4xl font-semibold"
              )}
            >
              My Journey Timeline
            </h2>
            <p className={clsx("mb-4", "text-sm sm:text-base lg:text-lg")}>
              You can check more about me in{" "}
              <StyledLink
                openNewTab
                href="https://drive.google.com/file/d/1XMjrR1SYo7PTXy3dIPQZNqeCMxAkNSgh/view?usp=sharing"
              >
                My Resume
              </StyledLink>
            </p>
            <ul
              aria-label="My journey in software development."
              className="space-y-4 sm:space-y-0"
            >
              {timeline.map(({ year, experiences }) => (
                <li key={year} className="sm:flex sm:space-x-4">
                  <h3
                    className={clsx(
                      "text-xl sm:text-2xl lg:text-3xl font-semibold"
                    )}
                  >
                    <span className="sr-only">Year</span> {year}
                  </h3>
                  <div className="flex-1">
                    <div className="my-4 w-full h-[2px] bg-primary" />
                    <ul
                      className={clsx(
                        "space-y-4 sm:ml-6 lg:ml-8",
                        "text-sm sm:text-base lg:text-lg"
                      )}
                    >
                      {experiences.map((exp, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center list-custom before:content-['\2022']"
                          >
                            <p>{exp}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
