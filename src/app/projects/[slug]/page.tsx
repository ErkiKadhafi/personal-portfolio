import { Mdx } from "@/components/Mdx";
import StyledLink from "@/components/StyledLink";
import Toc from "@/components/Toc";
import clsx from "clsx";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { CustomIcon as Icon, IconListType } from "@/components/Icon";

import "react-image-lightbox/style.css";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

async function getProjectFromParams(slug: string) {
  const project = allProjects.find((project) => project.slugAsParams === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params.slug);

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project = await getProjectFromParams(params.slug);
  const projectDetail = [
    {
      label: "Created Date",
      value: project.createdAt,
    },
    {
      label: "Repo Link",
      value:
        project.repoLink === "-" ? (
          "-"
        ) : (
          <StyledLink href={project.repoLink} openNewTab>
            Visit Repo
          </StyledLink>
        ),
    },
    {
      label: "Demo Link",
      value:
        project.demoLink === "-" ? (
          "-"
        ) : (
          <StyledLink href={project.demoLink} openNewTab>
            Visit Website
          </StyledLink>
        ),
    },
    {
      label: "Number of People",
      value: project.numberOfPeople,
    },
  ];

  return (
    <section>
      <div className="layout pt-6 lg:pt-10 mb-8 lg:mb-10">
        <section className="grid lg:grid-cols-[auto,250px] gap-8">
          <article className="space-y-2 sm:space-y-4 lg:space-y-6">
            {/* ======== title ======== */}
            <h1
              className={clsx(
                "text-glow-black dark:text-glow-purple",
                "text-3xl sm:text-4xl lg:text-5xl font-semibold"
              )}
            >
              {project.title}
            </h1>
            {/* ======== thumbnail ======== */}
            <figure
              className={clsx("relative w-full aspect-video border rounded-lg")}
            >
              <Image
                src={`/images/projects/${project.thumbnail}`}
                alt={project.title}
                fill={true}
                className="rounded-lg border border-black dark:border-ring"
              />
            </figure>
            {/* ======== tech stacks ======== */}
            <ul
              className={clsx(
                "flex justify-center",
                "px-2 py-4",
                "bg-primary text-foreground rounded-md"
              )}
            >
              {project.techStacks.map((techStack, index) => (
                <li key={index} className="mr-3 block text-2xl lg:text-3xl">
                  <Icon iconName={techStack as IconListType} />
                </li>
              ))}
            </ul>
            {/* ======== detail project ======== */}
            <ul
              className={clsx(
                "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0",
                "px-2 py-4",
                "bg-primary text-foreground rounded-md"
              )}
            >
              {projectDetail.map((project, index) => (
                <li
                  key={index}
                  className="text-center text-sm sm:text-base sm:border-r sm:last:border-none border-ring"
                >
                  <p className="font-bold">{project.label}</p>
                  <p>{project.value}</p>
                </li>
              ))}
            </ul>
            <Mdx code={project.body.code} />
          </article>
          <aside className="block">
            <div className="sticky top-24">
              {/* ======== table of content ======== */}
              <div
                className={clsx(
                  "mb-6 p-4",
                  "bg-primary text-foreground rounded-md"
                )}
              >
                <h2
                  className={clsx(
                    "mb-2.5",
                    "text-glow-black dark:text-glow-purple",
                    "text-base sm:text-lg lg:text-xl font-semibold"
                  )}
                >
                  Table Of Content
                </h2>
                <Toc headings={project.headings} />
              </div>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}
