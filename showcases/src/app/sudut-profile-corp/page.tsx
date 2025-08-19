"use client";

/* eslint-disable @next/next/no-img-element */
import Hero from "./_components/hero";
import AboutUs from "./_components/about-us-grid";
import Events from "./_components/events-grid";
import Courses from "./_components/courses-grid";
import Talents from "./_components/talents-grid";
import Blogs from "./_components/blogs-grid";
import Cta from "./_components/cta";

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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        {/* About Us */}
        <AboutUs />
      </div>

      {/* Digital Download and Event's Section */}
      <div className="w-full bg-gray-50">
        <Events />
      </div>
      {/* Talent's Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Talents />
      </div>
      {/* Course Section */}
      <div className="w-full bg-gray-50">
        <Courses />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Blog Section */}
        <Blogs />
      </div>
      {/* Cta Section */}
      <div className="w-full bg-gray-50">
        <Cta />
      </div>
    </div>
  );
};

export default Page;
