"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const animation = { duration: 10000, easing: (t: number) => t };

export default function Vehicles() {
  const vehicles = [
    { src: "/images/logistics/templates-logistic1-truck1.jpg" },
    { src: "/images/logistics/templates-logistic1-truck2.jpg" },
    { src: "/images/logistics/templates-logistic1-truck3.jpg" },
    { src: "/images/logistics/templates-logistic1-truck4.jpg" },
    { src: "/images/logistics/templates-logistic1-truck5.jpg" },
    { src: "/images/logistics/templates-logistic1-truck6.jpg" },
  ];
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 4,
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
    <section
      ref={sliderRef}
      id="vehicles"
      className="keen-slider py-12 md:py-20"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left py-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            VEHICHLES
          </h2>
          <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our own fleet of modern, well-maintained trucks—ready to
            deliver your goods safely, on time, and with the highest
            professional standards.
          </p>
        </div>
        <div className="flex pb-4">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="keen-slider__slide">
              <Image
                src={vehicle.src}
                alt="White semi-truck on a sunny road"
                width={400}
                height={250}
                className="object-cover flex-shrink-0 w-full h-[350px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
