"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { montserrat } from "../fonts";

type NavLink = { label: string; slug: string };
type NavSection = { title: string; slug: string; links: NavLink[] };

const navItems: {
  Services: NavSection[];
  Industries: NavLink[];
  Company: NavLink[];
} = {
  Services: [
    {
      title: "Website Development",
      slug: "website-development",
      links: [
        { label: "Shopify Development", slug: "shopify-development" },
        { label: "Magento Development", slug: "magento-development" },
        { label: "WordPress Development", slug: "wordpress-development" },
        { label: "Custom Software Solutions", slug: "custom-web-development" },
        { label: "WooCommerce Development", slug: "woocommerce-development" },
        { label: "SaaS Development", slug: "saas-development" },
      ],
    },
    {
      title: "App Development",
      slug: "app-development",
      links: [
        { label: "iOS Development", slug: "ios-development" },
        { label: "Android Development", slug: "android-development" },
        { label: "Wearable App Development", slug: "wearable-app-development" },
      ],
    },
    {
      title: "DevOps Solutions",
      slug: "devops-solutions",
      links: [
        { label: "DevOps Containerization", slug: "devops-containerization" },
        { label: "DevSecOps", slug: "devsecops" },
        { label: "DevOps CI/CD", slug: "devops-ci-cd" },
        { label: "DevOps Automation", slug: "devops-automation" },
        { label: "DevOps Implementation", slug: "devops-implementation" },
      ],
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      links: [
        { label: "Pay Per Click", slug: "pay-per-click" },
        { label: "Content Writing", slug: "content-writing" },
        { label: "Email Marketing", slug: "email-marketing" },
        { label: "Social Media Marketing", slug: "social-media-marketing" },
        {
          label: "Search Engine Optimization",
          slug: "search-engine-optimization",
        },
      ],
    },
    {
      title: "UI & UX Design",
      slug: "ui-ux-design",
      links: [
        { label: "App Design", slug: "app-design" },
        { label: "Web Design", slug: "web-design" },
      ],
    },
    {
      title: "Branding Design",
      slug: "branding-design",
      links: [
        { label: "Brand Guide", slug: "brand-guide" },
        { label: "Logo Design", slug: "logo-design" },
        { label: "Stationery Design", slug: "stationery-design" },
        { label: "Business Card Design", slug: "business-card-design" },
      ],
    },
  ],
  Industries: [
    { label: "FinTech", slug: "fintech" },
    { label: "Enterprises", slug: "enterprises" },
    { label: "Healthcare", slug: "healthcare" },
    { label: "E-Learning", slug: "e-learning" },
    { label: "Entertainment", slug: "entertainment" },
  ],
  Company: [
    { label: "About", slug: "about" },
    { label: "Why Choose Us", slug: "why-choose-us" },
    {
      label: "Mission, Vision and Values",
      slug: "mission-vision-and-values",
    },
  ],
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15, ease: "easeIn" } },
};

const navLinkClass =
  "inline-flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium text-[#1a1a1a] transition-colors duration-200 hover:text-[#e6332c]";

const Dropdown = ({
  label,
  items,
  isSectioned = false,
  baseHref,
}: {
  label: string;
  items: NavSection[] | NavLink[];
  isSectioned?: boolean;
  baseHref: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex h-full items-center ${isSectioned ? "" : "relative"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`${navLinkClass} cursor-pointer ${
          open ? "text-[#e6332c]" : ""
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence>
        {open &&
          (isSectioned ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="absolute left-0 top-full z-50 w-full border-t border-[#eceff2] bg-white shadow-[0_18px_40px_rgba(0,22,40,0.1)]"
            >
              <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-2 py-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
                  {(items as NavSection[]).map((section) => (
                    <div key={section.slug} className="min-w-0">
                      <Link
                        href={`/${baseHref}/${section.slug}`}
                        className="mb-4 block text-[15px] font-bold leading-snug text-[#1a1a1a] transition-colors duration-200 hover:text-[#e6332c]"
                      >
                        {section.title}
                      </Link>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.slug}>
                            <Link
                              href={`/${baseHref}/${link.slug}`}
                              className="block text-[14px] font-normal leading-snug text-[#1a1a1a] transition-colors duration-200 hover:text-[#e6332c]"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Link
                    href="/services"
                    className="text-[14px] font-medium text-[#2f6fed] underline underline-offset-2 transition-colors hover:text-[#e6332c]"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="absolute left-0 top-full z-50 min-w-[240px] border border-[#eceff2] bg-white py-3 shadow-[0_12px_32px_rgba(0,22,40,0.1)]"
            >
              {(items as NavLink[]).map((item) => (
                <Link
                  key={item.slug}
                  href={`/${baseHref}/${item.slug}`}
                  className="block whitespace-nowrap px-5 py-2.5 text-[14px] font-normal text-[#1a1a1a] transition-colors duration-200 hover:text-[#e6332c]"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export function Navbar() {
  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-[0_8px_28px_rgba(0,22,40,0.12)] ${montserrat.className}`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[calc(90%+30px)] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/imgs/icon-logo.png"
            alt="Royallix"
            width={630}
            height={210}
            quality={100}
            priority
            sizes="480px"
            className="h-[52px] w-auto"
          />
        </Link>

        <nav className="flex h-full flex-1 items-center justify-center">
          <Dropdown
            label="Services"
            items={navItems.Services}
            isSectioned={true}
            baseHref="services"
          />
          <Dropdown
            label="Industries"
            items={navItems.Industries}
            baseHref="industries"
          />
          <Dropdown
            label="Company"
            items={navItems.Company}
            baseHref="company"
          />
          <Link href="/company/case-studies" className={navLinkClass}>
            Case Studies
          </Link>
          <Link href="/support/contact-us" className={navLinkClass}>
            Contact Us
          </Link>
        </nav>

        <a
          href="mailto:info@royallix.co"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/imgs/conversations-4872_af60b258-251e-41af-b238-dfb706d7b3d4.svg"
            className="h-9 w-9 border-none"
            alt=""
          />
          <div className="leading-tight">
            <div className="text-[13px] font-normal text-[#6b7280]">
              Have any questions?
            </div>
            <div className="text-[14px] font-bold text-[#e6332c]">
              info@royallix.co
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
