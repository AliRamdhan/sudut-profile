/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Cta from "../_components/cta";
import CourseCard from "./_components/course-card";
import { courses } from "../_lib/data";

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
            Courses
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Courses
          </h1>
          <p className="mt-2 text-gray-500 italic">
            Learn new skills through carefully designed courses for all levels.
          </p>
          <p className="max-w-4xl mt-4 text-gray-600">
            Our courses cover a wide range of topics from technology to creative
            arts. Each course is structured to help you gain practical knowledge
            and confidently apply it in real-world scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
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
