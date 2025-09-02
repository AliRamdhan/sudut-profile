import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { works } from "../lib/data";
import TransitionLink from "@/components/shared/transition-link";

const Page = () => {
  return (
    <div className="bg-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Construction Projects
          </h2>
          <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
            Explore our extensive work showcasing the breadth of our
            expertise, from iconic structures to sustainable solutions, all
            meticulously crafted to perfection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {works.map((work) => (
              <div
                key={work.label}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={work.image}
                  alt={work.label}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {work.label}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {work.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                    <div>Location</div>
                    <div className="font-medium text-gray-900">
                      {work.location}
                    </div>
                    <div>Duration</div>
                    <div className="font-medium text-gray-900">
                      {work.duration}
                    </div>
                    <div>Total Budget</div>
                    <div className="font-medium text-gray-900">
                      {work.price}
                    </div>
                  </div>
                  <TransitionLink href={`works/${work.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                    >
                      Read more
                    </Button>
                  </TransitionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
