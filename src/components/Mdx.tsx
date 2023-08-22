import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";
import clsx from "clsx";

import { FaSass } from "react-icons/fa";
import { CustomIcon } from "./Icon";
import StyledLink from "./StyledLink";
import LightBox, { LightBoxProps } from "@/components/Lightbox";

const components = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        clsx(
          "mb-4 lg:mb-6 w-max",
          "text-glow-black dark:text-glow-purple",
          "text-2xl sm:text-3xl lg:text-4xl font-semibold relative"
        ),
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h2
      className={cn(
        clsx(
          "mb-4 lg:mb-6 w-max",
          "text-xl sm:text-2xl lg:text-3xl font-semibold relative"
        ),
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(clsx("mb-4", "text-sm sm:text-base lg:text-lg"), className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        clsx(
          "mb-4 ml-8 space-y-1",
          "text-sm sm:text-base lg:text-lg",
          "list-disc",
          className
        )
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        clsx(
          "mb-4 ml-8 space-y-1",
          "text-sm sm:text-base lg:text-lg",
          "list-decimal",
          className
        )
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",

        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] bg-primary font-semibold",
        "text-xs sm:text-sm lg:text-base",
        className
      )}
      {...props}
    />
  ),
  ImageGallery: ({ children }) => {
    return <div className="grid grid-cols-2 gap-4 mb-4">{children}</div>;
  },
  LightBox,
  StyledLink,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
