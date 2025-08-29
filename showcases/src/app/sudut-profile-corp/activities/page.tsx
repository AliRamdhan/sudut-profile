/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Cta from "../_components/cta";
import ActivitiesWrapperRecent from "./_components/activities_wrapper_recent";
import ActivitiesWrapperPast from "./_components/activities_wrapper_past";

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
            Activities
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Activities (2025)
          </h1>
          <p className="mt-2 text-gray-500 italic">
            Explore events and programs that bring our community together and
            inspire creativity.
          </p>
          <p className="max-w-4xl mt-4 text-gray-600">
            From workshops to local meetups, our activities are designed to help
            you learn, connect, and grow. Participate and be part of our vibrant
            community this year.
          </p>
        </div>
        <div className="mt-8">
          <div className="w-full text-2xl font-medium text-gray-900 my-8">
            <h2 className="max-w-xl text-4xl font-bold text-gray-900 uppercase tracking-tighter pb-2">
              Gass checkout ticket...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Discover more exciting events and activities happening throughout
              the year
            </p>
            <ActivitiesWrapperRecent />
          </div>
          <div className="w-full text-2xl font-medium text-gray-900 my-8">
            <h2 className="max-w-xl text-4xl font-bold text-gray-900 uppercase tracking-tighter pb-2">
              Yang sudah berlalu...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Take a look at the amazing events we&apos;ve successfully hosted
              and the memories we&apos;ve created together
            </p>
            <ActivitiesWrapperPast />
          </div>
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
