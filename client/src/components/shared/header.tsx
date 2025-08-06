"use client";

import { TransitionLink } from "@/components/layout/transition-link";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

export function Header() {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white">
          <TransitionLink
            href="/template"
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

        <div className="hidden md:block">
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

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-6 text-white rounded-b-xl"
          >
            <div className="flex flex-col gap-4 text-lg">
              <TransitionLink
                href="/template"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </TransitionLink>
              <TransitionLink
                href="/#about"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </TransitionLink>
              <TransitionLink
                href="/contacts"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </TransitionLink>
              <TransitionLink
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="bg-white text-black font-semibold py-2 px-4 rounded-full w-full text-center">
                  Let&apos;s Talk
                </button>
              </TransitionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
