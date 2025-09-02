import React from "react";
import { works } from "../_lib/data";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Works = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-semibold">
          Our <span className="italic underline"> Works</span>
        </h2>
        <TransitionLink href={"sudut-profile-design-corp/works"}>
          <Button
            variant="outline"
            className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
          >
            View all works
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </TransitionLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {works.slice(0, 4).map((work) => (
          <div
            key={work.slug}
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-[400px] group"
            style={{
              backgroundImage: `url(${work.heroImage})`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                {work.title}
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                {work.mainService}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
