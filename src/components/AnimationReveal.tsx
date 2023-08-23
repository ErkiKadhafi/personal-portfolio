"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  stagger,
  AnimationProps,
} from "framer-motion";
import clsx from "clsx";

type AnimationRevealProps = {
  children: React.ReactNode;
  withSlider?: boolean;
  widthFit?: boolean;
};

export const popUpAnimation: AnimationProps = {
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
};

export default function AnimationReveal({
  children,
  withSlider = true,
  widthFit = true,
}: AnimationRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={clsx("relative", widthFit && "w-fit h-fit")}>
      <motion.div
        {...popUpAnimation}
        animate={mainControls}
        transition={{ duration: 0.5, delay: withSlider ? 0.25 : 0 }}
      >
        {children}
      </motion.div>
      {withSlider && (
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "hsl(var(--ring))",
            zIndex: 30,
          }}
        />
      )}
    </div>
  );
}
