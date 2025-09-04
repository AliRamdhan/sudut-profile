"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
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
      <div className="absolute w-full h-full bg-gradient-to-t from-slate-900/95 via-emerald-900/70 to-slate-800/80 mx-auto p-8">
        <div className="w-full h-full flex justify-start items-center px-8 md:px-16 lg:px-28">
          <div className="max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-sans">
                Why Our Clients Trust Us
                </h2>
              <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-sans leading-relaxed">
                Genuine experiences from partners and investors who have achieved growth and success through our
                developments and strategic opportunities.
              </p>
            </div>

            {/* Slider Container */}
            <div className="w-full flex flex-col justify-center items-center space-y-8">
              <div className="max-w-5xl">
                <div ref={sliderRef} className="keen-slider">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="keen-slider__slide">
                      <Card className="h-full bg-white/95 backdrop-blur-md border-emerald-500/20 shadow-2xl hover:shadow-3xl hover:border-emerald-400/40 transition-all duration-300 rounded-2xl">
                        <CardContent className="p-8">
                          {/* Rating Stars */}
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-6 h-6 fill-emerald-500 text-emerald-500" />
                            ))}
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-lg text-slate-800 mb-8 leading-relaxed font-sans">
                            &apos;{testimonial.content}&apos;
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                              <AvatarFallback className="bg-emerald-600 text-white font-semibold">
                                {testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-slate-900 font-sans">{testimonial.author}</div>
                              <div className="text-sm text-slate-600 font-sans">
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
                      className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border-emerald-500/30 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200 shadow-xl"
                      onClick={() => instanceRef.current?.prev()}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border-slate-700/30 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-xl"
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
  )
}
