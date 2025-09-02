import React from "react";
import { services } from "../_lib/data";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Services */}
        {services.map((service) => (
          <div
            key={service.slug}
            className="group bg-gray-50 rounded-3xl p-8 group-hover:shadow-xl"
          >
            <TransitionLink
              href={`/sudut-profile-design-corp/services/${service.slug}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-5xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="max-w-3xl text-lg text-gray-600">
                    {service.about}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:bg-black group-hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-2xl h-[640px] flex items-center justify-center">
                <Image
                  src={service.heroImage}
                  alt={service.slug}
                  className="w-full h-full object-cover object-center rounded-2xl"
                  width={1024}
                  height={1024}
                />
              </div>
            </TransitionLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
