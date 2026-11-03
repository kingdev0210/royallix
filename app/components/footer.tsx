"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "App Development", href: "/services/app-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "UI & UX Design Services", href: "/services/ui-ux-design" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "DevOps Solutions", href: "/services/devops-solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "FinTech", href: "/industries/fintech" },
      { label: "Enterprises", href: "/industries/enterprises" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "E-Learning", href: "/industries/e-learning" },
      { label: "Entertainment", href: "/industries/entertainment" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Case Studies", href: "/company/case-studies" },
      { label: "Why Choose Us", href: "/company/why-choose-us" },
      {
        label: "Mission, Vision and Values",
        href: "/company/mission-vision-and-values",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/support/contact-us" },
      { label: "Privacy Policy", href: "/support/privacy-policy" },
      { label: "Terms and Conditions", href: "/support/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const hideProjectForm = pathname === "/support/contact-us";

  return (
    <footer id="site-footer">
      {!hideProjectForm ? (
        <div className="flex flex-wrap bg-[#001628]">
          <div className="w-full bg-[url('/imgs/team.jpg')] bg-cover bg-no-repeat md:w-1/2" />
          <div className="w-full px-[15px] pb-[2%] pt-[5%] text-[1.125rem] text-[rgba(14,43,92,0.8)] md:w-1/2">
            <h3 className="mb-4 px-[30px] font-[Rubik] text-3xl font-semibold text-white">
              Tell us about your project
            </h3>
            <form className="text-white">
              <div className="mb-[30px] flex flex-wrap">
                <div className="w-full px-[30px] md:w-1/2">
                  <label className="block text-[#8193b2]">
                    Full Name *
                    <input
                      required
                      type="text"
                      name="text-228"
                      className="mt-[5px] w-full border-0 border-b-2 border-[#8193b2] bg-transparent focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>
                <div className="w-full px-[30px] md:w-1/2">
                  <label className="block text-[#8193b2]">
                    Email *
                    <input
                      required
                      type="email"
                      name="email-322"
                      className="mt-[5px] w-full border-0 border-b-2 border-[#8193b2] bg-transparent focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-[30px] px-[30px]">
                <label className="block text-[#8193b2]">
                  Phone *
                  <input
                    required
                    type="tel"
                    name="tel-744"
                    className="mt-[5px] w-full border-0 border-b-2 border-[#8193b2] bg-transparent focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
              <div className="mb-[30px] px-[30px]">
                <label className="block text-[#8193b2]">
                  How we can help you? *
                  <textarea
                    required
                    name="message"
                    rows={2}
                    maxLength={2000}
                    className="mt-[5px] w-full border-0 border-b-2 border-[#8193b2] bg-transparent focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
              <div className="mb-[10px] px-[30px]">
                <label className="flex items-center text-[#7d91ae]">
                  <input
                    type="checkbox"
                    name="receive-message"
                    className="mr-2 h-6 w-6"
                  />
                  By checking this box, I Opt-in to receive the messages from
                  Softnix.
                </label>
                <p className="mt-2 text-sm text-[#7d91ae]">
                  Please read our{" "}
                  <Link
                    href="/support/privacy-policy"
                    className="text-[#e6332c] underline"
                  >
                    privacy policy.
                  </Link>
                </p>
              </div>
              <div className="mb-[30px] flex flex-wrap px-[30px]">
                <div className="invisible w-full md:w-[58.5%]">CAPTCHA</div>
                <div className="w-full text-right md:w-[41.5%]">
                  <button
                    type="submit"
                    className="rounded-lg border border-[#001528] bg-[#e6332b] px-16 py-4 font-semibold text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="bg-white px-4 pt-20">
        <div className="mx-auto flex w-[1398px] max-w-[calc(90%+30px)] flex-wrap">
          <div className="mb-10 w-full px-[15px] md:mb-0 md:w-[28%] lg:w-[26%]">
            <div className="mb-5 w-[70px]">
              <Link href="/">
                <img
                  src="/imgs/icon-logo.png"
                  alt="Softnix"
                  width="120"
                  height="120"
                  className="h-auto max-w-full rounded-lg"
                  loading="lazy"
                />
              </Link>
            </div>
            <address className="mb-3 text-[14px] not-italic leading-[1.7] text-[#001528]">
              14090 Southwest Freeway, Suite 300,
              <br />
              Sugar Land, Texas, 77478
            </address>
            <a
              href="mailto:info@softnix.co"
              className="mb-5 block text-[14px] text-[#2f6fed] transition-colors hover:text-[#e6332c]"
            >
              info@softnix.co
            </a>
            <div className="flex items-center gap-3.5 text-[#a8b3c4]" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3.15 4.9a4.25 4.25 0 0 0 1.32 5.68 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.27 4.27 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.06 12.06 0 0 0 6.53 1.91c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.37-.01-.55A8.66 8.66 0 0 0 22.46 6z" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22H12v-7.2H9.6v-2.9H12V9.7c0-2.4 1.45-3.7 3.6-3.7 1.03 0 2.1.18 2.1.18v2.4h-1.2c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9H14.98V22h5.52a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2z" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8.34 18.34H5.67v-8.3h2.67v8.3zM7 8.95a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.39h-2.67v-4.03c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13v4.1h-2.67v-8.3h2.56v1.13h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.45z" />
              </svg>
            </div>
          </div>

          <div className="w-full px-[15px] md:w-[72%] lg:w-[74%]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-4 text-[15px] font-semibold text-[#001528]">
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-[#627792] transition-colors hover:text-[#e6332c]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 w-[1398px] max-w-[calc(90%+30px)] border-t border-[#e5e7eb] px-[15px] py-8">
          <p className="text-center text-[14px] text-[#627792]">
            Copyright © 2026 Softnix.
          </p>
        </div>
      </div>
    </footer>
  );
}
