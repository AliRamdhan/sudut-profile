/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { CourseCurriculum } from "./_components/course-curriculum";
import { CourseContent } from "./_components/course-content";
import { LockedContent } from "./_components/locked-content";
import { courseDetail } from "../../_lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

const Page = ({ params }: { params: { slug: string } }) => {
  const course = courseDetail.find((c) => c.slug === params.slug);

  if (!course) return notFound();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {course.title} oleh {course.instructor}
          </h1>
          <p className="text-gray-600 mb-6 text-lg">{course.description}</p>
          <Button className="px-6 py-3 rounded-lg font-medium">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Beli {course.price}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <CourseContent contents={course.content} />
          <LockedContent course={course} />
        </div>

        <div className="lg:col-span-1">
          <CourseCurriculum curriculums={course.curriculum} />
        </div>
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-gray-700 text-sm">
          Jika ada pertanyaan atau kesulitan dalam proses pembelian bisa email
          ke{" "}
          <Link
            href="mailto:cs@sudutprofile.com"
            className="text-blue-600 underline"
          >
            cs@sudutprofile.com
          </Link>
          . CS akan membalas email Senin-Jumat 09.00 - 18.00 WIB.
        </p>
      </div>
    </div>
  );
};

export default Page;
