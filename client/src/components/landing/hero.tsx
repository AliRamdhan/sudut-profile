"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TransitionLink } from "@/components/layout/transition-link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-button",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
          "-=0.5"
        );
    },
    { scope: container }
  );

  const title = "Tell Your Story. Build Trust. Make Impact.";
  const splitTitle = title.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block">{word}&nbsp;</span>
    </span>
  ));

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Hero Sudut Profile"
          width={1000}
          height={1000}
          className="w-full lg:w-1/2 h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="hero-title font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
          {splitTitle}
        </h1>

        <motion.p
          className="hero-subtitle text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          We design digital company profiles that elevate your brand, simplify
          your reach to clients, customers, investors, and partners, and
          strengthen trust through clarity and professionalism.
        </motion.p>
        <TransitionLink href="#showcases">
          <motion.button
            className="hero-button flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Showcases <ArrowRight size={20} />
          </motion.button>
        </TransitionLink>
      </div>
    </div>
  );
};

export default Hero;
