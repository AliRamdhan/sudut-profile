"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { testimonials } from "../lib/data"

export function Testimonials() {
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created() {
      setLoaded(true)
    },
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16, // Reduced spacing for mobile
    },
    breakpoints: {
      "(min-width: 640px)": {
        // Added sm breakpoint
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 24, // Reduced spacing for better mobile fit
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
    },
  })

  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/sudut-profile-development/testimonial.jpg"
        alt="Testimonial Cover"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="absolute w-full h-full bg-gradient-to-t from-slate-900/95 via-emerald-900/70 to-slate-800/80 mx-auto p-4 sm:p-6 md:p-8">
        {" "}
        {/* Responsive padding */}
        <div className="w-full h-full flex justify-start items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28">
          {" "}
          {/* Responsive horizontal padding */}
          <div className="max-w-7xl w-full">
            {" "}
            {/* Added w-full for better mobile layout */}
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              {" "}
              {/* Responsive bottom margin */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-sans leading-tight">
                {" "}
                {/* Responsive text sizes and margins */}
                Why Our Clients Trust Us
              </h2>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto font-sans leading-relaxed px-4 sm:px-0">
                {" "}
                {/* Responsive text sizes and added mobile padding */}
                Genuine experiences from partners and investors who have achieved growth and success through our
                developments and strategic opportunities.
              </p>
            </div>
            {/* Slider Container */}
            <div className="w-full flex flex-col justify-center items-center space-y-4 sm:space-y-6 md:space-y-8">
              {" "}
              {/* Responsive spacing */}
              <div className="w-full max-w-5xl">
                {" "}
                {/* Added w-full for better mobile layout */}
                <div ref={sliderRef} className="keen-slider">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="keen-slider__slide">
                      <Card className="h-full bg-white/95 backdrop-blur-md border-emerald-500/20 shadow-2xl hover:shadow-3xl hover:border-emerald-400/40 transition-all duration-300 rounded-xl sm:rounded-2xl">
                        {" "}
                        {/* Responsive border radius */}
                        <CardContent className="p-4 sm:p-6 md:p-8">
                          {" "}
                          {/* Responsive padding */}
                          {/* Rating Stars */}
                          <div className="flex gap-1 mb-4 sm:mb-6">
                            {" "}
                            {/* Responsive margin */}
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-emerald-500 text-lg sm:text-xl">
                                ★
                              </span> // Replaced Star icon with text symbol
                            ))}
                          </div>
                          {/* Testimonial Content */}
                          <blockquote className="text-sm sm:text-base md:text-lg text-slate-800 mb-6 sm:mb-8 leading-relaxed font-sans">
                            {" "}
                            {/* Responsive text size */}
                            &apos;{testimonial.content}&apos;
                          </blockquote>
                          {/* Author Info */}
                          <div className="flex items-center gap-3 sm:gap-4">
                            {" "}
                            {/* Responsive gap */}
                            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                              {" "}
                              {/* Responsive avatar size */}
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                              <AvatarFallback className="bg-emerald-600 text-white font-semibold text-sm sm:text-base">
                                {" "}
                                {/* Responsive text size */}
                                {testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-slate-900 font-sans text-sm sm:text-base">
                                {testimonial.author}
                              </div>{" "}
                              {/* Responsive text size */}
                              <div className="text-xs sm:text-sm text-slate-600 font-sans">
                                {" "}
                                {/* Responsive text size */}
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
              <div className="w-full flex justify-center sm:justify-end items-center gap-x-3 sm:gap-x-4">
                {" "}
                {/* Center buttons on mobile, right-align on larger screens */}
                {/* Navigation Buttons */}
                {loaded && instanceRef.current && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm border-emerald-500/30 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200 shadow-xl" // Responsive button size
                      onClick={() => instanceRef.current?.prev()}
                    >
                      <span className="text-lg sm:text-xl">‹</span> {/* Replaced ChevronLeft with text symbol */}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm border-slate-700/30 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-xl" // Responsive button size
                      onClick={() => instanceRef.current?.next()}
                    >
                      <span className="text-lg sm:text-xl">›</span> {/* Replaced ChevronRight with text symbol */}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
