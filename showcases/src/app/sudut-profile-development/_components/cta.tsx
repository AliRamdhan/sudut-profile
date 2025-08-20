import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="relative h-full lg:h-[60vh] text-center space-y-8">
      <Image
        src="/images/sudut-profile-development/cta.jpg"
        alt="Testimonial Cover"
        className="w-full h-full object-cover object-center"
        width={1024}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent flex flex-col items-center justify-center px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their
            projects with our expertise. Let&apos;s discuss how we can bring
            your vision to life.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-white-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/30 group"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-white-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
          >
            View Our Portfolio
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-70">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              200+
            </div>
            <div className="text-base text-white">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              98%
            </div>
            <div className="text-base text-white">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              15+
            </div>
            <div className="text-base text-white">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              $50M+
            </div>
            <div className="text-base text-white">
              Value Created
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
