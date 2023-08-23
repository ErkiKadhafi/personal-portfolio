"use client";

import { useState } from "react";
import Lightbox from "react-image-lightbox";
import BlurryImage, { BlurryImageProps } from "./BlurryImage";

export default function LightBox({
  customSize = false,
  src,
  alt,
  height,
  width,
}: BlurryImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BlurryImage
        src={`/images/projects/${src}`}
        alt={alt}
        customSize={customSize}
        {...(customSize && {
          height: height,
          width: width,
        })}
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        sizes="(max-width: 1024px) 50vw, 44vw"
      />
      {isOpen && (
        <Lightbox
          onCloseRequest={() => setIsOpen(false)}
          mainSrc={`/images/projects/${src}`}
        />
      )}
    </>
  );
}
