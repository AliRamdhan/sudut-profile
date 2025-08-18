import React from "react";
import Cta from "../_components/cta";

const Page = () => {
  return (
    <div>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2 max-w-3xl">
            AWARDS & RECOGNITIONS
          </h1>
          <p className="text-xl text-gray-600">BROADCAST TV</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Agency of the Year</h3>
              <p className="text-gray-600">Awwwards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Best Digital Agency</p>
              <p className="text-gray-600">2023 • Awwwards</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Excellence in Design</h3>
              <p className="text-gray-600">CSS Design Awards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Innovation Award</p>
              <p className="text-gray-600">2023 • CSS Awards</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Excellence in Design</h3>
              <p className="text-gray-600">CSS Design Awards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Innovation Award</p>
              <p className="text-gray-600">2023 • CSS Awards</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Excellence in Design</h3>
              <p className="text-gray-600">CSS Design Awards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Innovation Award</p>
              <p className="text-gray-600">2023 • CSS Awards</p>
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
