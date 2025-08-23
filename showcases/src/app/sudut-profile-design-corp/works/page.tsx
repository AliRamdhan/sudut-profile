import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Cta from "../_components/cta";
import TransitionLink from "@/components/shared/transition-link";
import { works } from "../_lib/data";

const Page = () => {
  return (
    <div>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            WORKS
          </h1>
          <p className="text-lg text-gray-600">
            Showcasing our work across media platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {/* Lucid Mode - Large */}
          <div className="md:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-[16/9] mb-4">
              <Image
                src="/images/sudut-profile-design-corp/sleek-black-remote.png"
                width={1024}
                height={1024}
                alt="Lucid Mode project"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-1">LUCID MODE</h3>
                <p className="text-sm text-gray-600 mb-2">2021</p>
                <p className="text-xs text-gray-500">Broadcast TV</p>
              </div>
            </div>
          </div>

          {works.map((work, index) => (
            <TransitionLink
              key={index}
              href={`works/${work.slug}`}
              className="group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden bg-gray-100 aspect-square mb-4`}
              >
                <Image
                  src={work.heroImage}
                  width={1024}
                  height={1024}
                  alt={`${work.title} work`}
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3
                  className={`${
                    index === 0 ? "text-xl" : "text-lg"
                  } font-bold mb-1`}
                >
                  {work.title.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{work.year}</p>
                <div className="flex gap-2 text-xs text-gray-500">
                  {work.categories.map((cat, i) => (
                    <span key={i}>{cat}</span>
                  ))}
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </section>

      {/* Cta Section */}
      <Cta />
    </div>
  );
};

export default Page;
