"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

export type LightBoxProps = {
  imageSrc: string;
  imageAlt: string;
} & (
  | { customSize: true; height: number; width: number }
  | { customSize: false }
);

export default function LightBox(props: LightBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure
        className={clsx(!props.customSize && "relative w-full aspect-video")}
      >
        <Image
          src={`/images/projects/${props.imageSrc}`}
          alt={props.imageAlt}
          className="cursor-pointer rounded-md border border-black dark:border-ring"
          fill={!props.customSize}
          {...(props.customSize && {
            height: props.height,
            width: props.width,
          })}
          onClick={() => setIsOpen(true)}
        />
      </figure>
      {isOpen && (
        <Lightbox
          onCloseRequest={() => setIsOpen(false)}
          mainSrc={`/images/projects/${props.imageSrc}`}
        />
      )}
    </>
  );
}
