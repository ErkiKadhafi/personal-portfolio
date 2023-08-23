import { Mdx } from "@/components/Mdx";
import StyledLink from "@/components/StyledLink";
import Toc from "@/components/Toc";
import clsx from "clsx";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CustomIcon as Icon, IconListType } from "@/components/Icon";

import "react-image-lightbox/style.css";
import BlurryImage from "@/components/BlurryImage";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { allProjects } from "@/contentlayer/generated";
import AnimationReveal from "@/components/AnimationReveal";

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
          <StyledLink
            href={project.repoLink}
            openNewTab
            className="text-sm sm:text-base lg:text-base"
          >
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
          <StyledLink
            href={project.demoLink}
            openNewTab
            className="text-sm sm:text-base lg:text-base"
          >
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
    <section className="layout pt-6 lg:pt-10 mb-8 lg:mb-10">
      <div className="grid lg:grid-cols-[auto,250px] gap-8 mb-8">
        <article className="space-y-4 lg:space-y-6">
          {/* ======== title ======== */}
          <AnimationReveal>
            <h1
              className={clsx(
                "text-glow-black dark:text-glow-purple",
                "text-3xl sm:text-4xl lg:text-5xl font-semibold"
              )}
            >
              {project.title}
            </h1>
          </AnimationReveal>
          {/* ======== thumbnail ======== */}
          <BlurryImage
            src={`/images/projects/${project.thumbnail}`}
            alt={project.title}
            className="rounded-lg"
            sizes="(max-width: 1024px) 100vw, 87vw"
            customSize={false}
            priority={true}
          />
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
                <AnimationReveal withSlider={false}>
                  <Icon iconName={techStack as IconListType} />
                </AnimationReveal>
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
                className="text-center text-sm sm:text-base sm:border-r sm:last:border-none border-ring px-1"
              >
                <p className="font-bold">{project.label}</p>
                <AnimationReveal widthFit={false}>
                  <p>{project.value}</p>
                </AnimationReveal>
              </li>
            ))}
          </ul>
          <AnimationReveal widthFit={false}>
            <Mdx code={project.body.code} />
          </AnimationReveal>
          {/* ======== link back to projects ======== */}
          <div className="flex justify-left">
            <AnimationReveal withSlider={false}>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "text-xs sm:text-sm lg:text-base"
                )}
              >
                <Icon iconName={"arrowLeft" as IconListType} />
                <span className="inline-block ml-4">Back to projects</span>
              </Link>
            </AnimationReveal>
          </div>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {/* ======== table of content ======== */}
            <div
              className={clsx(
                "p-4 pb-6",
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
              <AnimationReveal widthFit={false}>
                <Toc headings={project.headings} />
              </AnimationReveal>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
