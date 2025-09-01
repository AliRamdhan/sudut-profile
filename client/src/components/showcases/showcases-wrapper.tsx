"use client";

import React from "react";
import { motion } from "framer-motion";
import { showcases } from "@/lib/data";
import ShowcaseCard from "./showcase-card";

const ShowcasesWrapper = () => {
  return (
    <div
      id="our-showcases"
      className="w-full min-h-screen flex flex-col items-center justify-start"
    >
      <div className="max-w-screen-2xl relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {showcases.map((showcase, index) => (
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
      </div>
    </div>
  );
};

export default ShowcasesWrapper;
