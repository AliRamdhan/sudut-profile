/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "@/components/layout/transition-link";
import { ArrowRight } from "lucide-react";
import { templates } from "@/lib/data";
import TemplateItemCard from "../cards/template-item-card";
import { templateType } from "@/types/types";

const Templates = () => {
  const [templatesRand, setTemplatesRand] = useState<templateType[]>([]);

  useEffect(() => {
    const randomTemplates = [...templates]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setTemplatesRand(randomTemplates);
  }, []);
  return (
    <section id="templates" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our Templates
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400">
          A selection of templates that define your company profile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {templatesRand.map((template, index) => (
          <motion.div
            key={template.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TemplateItemCard template={template} />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 lg:mt-16 flex justify-center items-center">
        <TransitionLink href="/h/templates">
          <motion.button
            className="hero-button flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Templates <ArrowRight size={20} />
          </motion.button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Templates;
