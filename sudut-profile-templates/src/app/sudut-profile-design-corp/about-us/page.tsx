"use client";

import { ExternalLink } from "lucide-react";
import Cta from "../_components/cta";
import ClientSlider from "./_components/client-slider";

const Page = () => {
  const experiences = [
    { title: "Founded", company: "DesignCorp", period: "2018" },
    {
      title: "Expanded into Full-Service Agency",
      company: "DesignCorp",
      period: "2019 - 2020",
    },
    {
      title: "Launched International Projects",
      company: "Global Clients",
      period: "2021 - 2022",
    },
    {
      title: "Recognized as Leading Creative Agency",
      company: "DesignCorp",
      period: "2023 - Present",
    },
  ];

  const awards = [
    { title: "Best Agency Website", year: "2021", organization: "AWWWARDS" },
    {
      title: "Top Digital Agency",
      year: "2022",
      organization: "CSS Design Awards",
    },
    { title: "Agency of The Year", year: "2023", organization: "Webby Awards" },
    {
      title: "Excellence in UI/UX",
      year: "2024",
      organization: "FWA",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        {/* About Us Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            ABOUT US
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Designing the Future of{" "}
            <span className="text-gray-400">Digital Experiences</span>
          </h2>
          <p className="max-w-4xl text-gray-600 text-lg mb-8 leading-relaxed">
            At DesignCorp, we believe great design goes beyond visuals. Our
            mission is to craft digital products and experiences that connect
            brands with their audiences, spark emotions, and create lasting
            impact.
          </p>
        </div>

        {/* My Experience Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Our Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-6 border-b border-gray-100"
              >
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 text-sm">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Logos */}
      <ClientSlider />

      <section className="max-w-7xl mx-auto px-6 pb-20">
        {/* Awards & Recognition */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold">Awards & Recognition</h2>
            </div>
            <div className="space-y-6">
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
                  <ExternalLink className="h-5 w-5 text-gray-400" />
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
