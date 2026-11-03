"use client";

import { useEffect, useState } from "react";

const defaultLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Core Values", href: "#values" },
  { label: "Expertise", href: "#expertise" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ's", href: "#faqs" },
  { label: "Contact us", href: "#site-footer" },
];

export const industryLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Core Values", href: "#values" },
  { label: "Expertise", href: "#expertise" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact us", href: "#site-footer" },
];

export function SubNavBar({ links = defaultLinks }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href || "#overview");

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveHref("#" + visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  function handleClick(e, href) {
    e.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const offset = 78;
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
    setActiveHref(href);
  }

  return (
    <nav className="relative border-b border-[#eceff2] bg-white">
      <div className="mx-auto flex w-[1398px] max-w-[calc(90%+30px)] items-center justify-center overflow-x-auto">
        <ul className="flex min-w-max items-center justify-center px-2">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href} className="mx-[10px] md:mx-[14px]">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={
                    "inline-block border-b-2 py-5 text-[15px] font-semibold transition-colors duration-200 " +
                    (isActive
                      ? "border-[#e6332c] text-[#e6332c]"
                      : "border-transparent text-[#001528] hover:border-[#e6332c] hover:text-[#e6332c]")
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
