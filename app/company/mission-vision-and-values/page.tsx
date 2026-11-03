"use client";

import Link from "next/link";
import { FadeIn } from "../../components/FadeIn";

const cultureItems = [
  "We aim to hire professionals who are passionate and dedicated to their work.",
  "Clear communication matters; simplicity stands out in a complex development process to foster connection.",
  "Understanding a business's concept is vital groundwork before starting any development project.",
];

const commitmentItems = [
  "Royallix is your trusted proactive technology partner, delivering tailored solutions for success",
  "Royallix empathizes with fellow business owners, understanding their day-to-day digital needs.",
  "Royallix serves as your reliable built-in development partner, always available when you need assistance.",
];

const valueCards = [
  {
    title: "Commitment",
    text: "Be accountable, work together as a team and communicate clearly.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 15l4-4 4 3 7-8"
          stroke="#001528"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 6h5v5"
          stroke="#001528"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    text: "Think outside the box, challenge constructively and act before others do.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 14a4 4 0 1 1 2.5-7.1A4.5 4.5 0 1 1 16 14H8z"
          stroke="#001528"
          strokeWidth="1.6"
        />
        <path
          d="M10 14v2a2 2 0 0 0 4 0v-2"
          stroke="#9aa6b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    text: "Creating a positive place to work and supporting ethical initiatives.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" stroke="#001528" strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.2" stroke="#9aa6b8" strokeWidth="1.6" />
        <circle cx="12" cy="14" r="2.2" stroke="#001528" strokeWidth="1.6" />
        <path
          d="M4.5 18c.8-1.7 2.3-2.6 3.5-2.6M16 15.4c1.2 0 2.7.9 3.5 2.6M9.5 18c.6-1.2 1.5-1.8 2.5-1.8s1.9.6 2.5 1.8"
          stroke="#001528"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    text: "Always deliver exceptional quality, accomplish and improve.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5l1.8 3.7 4.1.6-3 2.9.7 4.1L12 13l-3.6 1.8.7-4.1-3-2.9 4.1-.6L12 3.5z"
          stroke="#001528"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 16.5l.9 1.8 2 .3-1.5 1.4.3 2L5 20.8l-1.7.9.3-2-1.5-1.4 2-.3.9-1.8zM19 16.5l.9 1.8 2 .3-1.5 1.4.3 2L19 20.8l-1.7.9.3-2-1.5-1.4 2-.3.9-1.8z"
          stroke="#9aa6b8"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function CheckIcon({ color = "#ffffff" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MissionVisionValuesPage() {
  return (
    <div>
      <section
        className="relative overflow-hidden bg-[#e6332c] bg-cover bg-center bg-no-repeat [background-blend-mode:multiply]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80)",
        }}
      >
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4 py-24 text-center md:py-32">
          <FadeIn>
            <h1 className="mb-6 text-[2.5rem] font-semibold text-white md:text-[3.25rem]">
              Royallix&apos;s Mission
            </h1>
            <p className="mx-auto mb-10 max-w-[760px] text-[16px] font-light leading-[1.75] text-white md:text-[18px]">
              Royallix is on a mission to drive global digital transformation –
              creating custom, SaaS, and mobile solutions that empower businesses
              to go paperless, work smarter, and grow sustainably.
            </p>
            <Link
              href="/support/contact-us"
              className="inline-block rounded-[3px] border-2 border-white px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-[#e6332c]"
            >
              Try for yourself
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#e6332c] px-8 py-16 md:px-14 md:py-20">
          <FadeIn>
            <div className="mx-auto max-w-[420px]">
              <h2 className="mb-8 text-center text-[2rem] font-semibold text-white md:text-[2.25rem]">
                Our Culture
              </h2>
              <ul className="mb-10 space-y-5">
                {cultureItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white">
                    <CheckIcon color="#ffffff" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href="/company/about"
                  className="inline-block rounded-[3px] border-2 border-white px-7 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-[#e6332c]"
                >
                  Find out more
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="bg-[#001528] px-8 py-16 md:px-14 md:py-20">
          <FadeIn delay={0.08}>
            <div className="mx-auto max-w-[420px]">
              <h2 className="mb-8 text-center text-[2rem] font-semibold text-white md:text-[2.25rem]">
                Our Commitment
              </h2>
              <ul className="mb-10 space-y-5">
                {commitmentItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white">
                    <CheckIcon color="#e6332c" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href="/support/contact-us"
                  className="inline-block rounded-[3px] border-2 border-white px-7 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-[#001528]"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid w-[1398px] max-w-[calc(90%+30px)] grid-cols-1 gap-6 px-4 md:grid-cols-[240px_1fr] md:gap-12">
          <FadeIn>
            <h2 className="text-[1.75rem] font-semibold text-[#001528] md:text-[2rem]">
              Our Mission
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-[15px] leading-[1.8] text-[#4a5568] md:text-base">
              Our mission is to empower organizations to eliminate paperwork by
              delivering secure, innovative, and sustainable digital solutions –
              from custom software and SaaS platforms to mobile apps and workflow
              automation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f3f6f9] py-14 md:py-16">
        <div className="mx-auto grid w-[1398px] max-w-[calc(90%+30px)] grid-cols-1 gap-6 px-4 md:grid-cols-[240px_1fr] md:gap-12">
          <FadeIn>
            <h2 className="text-[1.75rem] font-semibold text-[#001528] md:text-[2rem]">
              Our Vision
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-[15px] leading-[1.8] text-[#4a5568] md:text-base">
              To create a world where businesses of every size can work smarter,
              paperless, and sustainably – anytime, anywhere.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr] md:gap-12">
            <FadeIn>
              <h2 className="text-[1.75rem] font-semibold text-[#001528] md:text-[2rem]">
                Our Values
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-[15px] leading-[1.8] text-[#4a5568] md:text-base">
                At Royallix, our values guide everything we do. We believe in
                efficiency, creating solutions that simplify work and save time.
                We are committed to sustainability, reducing paper waste and
                supporting a greener future. With accessibility at the heart of
                our design, we make it possible to work anytime, anywhere. We
                thrive on innovation, building future-ready digital solutions
                that evolve with business needs. And above all, we prioritize
                security, ensuring every client&apos;s data is protected and
                trusted.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="rounded-[8px] border border-[#e6ebf0] bg-white p-6 md:p-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {valueCards.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 pt-1">{item.icon}</div>
                    <div>
                      <h3 className="mb-2 text-[1.125rem] font-semibold text-[#001528]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#4a5568]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
