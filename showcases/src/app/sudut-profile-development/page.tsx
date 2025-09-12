/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {Hero} from "./_components/hero";
import SliderPortfolio from "./_components/slider-services";
import { Statistics } from "./_components/statistics";
import News from "./_components/news";
import { Testimonials } from "./_components/testimonials";
import Cta from "./_components/cta";
import DynamicFrameWrapper from "./_components/dyanamic-frame-wrapper";
import { About } from "./_components/about-us";

const Page = () => {
  return (
    // Hero
    // About Us
    // Portfolio
    // About Us (2) Dynamic Layout
    // Testimonials
    // Testimonials Slider
    // Blog / News
    // CTA

    <div>
      {/* Hero Section */}
      <Hero />
      {/* About Us */}
      <About />
      {/* Slider Portfolio Section*/}
      <SliderPortfolio />
      {/* Portfolio Dynamic Layout Section */}
      <DynamicFrameWrapper />
      {/* Statistic Section */}
      <Statistics />
      {/* Testimonial Section */}
      <Testimonials />
      {/* News Section */}
      <News />
      {/* Cta Section */}
      <Cta />
      <div className="mb-24"></div>
    </div>
  );
};

export default Page;
