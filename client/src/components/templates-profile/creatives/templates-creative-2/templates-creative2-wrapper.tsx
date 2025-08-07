"use client";
import { useState, useEffect } from "react";
import Header from "./shared/templates-creative2-header";
import Footer from "./shared/templates-creative2-footer";
import Hero from "./templates-creative2-hero";
import WearYourStory from "./templates-creative2-wear-story";
import FeatureCarousel from "./templates-creative2-carousel";
import PortfolioGrid from "./templates-creative2-portfolio";
import Timeline from "./templates-creative2-timeline";
import Marquee from "./templates-creative2-marquee";
import ContactForm from "./templates-creative2-contact-form";
import NewsletterSubscribe from "./templates-creative2-news";

const TemplatesCreative2Wrapper = () => {
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
    <section>
      {/* Header Section */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WearYourStory />
        <FeatureCarousel />
        <PortfolioGrid />
        <Timeline />
        <Marquee />
        <ContactForm />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </section>
  );
};

export default TemplatesCreative2Wrapper;
