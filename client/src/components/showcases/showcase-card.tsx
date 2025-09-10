/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { showcaseType } from "@/types/types";
import TransitionLink from "../layout/transition-link";
import { useTranslations } from "next-intl";

interface ShowcaseCardProps {
  showcase: showcaseType;
}

const ShowcaseCard = ({ showcase }: ShowcaseCardProps) => {
  const t = useTranslations("showcases");
  return (
    <TransitionLink
      href={showcase.href}
      target="_blank"
      className="group relative block rounded-xl shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={showcase.imgSrc || "/placeholder.svg"}
          alt={showcase.title}
          className="w-full h-[560px] object-fit object-center transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
        />

        {/* Preview Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-white">
            Preview
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight">
            {showcase.title}
          </h3>
          <div className="transition-transform duration-200 group-hover:translate-x-0">
            <ArrowRight className="h-5 w-5 text-gray-500 transition duration-300 group-hover:text-gray-700 group-hover:rotate-90" />
          </div>
        </div>
        <p className="mt-1 text-left text-sm text-muted-foreground">
          {t(`showcase-${showcase.id}`)}
        </p>
      </div>
    </TransitionLink>
  );
};

export default ShowcaseCard;
