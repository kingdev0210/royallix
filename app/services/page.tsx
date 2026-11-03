import Link from "next/link";
import { montserrat } from "../fonts";

type ServiceLink = { label: string; href: string };

type ServiceBlock = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  links: ServiceLink[];
  imageLeft: boolean;
  mutedBg?: boolean;
};

const services: ServiceBlock[] = [
  {
    title: "Custom Software Solutions",
    description:
      "We develop custom software tailored to your business needs, replacing outdated paper systems with smart, efficient, and secure digital tools. Our solutions streamline workflows, automate processes, and empower you to achieve long-term growth.",
    image: "/imgs/01.jpg",
    imageAlt: "Custom Software Solutions",
    links: [
      {
        label: "Custom Software Solutions",
        href: "/services/custom-web-development",
      },
    ],
    imageLeft: true,
  },
  {
    title: "Website Development",
    description:
      "Softnix's website development services deliver responsive, user-friendly websites personalized to your business needs. Our custom solutions improve your online presence, enhance user engagement, and boost conversions, helping you to effectively reach and expand your target audience.",
    image: "/imgs/02.jpg",
    imageAlt: "Website Development",
    links: [
      { label: "Shopify Development", href: "/services/shopify-development" },
      { label: "Magento Development", href: "/services/magento-development" },
      {
        label: "WordPress Development",
        href: "/services/wordpress-development",
      },
      {
        label: "WooCommerce Development",
        href: "/services/woocommerce-development",
      },
      {
        label: "Custom Software Solutions",
        href: "/services/custom-web-development",
      },
      { label: "SaaS Development", href: "/services/saas-development" },
    ],
    imageLeft: true,
  },
  {
    title: "App Development",
    description:
      "Your business deserves an app tailored to your specific needs. Our expert app developers create custom mobile apps that stand out—covering Android, iOS, cross-platform, and wearable experiences with performance, security, and scalability built in.",
    image: "/imgs/03.jpg",
    imageAlt: "App Development",
    links: [
      {
        label: "Android App Development",
        href: "/services/android-development",
      },
      { label: "iOS App Development", href: "/services/ios-development" },
      {
        label: "Wearable App Development",
        href: "/services/wearable-app-development",
      },
    ],
    imageLeft: false,
    mutedBg: true,
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services strategically promote your business online, through various channels to enhance visibility, attract customers, and drive conversions. We tailor campaigns to your goals, maximizing ROI for sustainable growth.",
    image: "/imgs/04.jpg",
    imageAlt: "Digital Marketing",
    links: [
      { label: "Pay Per Click", href: "/services/pay-per-click" },
      { label: "Content Writing", href: "/services/content-writing" },
      { label: "Email Marketing", href: "/services/email-marketing" },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
      {
        label: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
      },
    ],
    imageLeft: true,
  },
  {
    title: "UI & UX Design",
    description:
      "Our UI/UX services optimize digital experiences, ensuring intuitive navigation and engaging interfaces. By prioritizing user needs and preferences, we enhance customer satisfaction, driving conversions and fostering long-term business success.",
    image: "/imgs/05.jpg",
    imageAlt: "UI & UX Design",
    links: [
      { label: "App Design", href: "/services/app-design" },
      { label: "Web Design", href: "/services/web-design" },
    ],
    imageLeft: false,
    mutedBg: true,
  },
  {
    title: "Branding",
    description:
      "Our branding services enhance your business identity, creating a unique image that connects with your audience. From logo design to brand strategy, we ensure consistency across all touchpoints, building trust and recognition for lasting impact.",
    image: "/imgs/06.jpg",
    imageAlt: "Branding",
    links: [
      { label: "Brand Guide", href: "/services/brand-guide" },
      { label: "Logo Design", href: "/services/logo-design" },
      { label: "Stationery Design", href: "/services/stationery-design" },
      {
        label: "Business Card Design",
        href: "/services/business-card-design",
      },
    ],
    imageLeft: true,
  },
  {
    title: "DevOps Solutions",
    description:
      "We offer comprehensive DevOps consulting and services, ensuring seamless integration and automation of your development and operations processes. From CI/CD and containerization to DevSecOps, we streamline delivery with reliability and security.",
    image: "/imgs/07.jpg",
    imageAlt: "DevOps Solutions",
    links: [
      { label: "DevSecOps", href: "/services/devsecops" },
      { label: "DevOps CI/CD", href: "/services/devops-ci-cd" },
      { label: "DevOps Automation", href: "/services/devops-automation" },
      {
        label: "DevOps Containerization",
        href: "/services/devops-containerization",
      },
      {
        label: "DevOps Implementation",
        href: "/services/devops-implementation",
      },
    ],
    imageLeft: false,
    mutedBg: true,
  },
];

function ServiceSection({
  service,
}: {
  service: ServiceBlock;
}) {
  const textBlock = (
    <div className="flex w-full flex-col justify-center px-4 py-10 md:w-1/2 md:px-10 lg:px-14">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#627792]">
        Service
      </p>
      <h2 className="mb-5 text-[2rem] font-bold leading-[1.2] text-[#001528] md:text-[2.5rem]">
        {service.title}
      </h2>
      <p className="mb-6 text-[15px] font-normal leading-[1.7] text-[#4a5568] md:text-[16px]">
        {service.description}
      </p>
      <ul className="space-y-2.5">
        {service.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] font-medium text-[#e6332c] underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageBlock = (
    <div className="flex w-full items-center justify-center px-4 py-10 md:w-1/2 md:px-8">
      <img
        src={service.image}
        alt={service.imageAlt}
        className="h-auto w-full max-w-[560px] rounded-md object-cover shadow-[0_10px_40px_rgba(0,22,40,0.12)]"
      />
    </div>
  );

  return (
    <section className={service.mutedBg ? "bg-[#f7f8fa]" : "bg-white"}>
      <div className="mx-auto flex w-[1398px] max-w-[calc(90%+30px)] flex-col items-stretch md:flex-row">
        {service.imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className={montserrat.className}>
      <section
        className="bg-[#e6332c] bg-cover bg-center bg-no-repeat [background-blend-mode:multiply]"
        style={{ backgroundImage: "url('/imgs/bg2.jpg')" }}
      >
        <div className="mx-auto flex w-[1398px] max-w-[calc(90%+30px)] flex-col items-center px-4 py-20 text-center md:py-28 lg:py-32">
          <h1 className="mb-6 text-[2.5rem] font-bold leading-tight text-white md:text-[3.5rem] lg:text-[4rem]">
            Our Services
          </h1>
          <p className="mb-10 max-w-[820px] text-[16px] font-normal leading-[1.7] text-white md:text-[18px]">
            At Softnix, we deliver complete digital transformation solutions
            that help businesses go paperless, enhance productivity, and grow
            sustainably. From custom software and mobile apps to digital
            marketing and DevOps, our services are built to give you a smarter,
            greener, and future-ready digital workspace.
          </p>
          <Link
            href="/support/contact-us"
            className="inline-block border border-white px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-[#e6332c]"
          >
            Get Free Consultation Now!
          </Link>
        </div>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.title} service={service} />
      ))}
    </div>
  );
}
