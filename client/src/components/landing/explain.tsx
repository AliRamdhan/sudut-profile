"use client";

import React from "react";
import {
  LayoutTemplate,
  BriefcaseBusiness,
  BadgeCheck,
  AlignLeft,
} from "lucide-react";
import PointItemCard from "@/components/cards/point-item-card";
import { motion } from "framer-motion";

const points = [
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    label: "Design",
    description:
      "Visually crafted layouts that reflect your brand identity and capture attention instantly.",
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    label: "Professional",
    description:
      "Content structured to meet professional standards and present your business with credibility.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    label: "Quality",
    description:
      "Includes accurate, relevant, and value-driven information to showcase your strengths effectively.",
  },
  {
    icon: <AlignLeft className="w-6 h-6" />,
    label: "Clarity",
    description:
      "Clear and concise presentation that informs without overwhelming—ideal for clients, partners, and investors.",
  },
];

const Explain = () => {
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
              <div className="w-full max-w-[1024px] text-justify">
                <p className="text-foreground font-medium text-lg md:text-3xl lg:text-3xl">
                  A company profile is a document or webpage that provides
                  comprehensive information about a business—covering its
                  history, vision and mission, products or services,
                  achievements, and contact details.
                </p>
                <p className="text-foreground font-medium text-lg md:text-3xl lg:text-3xl">
                  Its main purpose is to present a clear picture of the
                  company&apos;s identity and credibility to potential clients,
                  partners, and investors.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {points.map((point, index) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center cursor-default"
                  >
                    <PointItemCard point={point} />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-5">
                <p className="text-foreground text-base font-black leading-6">
                  SUDUTPROFILE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explain;
