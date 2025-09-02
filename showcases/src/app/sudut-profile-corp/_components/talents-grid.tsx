import React from "react";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { talents } from "../_lib/data";
import TalentsCard from "./talents-card";

const Talents = () => {
  return (
    <section className="my-16">
      <div className="mb-2 flex justify-between items-center">
        <h1 className="max-w-2xl text-4xl lg:text-7xl font-bold text-gray-900 uppercase tracking-tighter">
          Talent&apos;s
        </h1>
        <div className="flex justify-start items-center gap-x-4">
          <Button
            id="hardwareSensorPrev"
            variant={"outline"}
            className="border border-gray-300 shadow-xl p-6 rounded-full"
            size={"icon"}
          >
            <ChevronLeft />
          </Button>

          <Button
            id="hardwareSensorNext"
            variant={"outline"}
            className="border border-gray-300 shadow-xl p-6 rounded-full"
            size={"icon"}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Talents Cards */}
        {talents.slice(0, 3).map((talent) => (
          <TalentsCard key={talent.id} talent={talent} />
        ))}
      </div>

      <div className="mt-8 w-full flex justify-center items-center">
        <TransitionLink href={`/sudut-profile-corp/talents`}>
          <Button
            variant={`link`}
            className="px-16 border transition duration-300 hover:scale-105"
          >
            View All Talents
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Talents;
