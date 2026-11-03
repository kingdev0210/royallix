"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { montserrat } from "../fonts";

interface FAQAccordionProps {
  questions: {
    question: string;
    answer: string;
  }[];
  title?: string;
  id?: string;
}

export default function FAQAccordion({
  questions,
  title = "FAQs about our company - Full-Stack Development Company",
  id,
}: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id={id}
      className={`${montserrat.className} bg-[#eef2f6] py-16 md:py-20`}
    >
      <div className="mx-auto w-[1398px] max-w-[calc(90%+30px)]">
        <h2 className="mb-10 text-center text-[1.75rem] font-bold text-[#001528] md:mb-12 md:text-[2rem]">
          {title}
        </h2>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
          {questions.map(({ question, answer }, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-md bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,22,40,0.06)] md:px-6"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => toggleQuestion(idx)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[15px] font-bold leading-snug text-[#001528] md:text-[16px]">
                    {question}
                  </h3>
                  <ChevronRight
                    className={`mt-0.5 h-5 w-5 shrink-0 text-[#9aa6b2] transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    strokeWidth={1.75}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-4 text-[14px] font-normal leading-[1.7] text-[#5a6570] md:text-[15px]">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[15px] text-[#001528]">
            Couldn&apos;t find your answer?{" "}
            <a href="/support/contact-us" className="font-semibold text-[#e6332c]">
              Ask a question
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
