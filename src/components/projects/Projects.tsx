"use client";

import { Project } from ".contentlayer/generated/types";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import { popUpAnimation } from "../AnimationReveal";

export default function Projects({ projects }: { projects: Project[] }) {
  const variants = popUpAnimation.variants;
  popUpAnimation.transition = {
    duration: 0.5,
    staggerChildren: 0.25,
    ease: "easeIn",
    type: "tween",
  };
  return (
    <motion.ul
      {...popUpAnimation}
      animate="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.li variants={variants} key={index}>
          <Card project={project} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
