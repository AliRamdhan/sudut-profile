import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import TransitionLink from "@/components/shared/transition-link";
import { Menu, X } from "lucide-react";
export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div>
      <header className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-semibold">
          <TransitionLink href="/sudut-profile-design-corp">
            <span className="font-bold italic">Sudut Profile</span> DesignCorp
          </TransitionLink>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <TransitionLink
            href="/sudut-profile-design-corp/works"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
          >
            Work
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-design-corp/articles"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
          >
            Insights
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-design-corp/about-us"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-design-corp/contacts"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
          >
            Contact
          </TransitionLink>
        </nav>
        <Button className="hidden md:inline-flex bg-black text-white hover:bg-gray-800 rounded-full px-6">
          Get in touch
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Mobile Menu"
          className="md:hidden"
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white p-8"
            >
              <div className="flex flex-col gap-4 text-lg">
                <TransitionLink
                  href="/sudut-profile-design-corp/works"
                  className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Work
                </TransitionLink>
                <TransitionLink
                  href="/sudut-profile-design-corp/articles"
                  className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Insights
                </TransitionLink>
                <TransitionLink
                  href="/sudut-profile-design-corp/about-us"
                  className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                  onClick={() => setIsMobileOpen(false)}
                >
                  About
                </TransitionLink>
                <TransitionLink
                  href="/sudut-profile-design-corp/contacts"
                  className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact
                </TransitionLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Header;
