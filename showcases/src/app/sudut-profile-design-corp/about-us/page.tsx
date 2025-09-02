"use client";

import { ExternalLink } from "lucide-react";
import Cta from "../_components/cta";
import ExperienceTimeline from "./_components/experience-slide";
import TransitionLink from "@/components/shared/transition-link";

const Page = () => {
  const awards = [
    {
      title: "Best Agency Website",
      year: "2021",
      organization: "AWWWARDS",
    },
    {
      title: "Top Digital Agency",
      year: "2022",
      organization: "CSS Design Awards",
    },
    {
      title: "Agency of The Year",
      year: "2023",
      organization: "Webby Awards",
    },
    {
      title: "Excellence in UI/UX",
      year: "2024",
      organization: "FWA",
    },
    {
      title: "Innovation in Design",
      year: "2024",
      organization: "Design Week Awards",
    },
    {
      title: "Creative Agency of the Year",
      year: "2025",
      organization: "ADC Awards",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* About Us Section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            ABOUT US
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Designing the Future of{" "}
            <span className="text-gray-400">Digital Experiences</span>
          </h2>
          <p className="max-w-4xl text-gray-600 text-lg mb-8 leading-relaxed">
            At <span className="font-bold italic">Sudut Profile</span>{" "}
            DesignCorp, we believe great design goes beyond visuals. Our mission
            is to craft digital products and experiences that connect brands
            with their audiences, spark emotions, and create lasting impact.
          </p>
        </div>

        {/* My Experience Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold">Our Period Journey</h2>
          <p className="text-gray-600 text-lg">
            The evolution of{" "}
            <span className="font-bold italic">Sudut Profile</span> DesignCorp
            through the years
          </p>
          <ExperienceTimeline />
        </div>

        {/* Company Logos */}
        {/* <AboutUsSlider /> */}

        {/* Awards & Recognition */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="lg:pr-12 lg:sticky lg:top-0 lg:self-start py-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Awards & Recognition
              </h2>
              <p className="text-gray-600 text-lg">
                Honored with multiple awards highlighting excellence in
                branding, digital design, and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-100"
                >
                  <div>
                    <h3 className="font-semibold text-black">{award.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {award.year} • {award.organization}
                    </p>
                  </div>
                  <TransitionLink href={`#`}>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </TransitionLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default Page;
