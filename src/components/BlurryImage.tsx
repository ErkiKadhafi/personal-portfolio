"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

export type BlurryImageProps = {
  customSize: boolean;
  containerClassName?: string;
} & ImageProps &
  React.ComponentPropsWithoutRef<"img">;

export default function BlurryImage({
  customSize,
  src,
  alt,
  height,
  width,
  className,
  containerClassName,
  ...props
}: BlurryImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <figure
      className={cn(
        clsx(
          !customSize && "relative w-full aspect-video",
          "overflow-hidden rounded-md",
          containerClassName
        )
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          clsx(
            isLoading ? "scale-110 blur-md" : "scale-100 blur-0",
            "border border-black dark:border-ring transition-all rounded-md",
            className
          )
        )}
        fill={!customSize}
        {...(customSize && {
          height: height,
          width: width,
        })}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </figure>
  );
}
