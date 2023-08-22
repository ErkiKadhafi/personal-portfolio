import type { Metadata } from "next";
import { notFound } from "next/navigation";

import clsx from "clsx";
import { allProjects } from "../../../.contentlayer/generated";

import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Projects",
  description: "TLG ISI",
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
        <div className="layout py-6 lg:py-10">
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
          <p
            className={clsx(
              "mb-8 sm:mb-8 lg:mb-12",
              "text-center text-sm sm:text-base lg:text-xl tracking-[0.25em] uppercase"
            )}
          >
            List of work that I have done this far.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <li key={index}>
                <Card project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
