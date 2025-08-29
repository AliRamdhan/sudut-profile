/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { Card } from "@/components/ui/card";
import { ActivityType } from "../../_lib/data";

interface ActivitiesCardProps {
  activity: ActivityType;
}
const ActivitiesCard = ({ activity }: ActivitiesCardProps) => {
  return (
    <Card className="overflow-hidden h-full lg:h-[640px]">
      <TransitionLink
        href={`/sudut-profile-corp/activities/${activity.slug}`}
        className="group block overflow-hidden"
      >
        <Image
          src={activity.imageUrl}
          alt={activity.title}
          width={640}
          height={1024}
          className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              {activity.date} - {activity.location}
            </span>
          </div>
          <h4 className="text-xl font-semibold mb-1">
            {activity.title} - {activity.category}
          </h4>
          <p className="text-gray-600 text-sm">{activity.shortDescription}</p>
          <p className="mt-1.5 text-base">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900">
              {activity.price}
            </span>
          </p>
        </div>
      </TransitionLink>
    </Card>
  );
};

export default ActivitiesCard;
