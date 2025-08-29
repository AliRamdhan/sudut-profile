/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "@/components/ui/card";
import TransitionLink from "@/components/shared/transition-link";

type CourseType = {
  id: number;
  title: string;
  slug: string;
  duration: string;
  imageUrl: string;
  description: string;
};

const CourseCard = ({ course }: { course: CourseType }) => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <img
        alt={course.title}
        src={course.imageUrl}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <p className="block text-xs text-gray-500">{course.duration}</p>

        <TransitionLink href={`courses/${course.slug}`}>
          <h3 className="mt-0.5 text-lg text-blue-900">{course.title}</h3>
        </TransitionLink>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {course.description}
        </p>
      </div>
    </Card>
  );
};

export default CourseCard;
