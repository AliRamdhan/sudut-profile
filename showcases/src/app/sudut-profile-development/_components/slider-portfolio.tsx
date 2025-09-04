"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import TransitionLink from "@/components/shared/transition-link"
import { Button } from "@/components/ui/button"

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 text-balance">
            Upcoming Developments
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-600 leading-relaxed">
            At Sudut Profile, we offer a full range of building services that are painstakingly customized to meet your
            particular project needs, guaranteeing success at every stage.
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
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              onClick={() => instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-slate-200 bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        <div ref={sliderRef} className="keen-slider mb-12">
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-1.jpg"
              alt="Design and Planning Services"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">
                Design and Planning Services
              </h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                Our expert design and planning services ensure meticulous execution
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-2.jpg"
              alt="Construction and Building"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">Construction and Building</h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                From groundbreaking to the finishing touches, we bring your vision to life with precision.
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-3.jpg"
              alt="Renovation and Remodeling"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">Renovation and Remodeling</h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                Enhance existing spaces or rejuvenate structures with tailored solutions
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-1.jpg"
              alt="Design and Planning Services"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">
                Design and Planning Services
              </h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                Our expert design and planning services ensure meticulous execution
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-2.jpg"
              alt="Construction and Building"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">Construction and Building</h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                From groundbreaking to the finishing touches, we bring your vision to life with precision.
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
          <div className="keen-slider__slide relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/images/construction/construction-solutions-3.jpg"
              alt="Renovation and Remodeling"
              width={600}
              height={400}
              className="w-full h-64 lg:h-[64vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">Renovation and Remodeling</h3>
              <p className="text-slate-200 text-sm md:text-base mb-6 leading-relaxed">
                Enhance existing spaces or rejuvenate structures with tailored solutions
              </p>
              <TransitionLink
                href="#"
                className="flex items-center text-white hover:text-emerald-300 text-sm md:text-base font-medium transition-colors duration-300 group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
              </TransitionLink>
            </div>
          </div>
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
