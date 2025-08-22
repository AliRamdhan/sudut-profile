"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const timelines = [
  {
    year: 2018,
    title: "Sudut Profile Design Corp Founded",
    description:
      "Started as a small design-focused company with a passion for minimalism and creative solutions.",
    details:
      "Sudut Profile Design Corp was founded in Jakarta by a group of multidisciplinary designers. The company initially focused on branding, minimal web design, and floral-inspired aesthetics.",
  },
  {
    year: 2019,
    title: "Expanded into Full-Service Agency",
    description:
      "Grew beyond design into a full-service creative agency with broader capabilities.",
    details:
      "During this period, Sudut Profile Design Corp expanded services to include UI/UX, strategy, marketing, and digital product design, securing its first large-scale corporate projects.",
  },
  {
    year: 2020,
    title: "Launch of Online Services",
    description:
      "Brought our creativity to the digital space and adapted to global changes.",
    details:
      "The agency pivoted toward remote collaboration, launching online branding consultations, e-commerce web development, and virtual creative workshops to serve clients worldwide.",
  },
  {
    year: 2021,
    title: "Collaboration with Global Brands",
    description:
      "Partnered with international companies to create exclusive design and branding collections.",
    details:
      "Delivered high-profile projects for lifestyle and fashion brands in Asia and Australia, while also handling digital campaigns for startups in Europe and North America.",
  },
  {
    year: 2022,
    title: "International Recognition",
    description:
      "Recognized for innovation and design excellence at global creative showcases.",
    details:
      "Sudut Profile Design Corp received design awards and was featured in international publications, highlighting its blend of minimalism, technology, and brand storytelling.",
  },
  {
    year: 2023,
    title: "Leading Creative Agency",
    description:
      "Acknowledged as one of the top creative agencies in Southeast Asia.",
    details:
      "Opened a flagship creative studio in Jakarta, combining digital installations with immersive client experiences. Received multiple industry awards for design and branding excellence.",
  },
  {
    year: 2024,
    title: "Global Expansion & Strategic Partnerships",
    description:
      "Scaled operations and formed partnerships to strengthen our international presence.",
    details:
      "Launched satellite offices in Singapore and Sydney to better serve regional clients. Partnered with tech companies to explore AI-driven design workflows and data-powered brand strategies.",
  },
  {
    year: 2025,
    title: "Future-Ready Creative Ecosystem",
    description:
      "Building the future of creative innovation through technology and sustainability.",
    details:
      "Sudut Profile Design Corp is set to launch an AI-powered creative lab and sustainability-driven design initiatives, shaping the next era of branding, product design, and digital experiences.",
  },
];

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The evolution of <span className="italic font-bold">Sudut Profile</span> DesignCorp through the
            years
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any}
            />
          </motion.div>

          {timelines.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelines)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">
              {event.details}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
