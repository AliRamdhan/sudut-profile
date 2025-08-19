import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <section className="relative h-[60vh] mt-24 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
      <Image
        src="/images/sudut-profile-development/cta.jpg"
        alt="Testimonial Cover"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 h-full space-y-6 flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-3xl md:text-6xl font-normal text-white">
            Stay Updated with the Latest in{" "}
            <em className="font-serif italic"> Hospitality</em>
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Get exclusive insights on resort developments, industry awards, and
            investment opportunities across Indonesia&apos;s premier hospitality
            destinations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div className="flex-1 max-w-md">
            <Button
              variant="outline"
              className="p-4 text-lg font-medium transition-all duration-500 hover:scale-105"
            >
              <Calendar />
              Schedule Meeting
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 text-lg text-gray-100">
          <span className="border border-gray-200 rounded-full p-4">
            ✓ Weekly industry updates
          </span>
          <span className="border border-gray-200 rounded-full p-4">
            ✓ Exclusive investment insights
          </span>
          <span className="border border-gray-200 rounded-full p-4">
            ✓ No spam, unsubscribe anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cta;
