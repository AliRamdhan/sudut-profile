"use client";

import { ReactNode, useState, useEffect } from "react";
import { GsapProvider } from "@/provider/gsap-provider";
import { TransitionProvider } from "@/provider/transition-provider";
import Header from "./_components/shared/header";
import Footer from "./_components/shared/footer";

export default function SampleLayout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check system preference on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Set the page title
    document.title = "Samples Construction | Sudut Profile";

    // Change the favicon dynamically
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("href", "/images/logo-raw.jpg");
    link.setAttribute("type", "image/jpg");
    document.head.appendChild(link);
  }, []);

  return (
    <section>
      <GsapProvider>
        <TransitionProvider>
          <div>
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <main>{children}</main>
            <Footer />
          </div>
        </TransitionProvider>
      </GsapProvider>
    </section>
  );
}
