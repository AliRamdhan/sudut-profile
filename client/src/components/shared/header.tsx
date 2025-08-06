"use client";

import { TransitionLink } from "@/components/layout/transition-link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Header() {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
    });
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md p-4 rounded-full">
        <TransitionLink href="/" className="text-white font-bold text-xl">
          SUDUTPROFILE
        </TransitionLink>
        <nav className="hidden md:flex items-center gap-6 text-white">
          <TransitionLink
            href="/#template"
            className="hover:text-neutral-300 transition-colors"
          >
            Templates
          </TransitionLink>
          <TransitionLink
            href="/#about"
            className="hover:text-neutral-300 transition-colors"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/contacts"
            className="hover:text-neutral-300 transition-colors"
          >
            Contact
          </TransitionLink>
        </nav>
        <TransitionLink href="/contact">
          <motion.button
            className="bg-white text-black font-semibold py-2 px-5 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.button>
        </TransitionLink>
      </div>
    </motion.header>
  );
}
