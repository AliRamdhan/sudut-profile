"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 25000, easing: (t: number) => t };

const AboutUsSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider mb-24">
      {[...Array(8)].map((_, index) => (
        <p
          key={index}
          className="keen-slider__slide text-3xl sm:text-4xl md:text-5xl font-bold text-transparent"
          style={{
            WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
          }}
        >
          <span className="font-bold italic">Sudut Profile</span> DesignCorp
        </p>
      ))}
    </div>
  );
};

export default AboutUsSlider;
