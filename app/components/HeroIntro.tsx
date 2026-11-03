"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroIntro({ one, two, three, ctaHref = "/support/contact-us" }) {
  return (
    <motion.div
      className="box-border w-full px-[15px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={fadeUp}
        className="text-center text-[3rem] text-white"
      >
        {one}
      </motion.div>
      <motion.div
        variants={fadeUp}
        className="text-center text-[5rem] font-semibold leading-[1.2] text-white"
      >
        {two}
      </motion.div>
      <motion.div
        variants={fadeUp}
        className="my-4 flex w-full justify-center"
      >
        <span className="relative top-[1px] block h-px w-[10%] border-b-[5px] border-white" />
      </motion.div>
      <motion.div variants={fadeUp} className="text-center">
        <a
          href={ctaHref}
          className="h-auto border-none bg-transparent p-[15px_50px_10px_10px] font-semibold uppercase tracking-[1px] text-white"
        >
          {three}
        </a>
      </motion.div>
    </motion.div>
  );
}
