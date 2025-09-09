"use client";

import { TransitionLink } from "@/components/layout/transition-link";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");
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
        <TransitionLink href="/" className="text-white font-black text-xl">
          SUDUTPROFILE
        </TransitionLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-white">
          <TransitionLink
            href="/h/showcases"
            className="hover:text-neutral-300 transition-colors"
          >
            {t("showcases")}
          </TransitionLink>
          <TransitionLink
            href="/h/success-stories"
            className="hover:text-neutral-300 transition-colors"
          >
            {t("successStories")}
          </TransitionLink>
          <TransitionLink
            href="/h/contacts"
            className="hover:text-neutral-300 transition-colors"
          >
            {t("contact")}
          </TransitionLink>
        </nav>

        <div className="flex items-center gap-x-4">
          <LanguageSwitcher />
          <div className="hidden lg:block">
            <TransitionLink href="/h/contacts">
              <motion.button
                className="bg-white text-black font-semibold py-2 px-5 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("cta")}
              </motion.button>
            </TransitionLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white lg:hidden"
            aria-label="Mobile Menu Button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-6 text-white rounded-b-xl"
          >
            <div className="flex flex-col gap-4 text-lg">
              <TransitionLink
                href="/h/showcases"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("showcases")}
              </TransitionLink>
              <TransitionLink
                href="/h/success-stories"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("successStories")}
              </TransitionLink>
              <TransitionLink
                href="/h/contacts"
                className="hover:text-neutral-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </TransitionLink>
              <TransitionLink
                href="/h/contacts"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="bg-white text-black font-semibold py-2 px-4 rounded-full w-full text-center">
                  {t("cta")}
                </button>
              </TransitionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
