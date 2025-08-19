"use client";

import { Badge } from "@/components/ui/badge";
/* eslint-disable @next/next/no-img-element */
import Cta from "../_components/cta";
import CourseCard from "./_components/course-card";

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
        <div className="mb-2 pb-4 border-b border-black">
          <Badge
            variant={"outline"}
            className="text-sm uppercase tracking-wide shadow-xl mb-2"
          >
            Courses
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Courses
          </h1>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure
            exercitationem reiciendis minima. Nostrum, a quo quaerat repellat
            iure reiciendis, fuga aut eum, facilis velit debitis obcaecati!
            Debitis, placeat mollitia?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
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
