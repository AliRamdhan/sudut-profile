"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "This service transformed our approach to client engagement! The results exceeded our expectations and the team couldn't be happier with the outcome.",
    author: "Alex Rodriguez",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    content:
      "An indispensable tool for our daily operations. It streamlined our workflow and increased productivity by 40%. Highly recommend to any growing business.",
    author: "Jamie Thompson",
    role: "Operations Manager",
    company: "InnovateCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Innovative and user-friendly, a game changer! The interface is intuitive and the support team is incredibly responsive. Best investment we've made.",
    author: "Morgan Lee",
    role: "CEO",
    company: "StartupHub",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Outstanding results from day one. The platform helped us scale our operations efficiently while maintaining quality. Couldn't ask for more.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "GrowthLabs",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
];

export function Testimonials() {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
    },
  });

  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/sudut-profile-development/testimonial.jpg"
        alt="Testimonial Cover"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-gray-800/80 to-transparent mx-auto p-8">
        <div className="w-full h-full flex justify-start items-center px-20">
          <div className="max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-sans">
                Why Our Clients Trust Us
              </h2>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto font-sans">
                Genuine experiences from partners and investors who have
                achieved growth and success through our developments and
                strategic opportunities.
              </p>
            </div>

            {/* Slider Container */}
            <div className="w-full flex flex-col justify-center items-center space-y-4">
              <div className="max-w-5xl">
                <div ref={sliderRef} className="keen-slider">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="keen-slider__slide">
                      <Card className="h-full bg-white/50 backdrop-blur-md border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                          {/* Rating Stars */}
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-600 text-yellow-600"
                              />
                            ))}
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-lg text-foreground mb-8 leading-relaxed font-sans">
                            &apos;{testimonial.content}&apos;
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.author}
                              />
                              <AvatarFallback className="bg-black text-white font-semibold">
                                {testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-foreground font-sans">
                                {testimonial.author}
                              </div>
                              <div className="text-sm text-gray-800 font-sans">
                                {testimonial.role} at {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-end items-center gap-x-4">
                {/* Navigation Buttons */}
                {loaded && instanceRef.current && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-lg"
                      onClick={() => instanceRef.current?.prev()}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-lg"
                      onClick={() => instanceRef.current?.next()}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
