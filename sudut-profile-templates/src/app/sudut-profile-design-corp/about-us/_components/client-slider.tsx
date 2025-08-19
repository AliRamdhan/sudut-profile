"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t: number) => t };

const companies = [
  "dojo",
  "rackspace",
  "pipefy",
  "teamwork.",
  "django",
  "portal",
  "spring",
  "portal",
];

const ClientSlider = () => {
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
          perView: 5,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
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
      {[...companies, ...companies].map((company, index) => (
        <div
          key={index}
          className="keen-slider__slide text-2xl font-medium text-gray-400"
        >
          {company}
        </div>
      ))}
    </div>
  );
};

export default ClientSlider;
