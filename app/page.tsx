// import { BlogPosts } from 'app/components/posts'
import { ResponsiveCarousel } from "./components/CarouselNav";
import { OurCompany } from "./components/OurCompany";
import { OurServices } from "./components/OurServices";
import { Industries } from "./components/Industries";
import { DiscoverNow } from "./components/DiscoverNow";
import { FromOurBlog } from "./components/FromOurBlog";
import FAQAccordion from "./components/FAQAccordion";
import questions from "../public/FaqQA.json";

export default function Page() {
  return (
    <>
      <ResponsiveCarousel />
      <OurCompany />
      <OurServices />
      <Industries />
      <DiscoverNow />
      <FromOurBlog />
      <FAQAccordion questions={questions} />
    </>
  );
}
