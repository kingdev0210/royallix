"use client";

import Link from "next/link";
import { FromOurBlog } from "../../components/FromOurBlog";
import { FadeIn } from "../../components/FadeIn";

const whatWeDo = [
  {
    title: "Custom Digital Solutions",
    text: "Tailored software designed around your business needs.",
  },
  {
    title: "SaaS-Based Solutions",
    text: "Scalable, ready-to-use platforms for document management, forms, and workflow automation.",
  },
  {
    title: "Mobile App Solutions",
    text: "Bring your business to mobile with secure, user-friendly apps for teams and customers.",
  },
  {
    title: "End-to-End Digital Transformation",
    text: "From consultation to implementation, we cover every step to make your business fully digital.",
  },
  {
    title: "Anything Digital You Can Imagine",
    text: "If it involves transforming paper to digital, we can build it.",
  },
];

const whoWeAssist = [
  {
    title: "Small & Medium Businesses (SMBs):",
    text: "Simplifying operations and saving costs with SaaS and mobile solutions.",
  },
  {
    title: "Enterprises & Corporations:",
    text: "Delivering secure, scalable digital transformation to streamline complex workflows.",
  },
  {
    title: "Healthcare & Education:",
    text: "Reducing paperwork, ensuring compliance, and making data more accessible.",
  },
  {
    title: "Government & Nonprofits:",
    text: "Empowering organizations to go green and improve efficiency for communities they serve.",
  },
  {
    title: "Professionals & Entrepreneurs:",
    text: "Offering custom-built solutions to manage business smarter, anywhere.",
  },
];

const whyChooseUs = [
  {
    title: "Purpose-Driven Innovation",
    text: "We don't just provide technology — we provide solutions that simplify work, reduce waste, and prepare you for the future.",
  },
  {
    title: "Custom-Fit Solutions",
    text: "From SaaS platforms to mobile apps and fully tailored software, we build digital workspace around your unique business needs.",
  },
  {
    title: "Sustainability at the Core",
    text: "Every workflow we digitize reduces paper waste, saves time, and supports a greener planet. Going digital isn't just efficient — it's eco-conscious.",
  },
  {
    title: "Anywhere, Anytime Access",
    text: "Your data and systems are always within reach — secure, cloud-based, and available when you need them most.",
  },
  {
    title: "Trusted Security",
    text: "With enterprise-grade protection, your information stays safe, so you can focus on growth with peace of mind.",
  },
];

