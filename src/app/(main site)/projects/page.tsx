import type { Metadata } from "next";
import { notFound } from "next/navigation";

import clsx from "clsx";

import Card from "@/components/Card";
import { allProjects } from "@/contentlayer/generated";
import AnimationReveal from "@/components/AnimationReveal";
import Projects from "@/components/projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "List of projects that I've build thus far.",
};

async function getAllProjects() {
  const bigProjects = allProjects;
  if (!bigProjects) notFound();
  return bigProjects;
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <section>
        <div className="layout py-8 sm:py-10 lg:py-12">
          <AnimationReveal widthFit={false}>
            <h1
              className={clsx(
                "text-center",
                "mb-2 sm:mb-4 lg:mb-6",
                "text-glow-black dark:text-glow-purple",
                "text-3xl sm:text-4xl lg:text-5xl font-semibold"
              )}
            >
              Projects
            </h1>
          </AnimationReveal>
          <AnimationReveal widthFit={false}>
            <p
              className={clsx(
                "mb-8 sm:mb-10 lg:mb-12",
                "text-center text-sm sm:text-base lg:text-xl tracking-[0.25em] uppercase"
              )}
            >
              List of work that I have done this far.
            </p>
          </AnimationReveal>
          <Projects projects={projects} />
        </div>
      </section>
    </>
  );
}
