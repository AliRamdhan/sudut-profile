"use client";

/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <div className="mb-2 pb-4 border-b border-black">
          <Badge
            variant={"outline"}
            className="text-sm uppercase tracking-wide shadow-xl mb-2"
          >
            Activities
          </Badge>
          <h1 className="max-w-3xl text-6xl font-bold text-gray-900 uppercase tracking-tighter">
            Our Activities (2025)
          </h1>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure
            exercitationem reiciendis minima. Nostrum, a quo quaerat repellat
            iure reiciendis, fuga aut eum, facilis velit debitis obcaecati!
            Debitis, placeat mollitia?
          </p>
        </div>
        <Tabs defaultValue="recent" className="mt-8">
          <TabsList>
            <TabsTrigger value="recent" className="w-40">
              Recent
            </TabsTrigger>
            <TabsTrigger value="past" className="w-40">
              Past
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className="w-full text-2xl font-medium text-gray-900 my-8">
              <h1 className="max-w-xl text-4xl italic font-bold text-gray-900 uppercase tracking-tighter pb-2 border-b border-gray-800">
                Yang sedang berlangsung...
              </h1>
              <ActivitiesWrapperRecent />
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="w-full text-2xl font-medium text-gray-900 my-8">
              <h1 className="max-w-xl text-4xl italic font-bold text-gray-900 uppercase tracking-tighter pb-2 border-b border-gray-800">
                Yang sudah berlalu...
              </h1>
              <ActivitiesWrapperPast />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Cta Section */}
      <div className="w-full bg-gray-50">
        <Cta />
      </div>
    </div>
  );
};

export default Page;
