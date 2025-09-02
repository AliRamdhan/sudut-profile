"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    initial: 0,
    drag: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const testimonials = [
    {
      text: `"Our cargo was picked up, stored and all paperwork covered for its transport. It was delivered on time and with friendly staff, you just cannot go wrong."`,
      name: "Terence Wheels",
      title: "CEO / Transport Inc.",
      img: "/images/logistics/templates-logistic1-client1.jpg",
      fallback: "TW",
    },
    {
      text: `"Fast, efficient, and reliable service. Highly recommended for anyone who values professionalism and timely delivery."`,
      name: "Amelia Brooks",
      title: "Logistics Manager / Cargo Ltd.",
      img: "/images/logistics/templates-logistic1-client2.jpg",
      fallback: "AB",
    },
    {
      text: `"They handled our shipment with great care and communication throughout the process. Definitely using again."`,
      name: "Jonathan Lee",
      title: "Director / Global Freight",
      img: "/images/logistics/templates-logistic1-client3.jpg",
      fallback: "JL",
    },
  ];
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            WHAT OUR CUSTOMER SAYS
          </h2>
          <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our
            trusted and reliable car services.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-lg"
            >
              <Avatar className="h-24 w-24 flex-shrink-0">
                <AvatarImage
                  src={t.img}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="aspect-square h-full w-full object-cover"
                />
                <AvatarFallback>{t.fallback}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left space-y-2">
                <p className="text-lg italic text-gray-700">{t.text}</p>
                <p className="font-semibold text-gray-800">
                  {t.name}, {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center lg:justify-start gap-x-4 mt-6">
          <Button
            variant="outline"
            className="p-7 rounded-full"
            aria-label="Prev Button"
            disabled={currentSlide === 0}
            onClick={() => instanceRef.current?.prev()}
          >
            <ArrowLeft className="scale-125" />
          </Button>
          <Button
            variant="outline"
            className="p-7 rounded-full"
            aria-label="Next Button"
            onClick={() => instanceRef.current?.next()}
          >
            <ArrowRight className="scale-125" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
