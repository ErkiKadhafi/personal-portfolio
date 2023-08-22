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
    <ul className="mb-5 space-y-1 sm:ml-6 lg:ml-8">
      {headings.map((heading: HeadingType, index) => (
        <li
          key={index}
          className="list-custom before:content-['\2022'] text-sm sm:text-base"
        >
          <Link
            href={`#${heading.slug}`}
            className={clsx(
              "underline-animation-base ",
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
