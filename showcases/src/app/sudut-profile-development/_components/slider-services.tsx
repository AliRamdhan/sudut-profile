"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"
import { services } from "../lib/data"

const SliderPortfolio = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
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
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <section id="solutions" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 text-balance">Our Services</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-600 leading-relaxed">
            Comprehensive development solutions tailored to transform your vision into reality, from initial planning to
            final delivery and beyond.
          </p>
        </div>

        {loaded && instanceRef.current && (
          <div className="flex justify-end items-center gap-x-3 mb-8">
            <Button
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              ‹
            </Button>

            <Button
              onClick={() => instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              ›
            </Button>
          </div>
        )}

        <div ref={sliderRef} className="keen-slider mb-12">
          {services.map((service) => (
            <div key={service.id} className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                priority
                className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center text-white text-sm font-medium">
                  Learn more
                  <span className="ml-2">→</span>
                </div>
              </div>
              <TransitionLink href={`/sudut-profile-development/services/${service.slug}`} className="absolute inset-0 z-20">
                <span className="sr-only">Learn more about {service.title}</span>
              </TransitionLink>
            </div>
          ))}

          {services.slice(0, 2).map((service) => (
            <div
              key={`duplicate-${service.id}`}
              className="keen-slider__slide relative group overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                priority
                className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                <div className="flex items-center text-white text-sm font-medium">
                  Learn more
                  <span className="ml-2">→</span>
                </div>
              </div>
              <TransitionLink href={`/sudut-profile-development/services/${service.slug}`} className="absolute inset-0 z-20">
                <span className="sr-only">Learn more about {service.title}</span>
              </TransitionLink>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <TransitionLink href="/sudut-profile-development/services">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="See all services"
            >
              See all
            </Button>
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}

export default SliderPortfolio
