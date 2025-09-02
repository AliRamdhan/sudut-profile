import { Button } from "@/components/ui/button";
import React from "react";

const Cta = () => {
  return (
    <section className="w-full py-24 mx-auto border-t">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl lg:text-[200px] font-semibold tracking-wider leading-none">
            LETS TALK
          </h2>
        </div>

        <div className="flex justify-center items-center">
          {/* Secondary Text */}
          <div>
            <p className="text-2xl md:text-4xl font-semibold tracking-wide">
              AND CREATE SOME STUFF TOGETHER!
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
          <Button
            variant="outline"
            className="rounded-full px-8 bg-transparent"
          >
            Contact Us
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
            Start Project
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 bg-transparent"
          >
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