const history = [
  {
    dates: "2014 - 2022",
    title: "The Beginning of an Idea:",
    paragraphs: [
      "The story of Royallix is one of vision, persistence, and purpose. It began in 2014 with three minds – one skilled in design, another in software development, and a third with entrepreneurial drive. Our conversations always circled back to the same question: How can technology solve everyday business challenges and replace inefficiencies with smarter solutions?",
      "For Years, we worked independently, sharpening our skills while nurturing the idea of building something meaningful – a company that would not only serve businesses but also shape a more sustainable future.",
    ],
  },
  {
    dates: "2023 - 2024",
    title: "Turning Vision Into Reality:",
    paragraphs: [
      "In 2023, that vision took shape in Sugar Land, Texas, when Royallix was officially founded. Though new to the scene, the mission was clear from the start: help businesses reduce dependency on paper, adopt smarter workflows, and embrace digital transformation.",
      "During this phase, Royallix focused on tailored development solutions – building websites, SaaS platforms, and mobile applications that addressed real-world inefficiencies. Each project reinforced our belief that businesses need more than technology; they need a partner in transformation.",
    ],
  },
  {
    dates: "2024 - Ongoing",
    title: "A Brand with Purpose:",
    paragraphs: [
      "Today, Royallix stands as more than just a technology company – it's a movement towards paperless, efficient, and sustainable digital workspace. With services spanning custom digital solutions, SaaS-based platforms, mobile apps, and workflow automation, Royallix empowers businesses to thrive in an ever-changing digital world.",
      "Our mission goes beyond delivering software. We aim to drive digital transformation globally, reduce waste through paperless solutions, and help businesses work smarter, anywhere.",
      "Royallix is not just a reflection of entrepreneurial spirit – it's a promise: to innovate with purpose, assist with dedication, and build a greener, more efficient tomorrow.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#e6332c]">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-cover bg-left opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80)",
            maskImage:
              "linear-gradient(to right, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 40%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4 py-24 text-center md:py-32">
          <FadeIn>
            <h1 className="mb-6 text-[2.5rem] font-semibold text-white md:text-[3.25rem]">
              About Royallix
            </h1>
            <p className="mx-auto mb-10 max-w-[760px] text-[16px] font-light leading-[1.75] text-white md:text-[18px]">
              At Royallix, we believe the future of work is digital, sustainable,
              and accessible from anywhere. Born with a mission to eliminate the
              inefficiencies of paperwork, Royallix transforms traditional
              paper-driven processes into smart, secure, and eco-friendly digital
              solutions.
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <div className="mb-12 grid grid-cols-1 gap-4 md:mb-16 md:grid-cols-[1.1fr_1fr] md:gap-5">
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="About Royallix team"
                  className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 md:gap-5">
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                    alt="Royallix collaboration"
                    className="h-full min-h-[180px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[8px]">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                    alt="Royallix team"
                    className="h-full min-h-[180px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="mb-5 text-[1.75rem] font-semibold leading-[1.3] text-[#001528] md:text-[2.25rem]">
                Empowering Businesses and Communities to Go Paperless, Work
                Smarter, and Grow Sustainably.
              </h2>
              <p className="mb-10 text-[15px] leading-[1.75] text-[#627792] md:text-base">
                Every business deserves the ability to work smarter, faster, and
                greener. By digitizing paperwork and automating workflows, we
                help organizations cut costs, improve productivity, and reduce
                their environmental footprint — one digital form at a time.
              </p>
              <Link
                href="/support/contact-us"
                className="inline-flex items-center gap-2 rounded-[5px] bg-[#001528] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#e6332c]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact Us Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f3f6f9] py-16 md:py-20">
        <div className="mx-auto grid w-[1398px] max-w-[calc(90%+30px)] grid-cols-1 gap-6 px-4 lg:grid-cols-3">
          <FadeIn>
            <article className="flex h-full flex-col rounded-[8px] bg-white p-8 shadow-[0_10px_40px_rgba(0,22,40,0.08)]">
              <div className="mb-5 flex justify-center">
                <img
                  src="/imgs/Website-Development-Icon.svg"
                  alt=""
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="mb-4 text-center text-[1.5rem] font-semibold text-[#001528]">
                What We Do
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-[#4a5568]">
                We design digital workspaces that replace outdated paper systems,
                helping organizations transition smoothly into a secure,
                paperless office.
              </p>
              <p className="mb-3 text-[15px] font-semibold text-[#001528]">
                Our services include:
              </p>
              <ul className="mb-8 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#4a5568]">
                {whatWeDo.map((item) => (
                  <li key={item.title}>
                    <strong className="text-[#001528]">{item.title}</strong> –{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-auto text-center text-[15px] font-semibold text-[#001528] transition-colors hover:text-[#e6332c]"
              >
                View Our Services →
              </Link>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="flex h-full flex-col rounded-[8px] bg-white p-8 shadow-[0_10px_40px_rgba(0,22,40,0.08)]">
              <div className="mb-5 flex justify-center">
                <img
                  src="/imgs/Digital-Marketing-Icon.svg"
                  alt=""
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="mb-4 text-center text-[1.5rem] font-semibold text-[#001528]">
                Who We Assist?
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-[#4a5568]">
                At Royallix, our purpose is simple: to help organizations of all
                sizes break free from paper dependency and embrace a smarter,
                digital future. We design solutions that fit the unique needs of
                every business — whether you&apos;re a small startup looking for
                cost efficiency, a growing enterprise seeking workflow
                automation, or a large institution aiming for sustainability and
                compliance.
              </p>
              <p className="mb-3 text-[15px] font-semibold text-[#001528]">
                We proudly assist:
              </p>
              <ul className="mb-5 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#4a5568]">
                {whoWeAssist.map((item) => (
                  <li key={item.title}>
                    <strong className="text-[#001528]">{item.title}</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                At the core, we assist anyone who wants to replace outdated
                paperwork with efficient, sustainable, and future-ready digital
                solutions.
              </p>
              <Link
                href="/industries/fintech"
                className="mt-auto text-center text-[15px] font-semibold text-[#001528] transition-colors hover:text-[#e6332c]"
              >
                Industries We Serve →
              </Link>
            </article>
          </FadeIn>

          <FadeIn delay={0.16}>
            <article className="flex h-full flex-col rounded-[8px] bg-white p-8 shadow-[0_10px_40px_rgba(0,22,40,0.08)]">
              <div className="mb-5 flex justify-center">
                <img
                  src="/imgs/Brand-Desing-Icon.svg"
                  alt=""
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="mb-4 text-center text-[1.5rem] font-semibold text-[#001528]">
                Why Choose Us?
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-[#4a5568]">
                Choosing Royallix means choosing a partner who believes the future
                of business is paperless, smarter, and sustainable. Our vision is
                to empower every organization to work anywhere, anytime — without
                the limitations of paper.
              </p>
              <p className="mb-3 text-[15px] font-semibold text-[#001528]">
                Here&apos;s why businesses trust us:
              </p>
              <ul className="mb-5 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-[#4a5568]">
                {whyChooseUs.map((item) => (
                  <li key={item.title}>
                    <strong className="text-[#001528]">{item.title}</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                At Royallix, we don&apos;t just deliver software — we help build a
                future-ready workplace where efficiency, sustainability, and
                innovation go hand in hand.
              </p>
              <Link
                href="/company/why-choose-us"
                className="mt-auto text-center text-[15px] font-semibold text-[#001528] transition-colors hover:text-[#e6332c]"
              >
                Find Out More →
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#050c18] py-16 md:py-24">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <h2 className="mb-14 text-center text-[2rem] font-semibold text-white md:text-[2.5rem]">
              Our History
            </h2>
          </FadeIn>
          <div className="space-y-14 md:space-y-16">
            {history.map((item, index) => (
              <FadeIn key={item.dates} delay={index * 0.08}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[220px_1fr] md:gap-10">
                  <h3 className="text-[1.25rem] font-semibold text-white md:text-[1.5rem]">
                    {item.dates}
                  </h3>
                  <div>
                    <h4 className="mb-4 text-[1.125rem] font-semibold text-white md:text-[1.25rem]">
                      {item.title}
                    </h4>
                    {item.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 40)}
                        className="mb-4 text-[15px] leading-[1.8] text-[#c5ccd6] last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#f7f8fa]">
        <FromOurBlog />
      </div>
    </div>
  );
}
