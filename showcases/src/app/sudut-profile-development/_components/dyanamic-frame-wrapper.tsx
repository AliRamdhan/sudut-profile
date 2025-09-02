"use client";

import React, { useState } from "react";
import DynamicFrameLayout from "./dynamic-frame-portfolio";
import { ChevronRight } from "lucide-react";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";

const DynamicFrameWrapper = () => {
  const [headerSize] = useState(1.2);
  return (
    <section className={`min-h-screen flex items-center justify-center p-8`}>
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[520px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`italic text-4xl md:text-6xl font-light italic tracking-tighter leading-[130%]`}
              style={{ fontSize: `${5 * headerSize}rem` }}
            >
              Sudut
              <br />
              Profile
              <br />
              Development?
            </h1>
            <div className={`flex flex-col gap-12 text-base font-light w-full`}>
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  Sudut Profile is dedicated to shaping Indonesia’s future
                  through property development and strategic investments. From
                  luxury residences and lifestyle destinations to large-scale
                  commercial projects, our portfolio showcases some of the most
                  distinctive developments across the archipelago.
                </p>
                <p>
                  With a proven track record of delivering landmark projects, we
                  combine award-winning design, prime locations, and sustainable
                  growth strategies to create high-value opportunities for our
                  investors and partners.
                </p>
                <p>Here are some of our favorite works so far.</p>
                <div className="h-px bg-white/10 w-full" />
              </div>
              <TransitionLink href={`sudut-profile-development/projects`}>
                <Button
                  variant={`ghost`}
                  className="group hover:bg-transparent text-base font-light"
                >
                  See more{" "}
                  <ChevronRight className="transition-all duration-300 group-hover:translate-x-2" />
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </section>
  );
};

export default DynamicFrameWrapper;
