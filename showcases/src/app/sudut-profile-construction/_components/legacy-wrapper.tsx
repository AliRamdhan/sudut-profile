"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
export function LegacySection() {
  return (
    <section id="aboutLegacy" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Legacy of Excellence
        </h2>
        <p className="max-w-4xl text-lg mx-auto text-gray-700 mb-16">
          Established 2012, Struktura has been a leading force in the commercial
          office building construction industry, specializing in commercial
          office building construction. Our commitment to quality and innovation
          sets us apart.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={260} />+
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={95} />%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={200} />+
            </div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              <CountUp duration={3} end={100} />+
            </div>
            <div className="text-gray-600">Qualified Engineers</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-4">
          <Button variant={"outline"} className="rounded-full py-6 lg:py-8 text-base">
            <Check /> Always building quality industrial
          </Button>
          <Button variant={"outline"} className="rounded-full py-6 lg:py-8 text-base">
            <Check /> Best manufacturing service provider
          </Button>
          <Button variant={"outline"} className="rounded-full py-6 lg:py-8 text-base">
            <Check /> Using the newest manufacturing tech
          </Button>
          <Button variant={"outline"} className="rounded-full py-6 lg:py-8 text-base">
            <Check /> Experienced trusted contractor
          </Button>
        </div>
      </div>
    </section>
  );
}
