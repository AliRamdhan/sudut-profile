"use client";

import Hero from "./disuruh-hero";
import AboutUs from "./disuruh-about-us";
import Services from "./disuruh-services-slider";
import Features from "./disuruh-features-grid";
import Testimonials from "./disuruh-testimonials";
import Cta from "./disuruh-cta";

const DisuruhWrapper = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Innovation Section */}
      <Services />

      {/* Features Grid Section */}
      <Features />

      {/* Latest Articles Section */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />
    </div>
  );
};

export default DisuruhWrapper;
