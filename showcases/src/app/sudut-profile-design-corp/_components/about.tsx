"use client";

import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

export default function Aboutus() {
  return (
    <section className="w-full py-20 border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            A design agency focused
            <br />
            on creating exceptional
            <br />
            digital experiences
          </h2>
          <div className="w-full flex justify-center items-center">
            <p className="max-w-4xl text-gray-600 text-lg mb-8">
              We specialize in creating digital products that connect brands
              with their audiences on an emotional level. Through thoughtful
              design and strategic thinking, we help companies tell their story
              and create meaningful experiences that drive results.
            </p>
          </div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              aria-label="Explore btn"
              className="apple-button inline-flex items-center transition-all duration-300 hover:scale-110"
            >
              Explore Collection
              <ArrowRightCircle className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
