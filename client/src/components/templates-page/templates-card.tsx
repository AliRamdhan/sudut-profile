/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight } from "lucide-react";
import { templateType } from "@/types/types";
import TransitionLink from "../layout/transition-link";

interface TemplateCardProps {
  template: templateType;
}

const TemplatesCard = ({ template }: TemplateCardProps) => {
  return (
    <TransitionLink
      href={template.href}
      className="group relative block rounded-xl shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={template.imgSrc || "/placeholder.svg"}
          alt={template.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
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
            {template.title}
          </h3>
          <div className="transition-transform duration-200 group-hover:translate-x-0">
            <ArrowRight className="h-5 w-5 text-gray-500 transition duration-300 group-hover:text-gray-700 group-hover:rotate-90" />
          </div>
        </div>
        <p className="mt-1 text-left text-sm text-muted-foreground">
          {template.description}
        </p>
      </div>
    </TransitionLink>
  );
};

export default TemplatesCard;
