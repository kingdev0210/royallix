"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import industryCTA from "../../../public/industryCTA.json";
import FAQAccordion from "../../components/FAQAccordion";
import { SubNavBar, industryLinks } from "../../components/SubNavBar";
import { HeroIntro } from "../../components/HeroIntro";
import { FadeIn } from "../../components/FadeIn";

const defaultServiceIcons = [
  "/imgs/Website-Development-Icon.svg",
  "/imgs/App-Development-Icon.svg",
  "/imgs/Custom-Software-Icon.png",
  "/imgs/UI-UX-Design-Icon.svg",
  "/imgs/Digital-Marketing-Icon.svg",
  "/imgs/Brand-Desing-Icon.svg",
];

const caseStudies = [
  {
    name: "Time Maxx Stores",
    color: "#d93925",
    logo: "/imgs/Time-Maxx-Logo.png",
    image:
      "/imgs/Time-Maxx-Header-Image-800x450.jpg",
    overview: "Overview Time Maxx Stores is a convenience retail br",
  },
  {
    name: "Herr Pump",
    color: "#f37421",
    logo: "/imgs/herrpump-logo-1.png",
    image:
      "/imgs/Pumps-Industrial-Equipment-800x450.jpg",
    overview: "Overview Herr Pump is a renowned provider of industr",
  },
  {
    name: "The Ace Group",
    color: "#001844",
    logo: "/imgs/the-ace-group-logo.png",
    image:
      "/imgs/k-75-chim-t-091548-800x450.jpg",
    overview: "Overview The Ace Group is a reputable insurance prov",
  },
];

