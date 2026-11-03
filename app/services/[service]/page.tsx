"use client";

import { useParams } from "next/navigation";
import serviceCTA from "../../../public/serviceCTA.json";
import FAQAccordion from "../../components/FAQAccordion";
import { SubNavBar } from "../../components/SubNavBar";
import { HeroIntro } from "../../components/HeroIntro";

export default function ServicePage() {
  const params = useParams();
  const service = params?.service as string;

  const serviceData = serviceCTA[service];

  const firstSection = serviceData["first-section"];
  const overview = serviceData["overview"];
  const services = serviceData["services"];
  const process = serviceData["process"];
  const questions = serviceData["faqs"];

  const slugTitleOverrides: Record<string, string> = {
    "devops-ci-cd": "DevOps CI/CD",
    "devops-solutions": "DevOps Solutions",
    "devops-containerization": "DevOps Containerization",
    "devops-automation": "DevOps Automation",
    "devops-implementation": "DevOps Implementation",
    "devsecops": "DevSecOps",
    "ui-ux-design": "UI & UX Design",
    "saas-development": "SaaS Development",
    "ios-development": "iOS Development",
  };

  const kebabToTitle = (str: string) => {
    if (slugTitleOverrides[str]) return slugTitleOverrides[str];
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <section
        className="bg-[#e6332c] bg-center bg-no-repeat bg-cover [background-blend-mode:multiply]"
        style={{ backgroundImage: `url(${firstSection.img})` }}
      >
        <div className="pt-[120px] pb-[100px]">
          <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto items-center justify-center">
            <div className="px-40">
              <HeroIntro
                one={firstSection.one}
                two={firstSection.two}
                three={firstSection.three}
              />
            </div>
          </div>
        </div>
      </section>
      <SubNavBar />
      <section id="overview">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Overview
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              {overview.title}
            </h2>
            <div className="h-[36px]">
              <span></span>
            </div>
            <div className="text-[#001528] text-base">
              <p className="mb-[20px]">{overview.content}</p>
              <ul className="my-[10px] pl-8 list-disc">
                <li>
                  <strong>{overview.li11}</strong> {overview.li12}
                </li>
                <li>
                  <strong>{overview.li21}</strong> {overview.li22}
                </li>
                <li>
                  <strong>{overview.li31}</strong> {overview.li32}
                </li>
              </ul>
              <p>{overview.footer}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="mb-12">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Services
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              {services.title}
            </h2>
            <div className="h-[36px]">
              <span></span>
            </div>
            <div className="text-[#001528] text-base">
              <p className="mb-[20px]">{services.content}</p>
            </div>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/08/royal-2995_51c8d05c-efe9-46d9-9a17-4b4e8fccfaad.svg"
                  alt="Years experience"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">9</span>
                <span className="opacity-50 text-4xl">+</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Years experience</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/diploma-2983_a6bb0b64-dbc1-431e-ac00-a83597982a0.svg"
                  alt="Certified experts"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">250</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Certified experts</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/08/user-group-2874_87351201-7b45-463a-9b86-0ebd80aa8fa0.svg"
                  alt="Satisfaction guaranteed"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">100</span>
                <span className="opacity-50 text-3xl">%</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">
                Satisfaction guaranteed
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/world-map-826_e5eaf722-e834-484a-b7a6-0b1f4ab98ee.svg"
                  alt="Global reach"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">2</span>
                <span className="opacity-50 text-3xl">countries</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Global reach</div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="box-border px-[15px] w-full text-center text-[#001528]">
              <div className="flex justify-center">
                <img
                  className="mb-3"
                  decoding="async"
                  src="https://softnix.co/wp-content/uploads/2018/09/headphones-user-5252_ca8ffcdb-4e36-4baa-8e93-4fb725476d7.svg"
                  alt="Service desk"
                />
              </div>
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">24</span>
                <span className="opacity-50 text-3xl">/7</span>
              </h3>
              <div className="text-[15px] leading-[1.5]">Service desk</div>
            </div>
          </div>
        </div>
        <div className="box-border px-[15px] w-full mt-8">
          <div>
            <div>
              <p className="text-center text-[15px] text-[#001528]">
                {services.footer}{" "}
                <a
                  className="border-b-[1px] border-dotted border-b-[rgba(0,0,0,0.5)]"
                  href="#"
                >
                  <span className="text-[#e6332c] font-semibold">Hire us</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="bg-[#001528]">
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-6 py-12 md:px-20">
          <h6 className="text-center text-[10px] font-semibold uppercase tracking-[4px] text-[#e6332c]">
            Here's how we do it
          </h6>
          <div className="h-[6px]" />
          <h2 className="mx-auto max-w-[900px] text-center text-[1.5rem] font-semibold leading-[1.3] text-white md:text-[1.75rem]">
            {process.title}
          </h2>
        </div>
        <div className="mx-auto grid w-[1398px] max-w-[calc(90%+30px)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: process.subtitle1, content: process.subcontent1 },
            { title: process.subtitle2, content: process.subcontent2 },
            { title: process.subtitle3, content: process.subcontent3 },
            { title: process.subtitle4, content: process.subcontent4 },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-[5px] bg-[rgba(255,255,255,0.05)] px-6 py-[30px] text-center"
            >
              <h6 className="mb-[15px] font-semibold text-white">{step.title}</h6>
              <p className="text-[15px] leading-relaxed text-[#9b9aad]">
                {step.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)] px-6 pb-16 pt-10">
          <p className="text-center text-[15px] font-semibold">
            <a href="/support/contact-us" className="text-[#e6332c]">
              Let&apos;s Discuss{" "}
            </a>
            <span className="text-white">
              Your Idea &amp; Turn Your Idea into Reality!
            </span>
          </p>
        </div>
      </section>
      <section id="values">
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-52 py-12 w-full">
            <h6 className="text-[10px] text-[#627792] text-center font-semibold tracking-[4px] uppercase">
              Core values
            </h6>
            <div className="h-[6px]">
              <span></span>
            </div>
            <h2 className="text-center font-medium text-[#001528] text-[2.25rem] leading-[1.2em] font-semibold">
              Our Guiding Core Values
            </h2>
          </div>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <div className="box-border px-[15px] w-full">
            <ul className="table table-fixed text-[15px] w-[calc(100%+100px)] -mx-[50px] mb-[30px] p-0">
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/integrity-icon.svg"
                      alt="integrity-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
                      Innovation
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Constantly exploring new ways to enhance digital
                      experience with innovation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/innovation-icon.svg"
                      alt="innovation-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
                      Integrity
                    </h4>
                    <p className="my-0 text-[#001528]">
                      Upholding honesty, ensuring transparency in every client
                      interaction and project.
                    </p>
                  </div>
                </div>
              </li>
              <li className="table-cell px-[50px] relative align-top">
                <div>
                  <div className="mb-[30px] text-center px-[75px] relative">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/05/focus-icon.svg"
                      alt="focus-icon"
                    />
                  </div>
                  <div className="relative pl-[75px]">
                    <h4 className="mb-[15px] font-medium text-[1.25rem] leading-[1.35em] text-[#001528]">
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
      <section
        id="expertise"
        className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto"
      >
        <div className="w-1/2 px-[17.5px]">
          <h6 className="text-[10px] text-[#627792] text-left uppercase tracking-[4px] font-semibold mt-[50px] mb-[10px]">
            Expertise
          </h6>
          <h3 className="font-medium text-[#001528] text-[1.875rem] leading-[1.2em] text-left mb-[30px]">
            Let's Work Together!
          </h3>
          <p className="text-[#001528] mb-[70px]">
            Our company stands out as the best Shopify development company by
            offering years of expertise, custom solutions personalized to each
            client's needs, and a proven track record of successful Shopify
            store launches that enhance user experience and drive significant
            business growth.
          </p>
          <div className="flex">
            <div className="w-1/2 box-border w-full">
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">300</span>
                <span className="opacity-50 text-4xl">+</span>
              </h3>
              <div className="text-[15px] leading-[1.5] text-[#001528]">
                Projects Successfully Completed.
              </div>
            </div>
            <div className="w-1/2 box-border w-full">
              <h3 className="text-[1.87rem] font-normal relative font-inherit font-semibold">
                <span className="mx-[3px]">100</span>
                <span className="opacity-50 text-3xl">%</span>
              </h3>
              <div className="text-[15px] leading-[1.5] text-[#001528]">
                Satisfaction Rate Achieved and Growing.
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-[17.5px]">
          <img
            decoding="async"
            src="https://softnix.co/wp-content/uploads/2024/05/shopify-development-small.jpg"
            width={1170}
            height={700}
            loading="lazy"
          />
        </div>
      </section>
      <section id="reviews" className="my-[80px]">
        <div className="w-[1398px] max-w-[calc(90%+30px)] m-auto">
          <h6 className="text-[10px] text-[#001528] text-center uppercase tracking-[4px] font-semibold mb-[6px]">
            Reviews
          </h6>
          <p className="text-[30px] text-[#001528] text-center font-medium px-52">
            Our company transformed our online store with their Shopify theme
            development. Highly recommend their expert team for anyone looking
            to stand out.{" "}
          </p>
          <h6 className="text-[15px] text-[#001528] text-center font-semibold my-[20px]">
            - Jake Morrison -
          </h6>
        </div>
        <div className="flex w-[1398px] max-w-[calc(90%+30px)] m-auto relative justify-center">
          <div className="left-0 top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#d93925] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/08/Time-Maxx-Header-Image-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/08/Time-Maxx-Logo.png"
                      className="order-1 mt-[50px] mb-[25px] h-20"
                    />
                  </div>
                  <h2 className="order-2 m-0 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    Time Maxx Stores
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview Time Maxx Stores is a convenience retail br
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-[33.3329%] top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#f37421] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/10/Pumps-Industrial-Equipment-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/10/herrpump-logo-1.png"
                      className="order-1 mt-[50px] mb-[25px] h-20"
                    />
                  </div>
                  <h2 className="order-2 m-0 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    Herr Pump
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview Herr Pump is a renowned provider of industr
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-[66.6658%] top-0 px-[15px] mb-[30px]">
            <div className="relative overflow-hidden flex flex-col-reverse bg-[#001844] text-center px-[15%] justify-between rounded-[5px]">
              <a href="#" className="absolute inset-0"></a>
              <figure className="relative z-[2] bg-white m-0 px-[20px] py-0 border-l-[5px] border-l-[#eee] rounded-t-[5px]">
                <div className="text-[14px] text-left pt-[20px]">
                  <a href="#" className="text-inherit">
                    Website
                  </a>
                  <a href="#">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2018/08/k-75-chim-t-091548-800x450.jpg"
                      width={220}
                      className="mt-[10px]"
                      alt="Time Maxx Header"
                      title="Time-Maxx-Header-Image"
                    />
                  </a>
                </div>
              </figure>
              <div className="flex h-full items-center relative z-[2]">
                <div className="none">
                  <div className="flex justify-center">
                    <img
                      decoding="async"
                      src="https://softnix.co/wp-content/uploads/2024/03/the-ace-group-logo.png"
                      className="order-1 mt-[50px] mb-[25px] h-12"
                    />
                  </div>
                  <h2 className="order-2 mt-8 text-[1.25rem] leading-[1.385em] text-white font-semibold">
                    The Ace Group
                  </h2>
                  <div className="order-3 my-[15px] mb-[25px] text-[rgba(255,255,255,0.7)] font-semibold">
                    Overview The Ace Group is a reputable insurance prov
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQAccordion
        id="faqs"
        title={`FAQs about ${kebabToTitle(service)}`}
        questions={questions}
      />
    </div>
  );
}
