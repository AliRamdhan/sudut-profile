import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Cta from "../_components/cta";

const Page = () => {
  return (
    <div>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            PROJECTS
          </h1>
          <p className="text-sm text-gray-600">BROADCAST TV</p>
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

          {/* File Not Found */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <Image
                src="/images/sudut-profile-design-corp/close-faces-portrait.png"
                width={1024}
                height={1024}
                alt="File Not Found project"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">FILE NOT FOUND</h3>
              <p className="text-sm text-gray-600 mb-2">2019</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Feature</span>
                <span>Lifestyle</span>
              </div>
            </div>
          </div>

          {/* Comes Back */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <Image
                src="/images/sudut-profile-design-corp/placeholder-v74tb.png"
                width={1024}
                height={1024}
                alt="Comes Back project"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">COMES BACK</h3>
              <p className="text-sm text-gray-600 mb-2">2022</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Automotive</span>
                <span>Lifestyle</span>
              </div>
            </div>
          </div>

          {/* Callaway */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <Image
                src="/images/sudut-profile-design-corp/athletic-portrait.png"
                width={1024}
                height={1024}
                alt="Callaway project"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">CALLAWAY</h3>
              <p className="text-sm text-gray-600 mb-2">2021</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Automotive</span>
                <span>Branding</span>
              </div>
            </div>
          </div>

          {/* Trimming Jingle */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
              <Image
                src="/images/sudut-profile-design-corp/person-blue-gesture.png"
                width={1024}
                height={1024}
                alt="Trimming Jingle project"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">TRIMMING JINGLE</h3>
              <p className="text-sm text-gray-600 mb-2">2023</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Film</span>
                <span>Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta Section */}
      <Cta />
    </div>
  );
};

export default Page;
