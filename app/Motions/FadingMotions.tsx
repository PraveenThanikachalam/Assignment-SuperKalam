"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface motionTypes {
  children: ReactNode;
  type: keyof Motions;
  classNames: string;
}

interface Motion extends Variants {
  hidden: { opacity: number; y: number; x: number };
  enter: { opacity: number; y: number; x: number };
}


interface Motions {
  FadeUp: Motion;
  FadeRight: Motion;
  FadeLeft: Motion;
}

const motions: Motions = {
  FadeUp: {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
  },
  FadeRight: {
    hidden: { opacity: 0, y: 0, x: -200 },
    enter: { opacity: 1, y: 0, x: 0 },
  },
  FadeLeft: {
    hidden: { opacity: 0, y: 0, x: 200 },
    enter: { opacity: 1, y: 0, x: 0 },
  },
};

export default function MotionWrapper({
  children,
  type,
  classNames,
}: motionTypes) {
  const selectedMotion = motions[type];

  return (
    <motion.div
      variants={selectedMotion} // Use the selected motion
      initial="hidden"
      animate="enter"
      className={classNames}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
