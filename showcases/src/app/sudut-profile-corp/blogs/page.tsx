"use client";

/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Cta from "../_components/cta";
import BlogWrapper from "./_components/blog_wrapper";

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
            Blogs
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Blogs
          </h1>
          <p className="mt-2 text-gray-500 italic">
            Read stories and insights written by experts, contributors, and our
            community.
          </p>
          <p className="max-w-4xl mt-4 text-gray-600">
            Discover in-depth articles covering topics from industry trends to
            personal growth. Stay informed and inspired with content curated to
            enrich your knowledge.
          </p>
        </div>

        <BlogWrapper />
      </div>

      {/* Cta Section */}
      <div className="w-full bg-gray-50">
        <Cta />
      </div>
    </div>
  );
};

export default Page;
