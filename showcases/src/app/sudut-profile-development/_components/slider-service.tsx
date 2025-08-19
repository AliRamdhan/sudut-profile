"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
const SliderService = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    initial: 0,
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section
      id="solutions"
      className="w-full py-12 md:py-24 bg-gray-50"
    >
      <div className="w-full px-4 md:px-8 text-center">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-1.jpg"
              alt="Design and Planning Services"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Design and Planning Services
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Our expert design and planning services ensure meticulous
                execution
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-2.jpg"
              alt="Construction and Building"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Construction and Building
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                From groundbreaking to the finishing touches, we bring your
                vision to life with precision.
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-3.jpg"
              alt="Renovation and Remodeling"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Renovation and Remodeling
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Enhance existing spaces or rejuvenate structures with tailored
                solutions
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-1.jpg"
              alt="Design and Planning Services"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Design and Planning Services
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Our expert design and planning services ensure meticulous
                execution
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-2.jpg"
              alt="Construction and Building"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Construction and Building
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                From groundbreaking to the finishing touches, we bring your
                vision to life with precision.
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/construction/construction-solutions-3.jpg"
              alt="Renovation and Remodeling"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Renovation and Remodeling
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Enhance existing spaces or rejuvenate structures with tailored
                solutions
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-start items-center gap-x-4 mt-4">
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className="bg-white border border-gray-300 shadow-xl p-5 rounded-full text-black"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className="bg-white border border-gray-300 shadow-xl p-5 rounded-full text-black"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderService;
