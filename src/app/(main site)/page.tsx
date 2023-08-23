import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { cn } from "@/lib/utils";
import clsx from "clsx";

import Pulsebar from "@/components/homepage/Pulsebar";
import Card from "@/components/Card";
import { CustomIcon as Icon, IconListType } from "@/components/Icon";
import { buttonVariants } from "@/components/ui/button";
import { allProjects } from "@/contentlayer/generated";
import AnimationReveal from "@/components/AnimationReveal";

export const metadata: Metadata = {
  title: "Home",
};

const myTechstack = [
  {
    header: "Styling",
    techStacks: ["sass", "tailwind"],
    desc: "CSS technologies utilized in my projects thus far.",
  },
  {
    header: "React Component Libraries",
    techStacks: ["shadcn", "headlessui", "chakraui"],
    desc: "React component libraries I've utilized.",
  },
  {
    header: "Language and Frameworks",
    techStacks: ["javascript", "typescript", "react", "next"],
    desc: "At present, my primary focus within the realm of frontend development revolves around TypeScript and Next.js, as I immerse myself in these dynamic technologies.",
  },
];

async function getBigProjects() {
  const bigProjects = allProjects.filter((project) => project.isBigProject);
  if (!bigProjects) notFound();
  return bigProjects;
}

export default async function HomePage() {
  const bigProjects = await getBigProjects();
  return (
    <>
      <section
        className={clsx(
          "flex items-center",
          "sm:min-h-[550px] lg:min-h-auto",
          "h-[100vh] sm:h-[60vh] lg:h-[70vh]",
          "-mt-14 sm:mt-0"
        )}
      >
        <div
          className={clsx(
            "layout flex flex-col justify-between md:grid md:grid-cols-3",
            "gap-y-6 md:gap-y-0"
          )}
        >
          <div
            className={clsx(
              "order-last md:order-first",
              "md:col-span-2 flex items-center"
            )}
          >
            <Pulsebar />
            {/* ======== content ======== */}
            <article className="flex flex-col justify-center gap-y-3 sm:gap-y-3.5 lg:gap-y-4">
              <AnimationReveal>
                <h1 className="text-xs sm:text-sm lg:text-base tracking-[0.25em] uppercase">
                  Hello, My Name Is Erki
                </h1>
              </AnimationReveal>
              <AnimationReveal>
                <p
                  className={clsx(
                    "text-glow-black dark:text-glow-purple",
                    "text-3xl sm:text-4xl lg:text-5xl font-semibold"
                  )}
                >
                  Frontend Developer.
                </p>
              </AnimationReveal>
              <AnimationReveal>
                <p className="text-sm sm:text-base lg:text-lg">
                  Welcome to my portfolio! I excel at crafting excellent web
                  experiences using React and Next.js. My commitment to clean
                  code ensures optimal functionality and maintainability.
                </p>
              </AnimationReveal>
            </article>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <AnimationReveal withSlider={false}>
              <figure
                className={clsx(
                  "hidden dark:block relative",
                  "h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]"
                )}
              >
                <Image
                  src="/images/earth-neon-color.png"
                  fill={true}
                  alt=""
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
                />
              </figure>
              <figure
                className={clsx(
                  "dark:hidden relative",
                  "h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]"
                )}
              >
                <Image
                  src="/images/earth-neon-black.png"
                  fill={true}
                  alt=""
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
                />
              </figure>
            </AnimationReveal>
          </div>
        </div>
      </section>
      <section className="bg-primary text-foreground relative">
        <div className="w-1/2 h-3 bg-ring absolute -top-3" />
        <div className="layout py-10 lg:py-16">
          <AnimationReveal>
            <h2
              className={clsx(
                "mb-5 sm:mb-6 lg:mb-7",
                "text-glow-black dark:text-glow-purple",
                "text-2xl sm:text-3xl lg:text-4xl font-semibold"
              )}
            >
              My Tech Stacks
            </h2>
          </AnimationReveal>
          <ul className={clsx("grid sm:grid-cols-2", "gap-6 sm:gap-6")}>
            {myTechstack.map((item, index) => (
              <li
                key={index}
                data-index={index + 1}
                className={clsx(
                  "flex list-custom",
                  index === 0 && "before:content-['01']",
                  index === 1 && "before:content-['02']",
                  index === 2 && "before:content-['03']"
                )}
              >
                <AnimationReveal>
                  <article className="space-y-3 sm:space-y-3.5">
                    <h3
                      className={clsx(
                        "text-xl sm:text-2xl lg:text-3xl font-semibold"
                      )}
                    >
                      {item.header}
                    </h3>
                    <ul className="flex">
                      {item.techStacks.map((icon, index) => (
                        <li
                          key={index}
                          className="mr-3 block text-xl sm:text-2xl lg:text-3xl"
                        >
                          <Icon iconName={icon as IconListType} />
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm sm:text-base lg:text-lg">
                      {item.desc}
                    </p>
                  </article>
                </AnimationReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="layout py-10 lg:py-16">
          <AnimationReveal widthFit={false}>
            <h2
              className={clsx(
                "text-center",
                "mb-2 sm:mb-4 lg:mb-6",
                "text-glow-black dark:text-glow-purple",
                "text-2xl sm:text-3xl lg:text-4xl font-semibold"
              )}
            >
              My Works
            </h2>
          </AnimationReveal>
          <AnimationReveal widthFit={false}>
            <p
              className={clsx(
                "mb-8 sm:mb-8 lg:mb-12",
                "text-center text-sm sm:text-base lg:text-lg tracking-[0.25em] uppercase"
              )}
            >
              Featured Projects
            </p>
          </AnimationReveal>
          <ul className="space-y-6 mb-8 lg:mb-10">
            {bigProjects.map((project, index) => (
              <li key={index}>
                <AnimationReveal withSlider={false} widthFit={false}>
                  <Card isBigCard={true} project={project} />
                </AnimationReveal>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <AnimationReveal withSlider={false}>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "text-sm sm:text-base lg:text-lg"
                )}
              >
                More of my works
              </Link>
            </AnimationReveal>
          </div>
        </div>
      </section>
    </>
  );
}
