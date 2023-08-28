import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../.contentlayer/generated";
import { CustomIcon as Icon, IconListType } from "./Icon";
import BlurryImage from "./BlurryImage";
import moment from "moment";

type CardProps = {
  isBigCard?: boolean;
  project: Project;
};

export default function Card({ isBigCard = false, project }: CardProps) {
  return (
    <Link
      href={project.slug}
      className="group focus-visible:outline-none h-full"
    >
      <article
        className={clsx(
          "transition-all rounded-md",
          "shadow-lg hover:bg-gray-400/60 dark:hover:bg-background-secondary ring-offset-background group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2",
          "bg-primary text-primary-foreground",
          "h-full p-4",
          "flex flex-col",
          isBigCard &&
            "lg:p-8 relative md:ml-[25%] md:pl-[calc(25%)] lg:pl-[calc(20%)]"
        )}
      >
        <div className="w-8 h-2 bg-ring mb-4 shadow-glow-black dark:shadow-glow-green" />
        <BlurryImage
          src={`/images/projects/${project.thumbnail}`}
          alt={project.title}
          customSize={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          containerClassName={clsx(
            isBigCard && "md:w-[60%] lg:w-[50%] md:max-w-[325px] lg:max-w-none",
            isBigCard &&
              "md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:-left-4 md:top-1/2",
            "mb-4"
          )}
        />
        <div className="space-y-1 mb-4">
          <h3 className="underline-animation-base group-hover:before:underline-animation-start text-lg sm:text-xl lg:text-2xl font-semibold">
            {project.title}
          </h3>
          <time className="text-xs sm:text-sm tracking-[0.25em] block uppercase">
            {moment(project.createdAt).format("MMMM YYYY").toString()}
          </time>
        </div>
        <div className="grow flex flex-col justify-between">
          <p className="text-sm md:text-base mb-4">{project.summary}</p>
          <ul className="flex">
            {project.techStacks.map((techStack, index) => (
              <li key={index} className="mr-3 block text-2xl lg:text-3xl">
                <Icon iconName={techStack as IconListType} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
}
