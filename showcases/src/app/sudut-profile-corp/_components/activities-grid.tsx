/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import { activities } from "../_lib/data";
import ActivitiesCard from "../activities/_components/activities-card";

const Activities = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 my-16">
      <div className="mb-2">
        <Badge
          variant={"outline"}
          className="text-sm uppercase tracking-wide shadow-xl"
        >
          DIGITAL DOWNLOAD & Event&apos;s
        </Badge>
        <h1 className="max-w-2xl text-4xl lg:text-7xl font-bold text-gray-900 uppercase tracking-tighter">
          Beli Tiket & Digital Download-nya!
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Event Show Cards */}
        {activities
          .filter((activity) => activity.status == "ongoing")
          .slice(0, 3)
          .map((activity) => (
            <div key={activity.id}>
              <ActivitiesCard activity={activity} />
            </div>
          ))}
      </div>

      <div className="mt-8 w-full flex justify-center items-center">
        <TransitionLink href={`/sudut-profile-corp/activities`}>
          <Button
            variant={`link`}
            className="px-16 border transition duration-300 hover:scale-105"
          >
            View All Activities
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Activities;
