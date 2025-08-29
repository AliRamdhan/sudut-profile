import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const getShapeProgress = () => {
    if (typeof window === "undefined")
      return { borderRadius: "50%", rotation: "0deg" };

    const windowHeight = window.innerHeight;
    const totalScrollHeight =
      document.documentElement.scrollHeight - windowHeight;

    // Avoid division by zero
    if (totalScrollHeight <= 0)
      return { borderRadius: "50%", rotation: "0deg" };

    // First transition: circle to square (0% to 40% of scroll)
    const firstTransition = Math.min(scrollY / (totalScrollHeight * 0.4), 1);

    // Second transition: square back to circle (60% to 100% of scroll)
    const secondTransitionStart = totalScrollHeight * 0.6;
    const secondTransition = Math.max(
      0,
      Math.min((scrollY - secondTransitionStart) / (totalScrollHeight * 0.4), 1)
    );

    // Calculate border radius
    let borderRadius = "50%";
    if (secondTransition > 0) {
      // Morphing back to circle
      borderRadius = `${secondTransition * 50}%`;
    } else {
      // Morphing to square
      borderRadius = `${(1 - firstTransition) * 50}%`;
    }

    // Calculate rotation - simplified
    const rotation = `${firstTransition * 20 - secondTransition * 20}deg`;

    return { borderRadius, rotation };
  };

  const { borderRadius, rotation } = getShapeProgress();

  return (
    <section className="h-[80vh] flex items-center justify-center px-8 md:px-12 lg:px-16 mb-16 relative">
      {/* Morphing Circles/Squares - simplified with CSS variables */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] border border-gray-200 dark:border-white/5 transition-all duration-500 ease-out hw-accelerate"
        style={{
          borderRadius,
          transform: `translate(-50%, -50%) rotate(${rotation})`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] border border-gray-200 dark:border-white/10 transition-all duration-500 ease-out hw-accelerate"
        style={{
          borderRadius,
          transform: `translate(-50%, -50%) rotate(${
            rotation === "0deg" ? "0deg" : `-${rotation}`
          })`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] border border-gray-300 dark:border-white/20 transition-all duration-500 ease-out hw-accelerate"
        style={{
          borderRadius,
          transform: `translate(-50%, -50%) rotate(${
            rotation === "0deg"
              ? "0deg"
              : `${Number.parseFloat(rotation) * 0.5}deg`
          })`,
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <Badge
          variant="outline"
          className="hidden md:inline-flex mb-8 md:mb-12 text-xs md:text-sm font-light border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/80 px-3 md:px-4 py-1.5 md:py-2 items-center"
        >
          <Sparkles className="w-3 h-3 mr-2" />
          TALENTS MANAGEMENT
        </Badge>

        <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none tracking-tighter mb-8 md:mb-12 group cursor-default">
          <span className="block text-gray-900 dark:text-white group-hover:tracking-wide transition-all duration-500">
            SUDUT
          </span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:tracking-wide transition-all duration-500">
            CORP
          </span>
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 dark:text-white/80 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Selamat datang di Sudut Profile Corp, Talent Management yang menjadi
          ruang tumbuh bagi para talenta kreatif dan profesional untuk berkarya,
          berkembang, dan menginspirasi.
        </p>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-500 dark:via-pink-500 dark:to-cyan-500 p-[1px] rounded-full group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <Button className="rounded-full bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black/90 px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl group">
            View Talents
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
