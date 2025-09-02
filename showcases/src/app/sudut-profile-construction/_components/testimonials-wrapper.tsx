"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Their commitment to quality and attention to detail is unmatched. I've had the pleasure of collaborating with Struktura on multiple projects, and I must say their commitment to quality and attention to detail is unmatched. The level of professionalism and expertise they bring to every construction has truly elevated the success of my developments.",
    name: "Medison Johnson",
    title: "Property Developer",
    image: "/images/construction/construction-testimonials-1.jpg",
  },
  {
    quote:
      "Struktura transformed our vision into reality with exceptional precision and dedication. Their team's expertise and collaborative approach made the entire process seamless and highly effective. We are incredibly pleased with the outcome and look forward to future collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations",
    image: "/images/construction/construction-testimonials-2.jpg",
  },
  {
    quote:
      "Working with Struktura was a fantastic experience. Their professionalism, attention to detail, and commitment to delivering high-quality results truly set them apart. Our project was completed on time and within budget, exceeding all our expectations.",
    name: "Jane Smith",
    title: "Project Manager, Urban Developments",
    image: "/images/construction/construction-testimonials-3.jpg",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Client Voices of Satisfaction</h2>
        <p className="max-w-3xl text-lg mx-auto text-gray-700 mb-16">
          Listen to delighted clients who&apos;ve experienced Struktura&apos;s exceptional craftsmanship and
          professionalism
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Card className="max-w-2xl w-full p-8 text-left bg-gray-50 border-none shadow-none relative">
            <CardContent className="p-0">
              <Quote className="w-10 h-10 text-gray-400 mb-4" />
              <p className="h-36 text-lg text-gray-800 mb-6">{currentTestimonial.quote}</p>
              <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
              <div className="text-gray-600 text-sm">{currentTestimonial.title}</div>
            </CardContent>
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
          <Image
            src={currentTestimonial.image || "/placeholder.svg"}
            alt={`Testimonial from ${currentTestimonial.name}`}
            width={200}
            height={200}
            className="rounded-xl object-cover aspect-square shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
