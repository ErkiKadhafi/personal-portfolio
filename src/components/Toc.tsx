"use client";

import useScrollSpy from "@/hooks/useScrollspy";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";

type HeadingType = {
  level: number;
  text: string;
  slug: string | undefined;
};

type TocProps = {
  headings: HeadingType[];
};

export default function Toc({ headings }: TocProps) {
  const activeSectionId = useScrollSpy();

  return (
    <ul className="space-y-1 sm:ml-6 lg:ml-8">
      {headings.map((heading: HeadingType, index) => (
        <li
          key={index}
          className="list-custom before:content-['\2022'] text-sm sm:text-base"
        >
          <Link
            href={`#${heading.slug}`}
            className={clsx(
              "transition-all ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "underline-animation-base",
              activeSectionId === heading.slug &&
                "before:underline-animation-start"
            )}
          >
            {[...Array(heading.level - 1)].map((el, i) => (
              <Fragment key={i}>#</Fragment>
            ))}{" "}
            {heading.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
