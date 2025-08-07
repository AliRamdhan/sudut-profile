"use client";
import { useState, useEffect } from "react";
import Header from "./shared/templates-product1-header";
import Hero from "./templates-product1-hero";
import Features from "./templates-product1-features";
import Testimonials from "./templates-product1-testimonials";
import Pricing from "./templates-product1-pricing";
import Footer from "./shared/templates-product1-footer";

const TemplatesProduct1Wrapper = () => {
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
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesProduct1Wrapper;
