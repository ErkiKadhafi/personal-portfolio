import type { Metadata } from "next";

import clsx from "clsx";

import StyledLink from "@/components/StyledLink";
import AnimationReveal from "@/components/AnimationReveal";

export const metadata: Metadata = {
  title: "About",
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
    year: 2023,
    experiences: [
      <span key={1}>
        Awardee of Backend Development Bootcamp Program by{" "}
        <StyledLink openNewTab href="https://synrgy.id/">
          Synrgy Academy from BCA
        </StyledLink>
      </span>,
      <span key={2}>
        Graduating from{" "}
        <StyledLink openNewTab href="https://www.its.ac.id/">
          Institut Teknologi Sepuluh Nopember
        </StyledLink>
      </span>,
    ],
  },
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
        <div className="layout pt-6 sm:pt-8 lg:pt-10 mb-8 lg:mb-10">
          <article>
            <AnimationReveal>
              <h1
                className={clsx(
                  "mb-4 lg:mb-6",
                  "text-glow-black dark:text-glow-purple",
                  "text-2xl sm:text-3xl lg:text-4xl font-semibold"
                )}
              >
                About Me
              </h1>
            </AnimationReveal>
            <div
              className={clsx("space-y-4", "text-sm sm:text-base lg:text-lg")}
            >
              <AnimationReveal>
                <p>
                  Hey there, you can call me Erki! I'm all about being a front
                  end web developer. My go-to tools are React and NextJs. I get
                  a real kick out of crafting websites that make life easier for
                  people. That's why I'm thinking about turning this site into a
                  blog, a place where I can dish out tips and tricks on all
                  things programming, with a focus on front end matters.
                </p>
              </AnimationReveal>
              <AnimationReveal>
                <p>
                  I'm also looking to learn about backend development. I'm
                  currently in a scholarship bootcamp where I'm diving into Java
                  for backend work. I might even write some handy tips and
                  tricks about Java in the future.
                </p>
              </AnimationReveal>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="layout mb-8 lg:mb-10">
          <article>
            <AnimationReveal>
              <h2
                className={clsx(
                  "mb-4 lg:mb-6",
                  "text-glow-black dark:text-glow-purple",
                  "text-2xl sm:text-3xl lg:text-4xl font-semibold"
                )}
              >
                Contacts
              </h2>
            </AnimationReveal>
            <div
              className={clsx("space-y-4", "text-sm sm:text-base lg:text-lg")}
            >
              <AnimationReveal>
                <p>
                  Please contact me if you have any projects or need opinion
                  about web development stuff.
                </p>
              </AnimationReveal>
              <ul className="sm:ml-6 lg:ml-8 space-y-2">
                {contacts.map((contact, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center list-custom before:content-['\2022']"
                    >
                      <AnimationReveal>
                        <span>{contact.label}: </span>
                        <StyledLink openNewTab href={contact.href}>
                          {contact.text}
                        </StyledLink>
                      </AnimationReveal>
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
            <AnimationReveal>
              <h2
                className={clsx(
                  "mb-4 lg:mb-6",
                  "text-glow-black dark:text-glow-purple",
                  "text-2xl sm:text-3xl lg:text-4xl font-semibold"
                )}
              >
                My Journey Timeline
              </h2>
            </AnimationReveal>
            <AnimationReveal>
              <p className={clsx("mb-4", "text-sm sm:text-base lg:text-lg")}>
                You can check more about me in{" "}
                <StyledLink
                  openNewTab
                  href="https://drive.google.com/file/d/1ybJqoKnxJ0CjzpAsRveEs6IsPui2izxp/view?usp=sharing"
                >
                  My Resume
                </StyledLink>
              </p>
            </AnimationReveal>
            <ul
              aria-label="My journey in software development."
              className="space-y-4 sm:space-y-0"
            >
              {timeline.map(({ year, experiences }) => (
                <li key={year} className="sm:flex sm:space-x-4">
                  <AnimationReveal>
                    <h3
                      className={clsx(
                        "text-xl sm:text-2xl lg:text-3xl font-semibold"
                      )}
                    >
                      <span className="sr-only">Year</span> {year}
                    </h3>
                  </AnimationReveal>
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
                            <AnimationReveal>
                              <p>{exp}</p>
                            </AnimationReveal>
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
