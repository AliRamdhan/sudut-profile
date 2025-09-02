import React from "react";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { ArrowRight } from "lucide-react";
import { solutions } from "../lib/data";

const Page = () => {
  return (
    <div className="bg-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Tailored Construction Solutions
          </h2>
          <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
            At Sudut Profile Construction, we offer a comprehensive suite of
            construction services, meticulously tailored to match your unique
            project requirements, ensuring success at every step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((service) => (
              <div
                key={service.slug}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.label}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.label}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {service.description}
                  </p>
                  <TransitionLink
                    href={`services/${service.slug}`}
                    className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
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