export default function IndustryPage() {
  const params = useParams();
  const industry = params?.industry as string;
  const industryData = industryCTA[industry];

  if (!industryData) {
    return (
      <div className="px-6 py-24 text-center text-[#001528]">
        Industry not found.
      </div>
    );
  }

  const firstSection = industryData["first-section"];
  const overview = industryData["overview"];
  const services = industryData["services"];
  const process = industryData["process"];
  const questions = industryData["faqs"] || [];
  const expertise = industryData["expertise"] || {
    title: "Let's Work Together!",
    content: services.content,
    img: "/imgs/shopify-development-small.jpg",
    stat1: "300",
    stat1Suffix: "+",
    stat1Label: "Projects Successfully Completed.",
    stat2: "100",
    stat2Suffix: "%",
    stat2Label: "Satisfaction Rate Achieved and Growing.",
  };
  const reviews = industryData["reviews"] || {
    quote:
      "Royallix transformed our online presence with expert digital solutions that are both beautiful and functional.",
    author: "James Cooper",
  };

  const serviceItems =
    services.items ||
    [
      {
        title: "Website Development",
        content: services.content,
        icon: defaultServiceIcons[0],
      },
      {
        title: "App Development",
        content: "Custom mobile experiences tailored to your industry.",
        icon: defaultServiceIcons[1],
      },
      {
        title: "SaaS Development",
        content: "Scalable cloud platforms built for growth.",
        icon: defaultServiceIcons[2],
      },
      {
        title: "UI/UX Services",
        content: "User-centered interfaces that convert and retain.",
        icon: defaultServiceIcons[3],
      },
      {
        title: "Digital Marketing",
        content: "Strategies that improve visibility and engagement.",
        icon: defaultServiceIcons[4],
      },
      {
        title: "Branding Services",
        content: "Identity systems that strengthen market presence.",
        icon: defaultServiceIcons[5],
      },
    ];

  const navLinks = questions.length
    ? [
        ...industryLinks.slice(0, -1),
        { label: "FAQ's", href: "#faqs" },
        industryLinks[industryLinks.length - 1],
      ]
    : industryLinks;

  return (
    <div>
      <section
        className="bg-[#e6332c] bg-cover bg-center bg-no-repeat [background-blend-mode:multiply]"
        style={{ backgroundImage: "url(" + firstSection.img + ")" }}
      >
        <div className="pb-[100px] pt-[120px]">
          <div className="m-auto flex w-[1398px] max-w-[calc(90%+30px)] items-center justify-center">
            <div className="px-6 md:px-40">
              <HeroIntro
                one={firstSection.one}
                two={firstSection.two}
                three={firstSection.three}
              />
            </div>
          </div>
        </div>
      </section>

      <SubNavBar links={navLinks} />

      <section id="overview" className="bg-[#f7f8fa] py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <h6 className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#627792]">
              Overview
            </h6>
            <h2 className="mx-auto mb-8 max-w-[820px] text-center text-[2rem] font-semibold leading-[1.25] text-[#001528] md:text-[2.25rem]">
              {overview.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-[820px] text-[15px] leading-[1.75] text-[#4a5568] md:text-base">
              <p className="mb-5">{overview.content}</p>
              <ul className="mb-5 list-disc space-y-3 pl-6">
                {[
                  [overview.li11, overview.li12],
                  [overview.li21, overview.li22],
                  [overview.li31, overview.li32],
                ].map(([label, text], index) => (
                  <li key={index}>
                    {label ? (
                      <>
                        <strong className="text-[#001528]">{label}</strong>{" "}
                      </>
                    ) : null}
                    {text}
                  </li>
                ))}
              </ul>
              <p>{overview.footer}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <h6 className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#627792]">
              Services
            </h6>
            <h2 className="mb-12 text-center text-[2rem] font-semibold text-[#001528] md:text-[2.25rem]">
              {services.title}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="flex gap-4">
                  <img
                    src={item.icon || defaultServiceIcons[index % 6]}
                    alt=""
                    className="h-12 w-12 shrink-0 object-contain"
                  />
                  <div>
                    <h3 className="mb-2 text-[1.125rem] font-semibold text-[#001528]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#4a5568]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#001528] py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <h6 className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#e6332c]">
              Here&apos;s how we do it
            </h6>
            <h2 className="mx-auto mb-10 max-w-[900px] text-center text-[1.5rem] font-semibold leading-[1.3] text-white md:text-[1.75rem]">
              {process.title}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: process.subtitle1, content: process.subcontent1 },
              { title: process.subtitle2, content: process.subcontent2 },
              { title: process.subtitle3, content: process.subcontent3 },
              { title: process.subtitle4, content: process.subcontent4 },
            ].map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <div className="h-full rounded-[5px] bg-[rgba(255,255,255,0.05)] px-6 py-[30px] text-center">
                  <h6 className="mb-[15px] font-semibold text-white">
                    {step.title}
                  </h6>
                  <p className="text-[15px] leading-relaxed text-[#9b9aad]">
                    {step.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="mt-12 text-center text-[15px] font-semibold">
              <Link href="/support/contact-us" className="text-[#e6332c]">
                Let&apos;s Discuss{" "}
              </Link>
              <span className="text-white">
                Your Idea &amp; Turn Your Idea into Reality!
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="values">
        <div className="m-auto flex w-[1398px] max-w-[calc(90%+30px)]">
          <div className="box-border w-full px-52 py-12">
            <h6 className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#627792]">
              Core values
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center text-[2.25rem] font-semibold leading-[1.2em] text-[#001528]">
              Our Guiding Core Values
            </h2>
          </div>
        </div>
        <div className="m-auto flex w-[1398px] max-w-[calc(90%+30px)]">
          <div className="box-border w-full px-[15px]">
            <ul className="table w-[calc(100%+100px)] table-fixed p-0 text-[15px] -mx-[50px] mb-[30px]">
              <li className="relative table-cell px-[50px] align-top">
                <div>
                  <div className="relative mb-[30px] px-[75px] text-center">
                    <img
                      decoding="async"
                      src="/imgs/integrity-icon.svg"
                      alt="integrity-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] text-[1.25rem] font-medium leading-[1.35em] text-[#001528]">
                      Innovation
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Constantly exploring new ways to enhance digital
                      experience with innovation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative table-cell px-[50px] align-top">
                <div>
                  <div className="relative mb-[30px] px-[75px] text-center">
                    <img
                      decoding="async"
                      src="/imgs/innovation-icon.svg"
                      alt="innovation-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] text-[1.25rem] font-medium leading-[1.35em] text-[#001528]">
                      Integrity
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Upholding honesty, ensuring transparency in every client
                      interaction and project.
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative table-cell px-[50px] align-top">
                <div>
                  <div className="relative mb-[30px] px-[75px] text-center">
                    <img
                      decoding="async"
                      src="/imgs/focus-icon.svg"
                      alt="focus-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] text-[1.25rem] font-medium leading-[1.35em] text-[#001528]">
                      Customer Focus
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Always prioritizing client needs first, aiming for their
                      satisfaction and success.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-[#f7f8fa] py-16 md:py-20">
        <div className="mx-auto grid w-[1398px] max-w-[calc(90%+30px)] grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <FadeIn>
            <h6 className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#627792]">
              Expertise
            </h6>
            <h3 className="mb-6 text-[1.875rem] font-semibold text-[#001528]">
              {expertise.title}
            </h3>
            <p className="mb-10 text-[15px] leading-relaxed text-[#4a5568] md:text-base">
              {expertise.content}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-[1.87rem] font-semibold text-[#001528]">
                  {expertise.stat1}
                  <span className="ml-1 text-3xl opacity-50">
                    {expertise.stat1Suffix}
                  </span>
                </h3>
                <p className="text-[15px] text-[#001528]">{expertise.stat1Label}</p>
              </div>
              <div>
                <h3 className="text-[1.87rem] font-semibold text-[#001528]">
                  {expertise.stat2}
                  <span className="ml-1 text-3xl opacity-50">
                    {expertise.stat2Suffix}
                  </span>
                </h3>
                <p className="text-[15px] text-[#001528]">{expertise.stat2Label}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={expertise.img}
              alt="Expertise"
              className="h-auto w-full rounded-md object-cover shadow-[0_12px_40px_rgba(0,22,40,0.12)]"
            />
          </FadeIn>
        </div>
      </section>

      <section id="reviews" className="bg-white py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <h6 className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#001528]">
              Reviews
            </h6>
            <p className="mx-auto mb-4 max-w-[900px] text-center text-[1.5rem] font-semibold leading-snug text-[#001528] md:text-[1.875rem]">
              {reviews.quote}
            </p>
            <h6 className="mb-14 text-center text-[15px] font-semibold text-[#001528]">
              - {reviews.author} -
            </h6>
          </FadeIn>

          <div className="-mx-[15px] flex flex-wrap">
            {caseStudies.map((study, index) => (
              <FadeIn
                key={study.name}
                delay={index * 0.1}
                className="mb-[30px] w-full px-[15px] md:w-1/3"
              >
                <div className="flex h-full flex-col rounded-[5px] bg-white p-[30px] shadow-[0_10px_40px_rgba(0,22,40,0.1)]">
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-[5px]">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-70 mix-blend-multiply"
                      style={{ backgroundColor: study.color }}
                    />
                    <div
                      className="absolute inset-0 opacity-35"
                      style={{ backgroundColor: study.color }}
                    />
                    <div className="relative z-10 flex h-full items-center justify-center px-8">
                      <img
                        src={study.logo}
                        alt={study.name + " logo"}
                        className="h-[72px] w-auto max-w-[70%] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="mb-1.5 text-[13px] font-semibold text-[#e6332c]">
                      Website
                    </p>
                    <h3 className="mb-2 text-[1.25rem] font-semibold leading-snug text-[#001528]">
                      {study.name}
                    </h3>
                    <p className="mb-8 line-clamp-2 text-[14px] leading-relaxed text-[#627792]">
                      {study.overview}
                    </p>
                    <Link
                      href="/company/case-studies"
                      className="mt-auto block rounded-[3px] border border-[#d8dee6] py-3 text-center text-[14px] font-semibold text-[#001528] transition-colors hover:border-[#e6332c] hover:text-[#e6332c]"
                    >
                      Read case study
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {questions.length ? (
        <FAQAccordion
          id="faqs"
          title={"FAQs about " + industry.charAt(0).toUpperCase() + industry.slice(1)}
          questions={questions}
        />
      ) : null}
    </div>
  );
}
