import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="max-w-5xl">
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-bold italic">Sudut Profile</span>{" "}
          DesignCorp
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
          Crafting digital
          <br />
          experiences with emphasis
          <br />
          on <span className="text-gray-400">innovative design</span>
        </h1>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default Hero;
