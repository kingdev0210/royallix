"use client";

import Link from "next/link";
import { FadeIn } from "../../components/FadeIn";

const pillars = [
  {
    title: "People",
    text: "We carefully hire individuals who are not only smart and passionate but also deeply aligned with our values, bringing dedication and new ideas to implement.",
    icon: "/imgs/Brand-Desing-Icon.svg",
  },
  {
    title: "Customer Service",
    text: "We believe in delivering more than expected and ensuring clients feel confident in their decision to work with us through our expertise and results.",
    icon: "/imgs/App-Development-Icon.svg",
  },
  {
    title: "Support",
    text: "Our team goes the extra mile, using their experience to fulfill your development needs with attention and efficiency for your business growth.",
    icon: "/imgs/UI-UX-Design-Icon.svg",
  },
  {
    title: "Quality",
    text: "Our goal is to do more than meet expectations, we provide development solutions that improve your business and strengthen its digital presence.",
    icon: "/imgs/Custom-Software-Icon.png",
  },
];

const caseStudies = [
  {
    name: "Time Maxx Stores",
    color: "#d93925",
    buttonColor: "#b82e1d",
    logo: "/imgs/Time-Maxx-Logo.png",
    image:
      "/imgs/Time-Maxx-Header-Image-800x450.jpg",
    overview: "Overview Time Maxx Stores is a convenience retail br",
  },
  {
    name: "Herr Pump",
    color: "#f37421",
    buttonColor: "#d96212",
    logo: "/imgs/herrpump-logo-1.png",
    image:
      "/imgs/Pumps-Industrial-Equipment-800x450.jpg",
    overview: "Overview Herr Pump is a renowned provider of industr",
  },
  {
    name: "The Ace Group",
    color: "#001844",
    buttonColor: "#001028",
    logo: "/imgs/the-ace-group-logo.png",
    image:
      "/imgs/k-75-chim-t-091548-800x450.jpg",
    overview: "Overview The Ace Group is a reputable insurance prov",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div>
      <section
        className="relative overflow-hidden bg-[#e6332c] bg-cover bg-center bg-no-repeat [background-blend-mode:multiply]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80)",
        }}
      >
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4 py-24 text-center md:py-32">
          <FadeIn>
            <h1 className="mb-6 text-[2.5rem] font-semibold text-white md:text-[3.25rem]">
              Why Royallix?
            </h1>
            <p className="mx-auto mb-10 max-w-[700px] text-[16px] font-light leading-[1.75] text-white md:text-[18px]">
              Trust Royallix for innovative development solutions that ensure
              reliability, boost efficiency, and foster business growth.
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
          <div className="mb-16 grid grid-cols-1 items-center gap-10 md:mb-20 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                alt="Royallix team"
                className="h-auto w-full rounded-[12px] object-cover"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-6 text-[1.75rem] font-semibold leading-[1.3] text-[#001528] md:text-[2.25rem]">
                Why Choose Royallix for Development Services?
              </h2>
              <p className="mb-5 text-[15px] leading-[1.75] text-[#4a5568] md:text-base">
                When you work with Royallix, you get more than just development
                services. We are here to build websites and apps that not only
                look good but work smoothly. We pay attention to every detail so
                your business can connect with customers and grow, ensuring a
                profitable development process that sets you apart.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#4a5568] md:text-base">
                With Royallix, you can trust that your development needs are in
                capable hands. We are focused on delivering results that help
                your business grow and stay ready for the future. Let&apos;s work
                together to create new opportunities and take your business
                forward.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {pillars.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="text-left">
                  <img
                    src={item.icon}
                    alt=""
                    className="mb-5 h-12 w-12 object-contain"
                  />
                  <h3 className="mb-3 text-[1.25rem] font-semibold text-[#001528]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4a5568]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f9] py-16 md:py-20">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-4">
          <FadeIn>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="max-w-[640px] text-[1.75rem] font-semibold leading-[1.3] text-[#001528] md:text-[2.25rem]">
                Find out how companies succeed with Royallix
              </h2>
              <Link
                href="/company/case-studies"
                className="shrink-0 rounded-full bg-[#001528] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#e6332c]"
              >
                Customer success
              </Link>
            </div>
          </FadeIn>

          <div className="-mx-[15px] flex flex-wrap">
            {caseStudies.map((study, index) => (
              <FadeIn
                key={study.name}
                delay={index * 0.08}
                className="mb-[30px] w-full px-[15px] md:w-1/3"
              >
                <div
                  className="relative flex h-full flex-col-reverse justify-between overflow-hidden rounded-[5px] px-[12%] text-center"
                  style={{ backgroundColor: study.color }}
                >
                  <Link
                    href="/company/case-studies"
                    className="absolute inset-0 z-[1]"
                    aria-label={"View " + study.name + " case study"}
                  />
                  <figure className="relative z-[2] m-0 rounded-t-[5px] border-l-[5px] border-l-[#eee] bg-white px-5 pb-5 pt-5">
                    <p className="mb-3 text-left text-[14px] text-[#001528]">
                      Website
                    </p>
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full object-cover"
                    />
                  </figure>
                  <div className="relative z-[2] flex flex-col items-center px-2 pb-6 pt-10">
                    <img
                      src={study.logo}
                      alt={study.name + " logo"}
                      className="mb-5 h-16 w-auto max-w-[70%] object-contain"
                    />
                    <h3 className="mb-3 text-[1.25rem] font-semibold leading-snug text-white">
                      {study.name}
                    </h3>
                    <p className="mb-5 text-[14px] font-semibold leading-relaxed text-white/70">
                      {study.overview}
                    </p>
                    <span
                      className="inline-block rounded-[3px] px-5 py-2.5 text-[14px] font-semibold text-white"
                      style={{ backgroundColor: study.buttonColor }}
                    >
                      View Case Study
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
