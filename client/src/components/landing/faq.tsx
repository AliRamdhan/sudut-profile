"use client";

import type React from "react";
import { useState } from "react";
import FaqItemCard from "../cards/faq-item-card";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("faq");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <section className="w-full relative flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="hidden md:block w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-3xl text-center text-foreground text-5xl font-semibold leading-10 break-words">
            {t("title")}
          </h2>
          <p className="max-w-2xl self-stretch text-center mx-auto text-lg text-neutral-400 mt-2">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 grid grid-cols-1 justify-start items-start gap-4 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <FaqItemCard
            key={index}
            question={t(`question-${index + 1}`)}
            answer={t(`answer-${index + 1}`)}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
