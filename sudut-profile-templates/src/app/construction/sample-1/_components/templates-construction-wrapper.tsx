import React from "react";

import { Hero } from "./templates-construction1-hero";
import { LegacySection } from "./templates-construction1-legacy";
import { WhyChooseUs } from "./templates-construction1-why-us";
import { Solutions } from "./templates-construction1-solutions";
import { Products } from "./templates-construction1-products";
import { Portfolios } from "./templates-construction1-portfolio";
import { Testimonials } from "./templates-construction1-testimonials";
import { UpcomingProjects } from "./templates-construction1-upcoming-projects";

const TemplateConstructionWrapper = () => {
  return (
    <div className="flex-1">
      <Hero />
      <LegacySection />
      <WhyChooseUs />
      <Solutions />
      <Products />
      <Portfolios />
      <Testimonials />
      <UpcomingProjects />
    </div>
  );
};

export default TemplateConstructionWrapper;
