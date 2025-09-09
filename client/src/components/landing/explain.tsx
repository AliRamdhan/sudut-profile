"use client";

import React, { ReactNode } from "react";
import {
  LayoutTemplate,
  BriefcaseBusiness,
  BadgeCheck,
  AlignLeft,
} from "lucide-react";
import PointItemCard from "@/components/cards/point-item-card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const iconMap: Record<string, ReactNode> = {
  "icon-points-1": <LayoutTemplate className="w-6 h-6" />,
  "icon-points-2": <BriefcaseBusiness className="w-6 h-6" />,
  "icon-points-3": <BadgeCheck className="w-6 h-6" />,
  "icon-points-4": <AlignLeft className="w-6 h-6" />,
};

const Explain = () => {
  const t = useTranslations("about-us");
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
              <div className="w-full max-w-[1024px] text-justify">
                <p className="text-foreground font-medium text-lg md:text-3xl lg:text-3xl">
                  {t("description1")}
                </p>
                <p className="text-foreground font-medium text-lg md:text-3xl lg:text-3xl">
                  {t("description2")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[0, 1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center cursor-default"
                  >
                    <PointItemCard
                      icon={iconMap[`icon-points-${index + 1}`]}
                      label={t(`label-points-${index + 1}`)}
                      description={t(`description-points-${index + 1}`)}
                    />
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
