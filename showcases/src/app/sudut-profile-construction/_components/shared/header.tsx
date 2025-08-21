"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import TransitionLink from "@/components/shared/transition-link";
import { AnimatePresence, motion } from "framer-motion";
export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <TransitionLink
            href="mailto:support@construction.com"
            className="flex items-center gap-1 hover:text-white"
          >
            <Mail className="w-3 h-3" />
            <span>support@construction.com</span>
          </TransitionLink>
          <TransitionLink
            href="https://wa.me/6202390310"
            className="flex items-center gap-1 hover:text-white"
          >
            <Phone className="w-3 h-3" />
            <span>+62 0239 0310</span>
          </TransitionLink>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <TransitionLink
            href="#"
            aria-label="Facebook"
            className="hover:text-white"
          >
            {/* <!-- Facebook icon (monochrome) --> */}
            <svg
              role="img"
              aria-label="Facebook"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <title>Facebook</title>
              <path d="M22 12.073C22 6.484 17.523 2 12 2S2 6.484 2 12.073C2 17.09 5.657 21.254 10.438 21.98v-6.99H7.898v-2.92h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.444 2.92h-2.329v6.99C18.343 21.254 22 17.09 22 12.073z" />
            </svg>
          </TransitionLink>
          <TransitionLink
            href="#"
            aria-label="Twitter"
            className="hover:text-white"
          >
            {/* <!-- Twitter icon (monochrome) --> */}
            <svg
              role="img"
              aria-label="Twitter"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <title>Twitter</title>
              <path d="M22.162 5.656c-.63.28-1.306.47-2.016.56.725-.434 1.28-1.12 1.544-1.94-.678.402-1.428.695-2.226.853C18.92 4.7 18.03 4.25 17.05 4.25c-1.86 0-3.372 1.51-3.372 3.373 0 .264.03.52.087.766-2.803-.14-5.29-1.48-6.955-3.52-.29.5-.456 1.083-.456 1.703 0 1.176.598 2.213 1.506 2.822-.556-.017-1.08-.17-1.539-.425v.043c0 1.642 1.17 3.01 2.724 3.322-.285.078-.585.12-.894.12-.218 0-.43-.02-.637-.062.43 1.345 1.678 2.327 3.157 2.354-1.158.907-2.62 1.45-4.205 1.45-.273 0-.544-.016-.81-.047 1.5.962 3.28 1.523 5.194 1.523 6.233 0 9.644-5.162 9.644-9.636 0-.146-.003-.292-.01-.436.664-.48 1.24-1.08 1.696-1.767-.607.27-1.26.452-1.945.535.7-.42 1.236-1.085 1.49-1.878z" />
            </svg>
          </TransitionLink>
          <TransitionLink
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            {/* <!-- LinkedIn icon (monochrome) --> */}
            <svg
              role="img"
              aria-label="LinkedIn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.351V9h3.414v1.561h.049c.476-.902 1.637-1.852 3.369-1.852 3.604 0 4.268 2.373 4.268 5.458v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.144.925-2.07 2.069-2.07 1.144 0 2.07.926 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zM6.957 20.452H3.717V9h3.24v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.771 24h20.451C23.203 24 24 23.226 24 22.268V1.73C24 .774 23.203 0 22.225 0z" />
            </svg>
          </TransitionLink>
          <TransitionLink
            href="#"
            aria-label="Instagram"
            className="hover:text-white"
          >
            {/* <!-- Instagram icon (monochrome) --> */}
            <svg
              role="img"
              aria-label="Instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.405a4.92 4.92 0 011.675 1.09c.48.48.81 1.05 1.09 1.675.165.46.352 1.26.405 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.43a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.46.165-1.26.352-2.43.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.405a4.902 4.902 0 01-1.675-1.09 4.902 4.902 0 01-1.09-1.675c-.165-.46-.352-1.26-.405-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.43a4.902 4.902 0 011.09-1.675 4.902 4.902 0 011.675-1.09c.46-.165 1.26-.352 2.43-.405C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.069-1.02.045-1.574.215-1.944.357-.495.18-.848.396-1.22.768-.372.372-.588.725-.768 1.22-.142.37-.312.924-.357 1.944-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.045 1.02.215 1.574.357 1.944.18.495.396.848.768 1.22.372.372.725.588 1.22.768.37.142.924.312 1.944.357 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.02-.045 1.574-.215 1.944-.357.495-.18.848-.396 1.22-.768.372-.372.588-.725.768-1.22.142-.37.312-.924.357-1.944.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.045-1.02-.215-1.574-.357-1.944-.18-.495-.396-.848-.768-1.22-.372-.372-.725-.588-1.22-.768-.37-.142-.924-.312-1.944-.357C15.548 4.013 15.17 4.001 12 4.001zM12 7.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 1.838a2.324 2.324 0 110 4.648 2.324 2.324 0 010-4.648zM17.844 6.162a1.02 1.02 0 11-2.04 0 1.02 1.02 0 012.04 0z" />
            </svg>
          </TransitionLink>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <TransitionLink
          href="/sudut-profile-construction"
          className="flex items-center gap-2 text-lg font-bold text-gray-900"
        >
          <Building className="w-6 h-6" />
          Sudut Profile Constructions
        </TransitionLink>
        <nav className="hidden md:flex items-center space-x-6">
          <TransitionLink
            href="/sudut-profile-construction/#aboutLegacy"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            About us
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-construction/portfolios"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Portfolio
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-construction/services"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Services
          </TransitionLink>
          <TransitionLink
            href="/sudut-profile-construction/products"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Products
          </TransitionLink>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
        >
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
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white px-16 py-8"
          >
            <div className="flex flex-col gap-4 text-lg">
              <TransitionLink
                href="/sudut-profile-construction/#aboutLegacy"
                className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                onClick={() => setIsMobileOpen(false)}
              >
                About us
              </TransitionLink>
              <TransitionLink
                href="/sudut-profile-construction/portfolios"
                className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                onClick={() => setIsMobileOpen(false)}
              >
                Portfolio
              </TransitionLink>
              <TransitionLink
                href="/sudut-profile-construction/services"
                className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                onClick={() => setIsMobileOpen(false)}
              >
                Services
              </TransitionLink>
              <TransitionLink
                href="/sudut-profile-construction/products"
                className="text-gray-600 hover:text-gray-900 font-medium pb-4 border-b"
                onClick={() => setIsMobileOpen(false)}
              >
                Products
              </TransitionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
