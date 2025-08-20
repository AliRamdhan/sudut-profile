"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import SliderPortfolio from "./_components/slider-portfolio";
import { Statistics } from "./_components/statistics";
import News from "./_components/news";
import { Testimonials } from "./_components/testimonials";
import Cta from "./_components/cta";
import DynamicFrameWrapper from "./_components/dyanamic-frame-wrapper";

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
      <section
        id="home"
        className="relative h-full w-full overflow-hidden -mt-28"
      >
        <video
          className="w-full h-full object-cover"
          src={"/images/sudut-profile-development/hero.mp4"}
          loop
          muted
          playsInline
          autoPlay={true}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-full p-20">
            <div className="flex flex-col justify-center items-center text-center text-white space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold px-4">
                DEVELOPMENT & INVESTMENT
              </h1>

              <p className="text-lg md:text-2xl max-w-6xl">
                We take pride in delivering projects with efficiency and impact.
                With a proven track record across residential, commercial, and
                hospitality developments, Sudut Profile offers secure,
                high-value opportunities that drive long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="h-full lg:h-[60vh]">
        <div className="container mx-auto h-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex-1 flex justify-center items-center">
            <h2 className="max-w-2xl text-left text-7xl font-bold tracking-wide">
              Shaping Indonesia&apos;s Future Developments
            </h2>
          </div>
          <div className="flex-1 text-3xl font-medium leading-12 text-justify px-8">
            <p>
              Discover landmark projects ranging from luxury villas and
              apartments to large–scale developments across Indonesia’s most
              desirable destinations.
            </p>
            <p className="my-5">
              Sudut Profile Investment & Development is a market leader in
              creating exclusive, high-value properties in Bali and
              beyond—delivering outstanding returns and long-term growth for
              visionary investors.
            </p>
            <p>
              Invest in the future of Indonesia and be part of developments that
              define tomorrow’s skylines.
            </p>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Page;
