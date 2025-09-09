/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "@/components/layout/transition-link";
import { ArrowRight } from "lucide-react";
import { showcases } from "@/lib/data";
import ShowcaseCard from "@/components/cards/showcase-card";
import { showcaseType } from "@/types/types";
import { useTranslations } from "next-intl";

const Showcases = () => {
  const t = useTranslations("showcases");
  const [showcaseRand, setShowcaseRand] = useState<showcaseType[]>([]);

  useEffect(() => {
    const randomShowcase = [...showcases]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setShowcaseRand(randomShowcase);
  }, []);
  return (
    <section id="showcases" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("title")}
        </h2>
        <p className="max-w-3xl self-stretch text-center mx-auto text-lg text-neutral-400 mt-2">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {showcaseRand.map((showcase, index) => (
          <motion.div
            key={showcase.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ShowcaseCard showcase={showcase} />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 lg:mt-16 flex justify-center items-center">
        <TransitionLink href="/h/showcases">
          <motion.button
            className="hero-button flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t("explore")} <ArrowRight size={20} />
          </motion.button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Showcases;
