"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import items from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { montserrat } from "../fonts";

interface CarouselItem {
  id: string | number;
  imageUrl: string;
  layout: "staggered" | "centered" | "services";
  lines?: string[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services?: string[];
  cta: string;
  ctaHref: string;
  ctaAlign?: "center" | "left";
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SlideCta({
  href,
  label,
  align = "center",
}: {
  href: string;
  label: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`mt-9 ${
        align === "left" ? "text-left" : "flex flex-col items-center"
      }`}
    >
      <span className="mb-3.5 block h-px w-12 bg-white" />
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[1.5px] text-white transition-opacity hover:opacity-80 md:text-[16px]"
      >
        {label}
        <span aria-hidden="true" className="text-lg font-normal">
          →
        </span>
      </Link>
    </motion.div>
  );
}

function SlideContent({
  item,
  isActive,
}: {
  item: CarouselItem;
  isActive: boolean;
}) {
  const animationKey = `${item.id}-${isActive ? "on" : "off"}`;

  if (item.layout === "staggered") {
    return (
      <motion.div
        key={animationKey}
        className="mx-auto flex w-full max-w-[1100px] flex-col items-stretch px-6 py-16 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-1 text-white md:gap-2">
          {(item.lines ?? []).map((line, index) => (
            <motion.h2
              key={line}
              variants={fadeUpVariants}
              className={`text-[2.25rem] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[3.75rem] lg:text-[4.5rem] ${
                index === 0
                  ? "self-start text-left md:pl-[4%]"
                  : index === 1
                    ? "self-center text-center"
                    : "self-end text-right md:pr-[4%]"
              }`}
            >
              {line}
            </motion.h2>
          ))}
        </div>
        {item.subtitle ? (
          <motion.p
            variants={fadeUpVariants}
            className="mt-8 text-center text-[18px] font-normal leading-relaxed text-white md:text-[22px]"
          >
            {item.subtitle}
          </motion.p>
        ) : null}
        <SlideCta href={item.ctaHref} label={item.cta} align="center" />
      </motion.div>
    );
  }

  if (item.layout === "services") {
    return (
      <motion.div
        key={animationKey}
        className="relative mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center px-6 py-16 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mb-8 text-center text-[2.5rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-white md:mb-10 md:text-[4rem] lg:text-[4.5rem]"
        >
          {item.title}
        </motion.h2>
        <div className="grid w-full max-w-[820px] grid-cols-1 gap-y-3 text-center md:grid-cols-2 md:gap-x-10 md:gap-y-4">
          {(item.services ?? []).map((service, index) => (
            <motion.p
              key={service}
              variants={fadeUpVariants}
              className={`text-[18px] font-normal text-white md:text-[22px] ${
                index >= 2 ? "md:col-span-2 md:justify-self-center" : ""
              }`}
            >
              {service}
            </motion.p>
          ))}
        </div>
        <div className="mt-auto w-full pt-10 md:absolute md:bottom-10 md:left-12 md:mt-0 md:w-auto md:pt-0">
          <SlideCta href={item.ctaHref} label={item.cta} align="left" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={animationKey}
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 py-16 text-center md:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      {item.eyebrow ? (
        <motion.p
          variants={fadeUpVariants}
          className="mb-4 text-[18px] font-normal leading-relaxed text-white md:mb-5 md:text-[22px]"
        >
          {item.eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={fadeUpVariants}
        className="whitespace-nowrap text-[clamp(1.5rem,5.2vw,4.5rem)] font-extrabold leading-[1.15] tracking-[-0.01em] text-white"
      >
        {item.title}
      </motion.h2>
      {item.subtitle ? (
        <motion.p
          variants={fadeUpVariants}
          className="mt-5 text-[18px] font-normal leading-relaxed text-white md:mt-6 md:text-[24px]"
        >
          {item.subtitle}
        </motion.p>
      ) : null}
      <SlideCta
        href={item.ctaHref}
        label={item.cta}
        align={item.ctaAlign ?? "center"}
      />
    </motion.div>
  );
}

export function ResponsiveCarousel() {
  const { responsive } = items as { responsive: CarouselItem[] };
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`hero-carousel w-full ${montserrat.className}`}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={700}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        selectedItem={activeIndex}
        onChange={setActiveIndex}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`mx-1.5 h-2.5 w-2.5 rounded-full border-0 p-0 transition-colors ${
              isSelected ? "bg-white" : "bg-[#8a1814]"
            }`}
            aria-label={`${label} ${index + 1}`}
          />
        )}
      >
        {responsive.map((item, index) => (
          <div
            key={item.id}
            className="relative flex min-h-[520px] w-full items-center justify-center md:min-h-[620px] lg:min-h-[680px]"
          >
            <div
              className="absolute inset-0 bg-[#e6332c] bg-cover bg-center bg-no-repeat [background-blend-mode:multiply]"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full w-full items-center justify-center pb-14 pt-10">
              <SlideContent item={item} isActive={activeIndex === index} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
