/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import DynamicFrameLayout from "./_components/dynamic-frame-portfolio";
import SliderPortfolio from "./_components/slider-portfolio";
import { Statistics } from "./_components/statistics";
import News from "./_components/news";
import { TestimonialSection } from "./_components/testimonials";
import Cta from "./_components/cta";

const Page = () => {
  const [headerSize] = useState(1.2); // 120% is the default size
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
            <div className="text-center text-white space-y-4">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold px-4">
                STORAGE IN HOUSE
              </h1>

              <p className="text-lg md:text-xl">
                We take pride on our efficiency. When it comes to our local
                storage capabilities, 100% secure 2000m2.
              </p>
              <div className="flex justify-center space-x-4">
                <TransitionLink href="services" target="_blank">
                  <Button className="text-lg px-12 py-4 rounded-lg">
                    Learn More
                  </Button>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="h-[60vh]">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex-1 text-center text-8xl font-bold">About Us</div>
          <div className="flex-1 text-3xl font-medium leading-12 text-justify px-8">
            <h2>
              Temukan vila & apartemen teramat-sangat mewah yang kaya dengan
              pengalaman hidup di seluruh kepulauan Indonesia yang menakjubkan.
            </h2>
            <h2 className="my-5">
              Mirah Investment & Development berdiri sebagai pelopor dalam
              menciptakan pengembangan properti eksklusif dan menarik di Bali
              dan Indonesia, yang berfokus pada penciptaan peluang investasi
              dengan keuntungan tinggi yang luar biasa bagi investor cerdas.
            </h2>
            <h2>
              Lakukan langkah selanjutnya, & beli vila Anda di surga hari ini.
            </h2>
          </div>
        </div>
      </section>
      <SliderPortfolio />
      {/* Portfolio Dynamic Layout */}
      <section className={`min-h-screen flex items-center justify-center p-8`}>
        <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-16">
              <h1
                className={`italic text-4xl md:text-6xl font-light italic tracking-tighter leading-[130%]`}
                style={{ fontSize: `${5 * headerSize}rem` }}
              >
                Brand
                <br />
                Designer
                <br />
                at Luma?
              </h1>
              <div
                className={`flex flex-col gap-12 text-base font-light w-full`}
              >
                <div className="space-y-6">
                  <div className="h-px bg-white/10 w-full" />
                  <p>
                    Luma is looking to hire a multi-disciplinary Brand Designer
                    to develop and maintain the brand identity and communicate
                    the story of Luma to the world. Alongside members of the
                    design team using product and research insights, you will
                    help shape and define Luma&apos;s brand across product
                    surfaces, social media, merchandise, marketing website,
                    launch campaigns as well as other new channels.
                  </p>
                  <p>
                    You will use a combination of graphic design, motion design,
                    web design and video production/editing skills across
                    traditional and innovative tools to communicate in visually
                    compelling and impactful ways.
                  </p>
                  <p>Here are some of our favorite works so far.</p>
                  <div className="h-px bg-white/10 w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>
      <Statistics />
      <TestimonialSection />
      <News />
      <Cta />
    </div>
  );
};

export default Page;
