"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DocumentationSlider({ project }: { project: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div>
      <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
        {project.images?.map((img: string, index: number) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={img || "/placeholder.svg"}
                alt={`Project image ${index + 1}`}
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:justify-end gap-x-4 mt-6">
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
  );
}
