import React from "react";

import { Hero } from "./hero-wrapper";
import { LegacySection } from "./legacy-wrapper";
import { WhyChooseUs } from "./why-us-wrapper";
import { Solutions } from "./solutions-wrapper";
import { Products } from "./products-wrapper";
import { Works } from "./works-wrapper";
import { Testimonials } from "./testimonials-wrapper";
import { Cta } from "./cta-wrapper";

const TemplateConstructionWrapper = () => {
  return (
    <div className="flex-1">
      <Hero />
      <LegacySection />
      <WhyChooseUs />
      <Solutions />
      <Products />
      <Works />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default TemplateConstructionWrapper;
