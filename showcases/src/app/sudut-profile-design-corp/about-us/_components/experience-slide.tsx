"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Founded",
    company: "DesignCorp",
    period: "2018",
    description:
      "Started as a small design-focused company providing branding and UI/UX solutions.",
  },
  {
    title: "Expanded into Full-Service Agency",
    company: "DesignCorp",
    period: "2019 - 2020",
    description:
      "Grew into a full-service creative agency covering marketing, strategy, and web development.",
  },
  {
    title: "Launched International Projects",
    company: "Global Clients",
    period: "2021 - 2022",
    description:
      "Delivered projects for clients across Europe, Asia, and North America, expanding our global reach.",
  },
  {
    title: "Recognized as Leading Creative Agency",
    company: "DesignCorp",
    period: "2023 - Present",
    description:
      "Received multiple awards and recognition as a top agency in the creative industry.",
  },
];

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8 mt-8">
      {experiences.map((exp, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          {/* Header Row */}
          <button
            className="w-full flex justify-between items-center py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="w-full text-left">
              <h3 className="text-lg font-semibold text-black">{exp.title}</h3>
              <p className="text-gray-600">
                <span className="font-bold italic">Sudut Profile</span>{" "}
                {exp.company}
              </p>
            </div>

            <div className="w-full flex justify-end items-center gap-x-4">
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <ChevronDown
                className={`w-6 h-6 text-gray-500 transition-all duration-500 ease-out ${
                  openIndex === index
                    ? "rotate-180 scale-110"
                    : "rotate-0 scale-100"
                }`}
              />
            </div>
          </button>

          {/* Animated Description */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-500 text-lg mt-2">{exp.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
