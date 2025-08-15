import React from "react";
import Cta from "../_components/cta";

const Page = () => {
  return (
    <div>
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium">About Us</p>

            <h1
              className={`italic text-4xl md:text-6xl font-semibold italic tracking-tighter leading-[130%]`}
            >
              Who We Are
            </h1>
          </div>

          <div className="max-w-5xl mt-10 text-5xl font-medium text-justify px-8">
            <h2 className="text-gray-800 leading-relaxed">
              We are a passionate team committed to building innovative
              solutions that empower businesses and communities. Since our
              founding, we have focused on delivering quality, trust, and
              long-term value.
            </h2>
            <p className="text-gray-800 mt-4 leading-relaxed">
              Our mission is simple: create meaningful impact through
              creativity, technology, and collaboration.
            </p>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default Page;
