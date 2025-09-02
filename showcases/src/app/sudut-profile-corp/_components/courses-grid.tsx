import React from "react";
import TransitionLink from "@/components/shared/transition-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseCard from "../courses/_components/course-card";
import { courses } from "../_lib/data";

const Courses = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 mb-16">
      <div className="mb-8">
        <Badge
          variant={"outline"}
          className="text-sm uppercase tracking-wide shadow-xl"
        >
          COURSES
        </Badge>
        <h1 className="max-w-xl text-4xl lg:text-7xl font-bold text-gray-900 uppercase tracking-tighter">
          Kelas dari SUDUT CORP
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-8 w-full flex justify-center items-center">
        <TransitionLink href={`/sudut-profile-corp/activities`}>
          <Button
            variant={`link`}
            className="px-16 border transition duration-300 hover:scale-105"
          >
            View All Courses
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Courses;
