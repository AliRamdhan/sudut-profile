"use client";

import { Badge } from "@/components/ui/badge";
/* eslint-disable @next/next/no-img-element */
import Cta from "../_components/cta";
import TalentCard from "../_components/talents-card";
import { Talent, talents } from "../_lib/data";

const Page = () => {
  // Hero
  // About Us
  // Digital Download + Event
  // Talents
  // Course
  // Blog
  // CTA

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-8">
        <div className="mb-2 pb-4">
          <Badge
            variant={"outline"}
            className="text-sm uppercase tracking-wide shadow-xl mb-2"
          >
            Talents
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Talents
          </h1>
          <p className="mt-2 text-gray-500 italic">
            Meet the talented individuals shaping our community and projects.
          </p>
          <p className="max-w-4xl mt-4 text-gray-600">
            Our talents are a diverse group of professionals and creators who
            excel in their fields. From innovative thinkers to skilled
            performers, each talent contributes unique expertise and creativity,
            helping us deliver outstanding programs and experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {talents.map((talent: Talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      </div>

      {/* Cta Section */}
      <div className="w-full bg-gray-50">
        <Cta />
      </div>
    </div>
  );
};

export default Page;
