/* eslint-disable @next/next/no-img-element */
import React from "react";
import TransitionLink from "../layout/transition-link";
import { showcaseType } from "@/types/types";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface ShowcaseCardProps {
  showcase: showcaseType;
}
const ShowcaseCard = ({ showcase }: ShowcaseCardProps) => {
  const t = useTranslations("showcases");
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="group relative block w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={showcase.imgSrc}
          alt={showcase.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-2">{showcase.title}</h3>
          <p className="text-neutral-300">{t(`showcase-${showcase.id}`)}</p>
        </div>
      </div>
      <TransitionLink href={showcase.href} target="_blank">
        <Button className="transition duration-300 hover:scale-105">
          Preview showcase
        </Button>
      </TransitionLink>
    </div>
  );
};

export default ShowcaseCard;
