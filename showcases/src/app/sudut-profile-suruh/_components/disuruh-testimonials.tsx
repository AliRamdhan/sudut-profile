"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Disuruh benar-benar memudahkan hidup saya! Tinggal pesan dari rumah, belanjaan langsung diantar kurang dari satu jam.",
      name: "Andi Saputra",
      role: "Karyawan Swasta",
      avatar: "/images/shared/avatar.jpg",
    },
    {
      id: 2,
      text: "Saya sering titip kirim dokumen penting ke klien, dan sejauh ini selalu aman dan tepat waktu. Recommended!",
      name: "Rina Kartika",
      role: "Pemilik Usaha",
      avatar: "/images/shared/avatar.jpg",
    },
    {
      id: 3,
      text: "Mitra Disuruh ramah dan profesional. Saya bahkan bisa custom request untuk beli barang dari toko favorit.",
      name: "Fajar Nugroho",
      role: "Desainer Grafis",
      avatar: "/images/shared/avatar.jpg",
    },
    {
      id: 4,
      text: "Harga jelas di awal dan tidak ada biaya tersembunyi. Sangat membantu untuk mengatur budget belanja bulanan.",
      name: "Siti Marlina",
      role: "Ibu Rumah Tangga",
      avatar: "/images/shared/avatar.jpg",
    },
    {
      id: 5,
      text: "Pernah butuh bantuan pindahan mendadak, dan Disuruh langsung dapatkan mitra yang siap dalam 30 menit. Luar biasa!",
      name: "Dimas Pratama",
      role: "Mahasiswa",
      avatar: "/images/shared/avatar.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 24,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 32,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <section id="testimonials" className="h-[70vh] py-16 md:py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-sm font-semibold mb-2">Digital Services</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
          What Our Client Says
        </h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="keen-slider__slide">
                <Card className="px-6 py-12 bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col justify-between">
                  <p className="text-gray-700 text-base mb-6 text-left">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <>
              <ChevronLeft
                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900 z-10 hidden md:block"
                size={40}
                onClick={() => instanceRef.current?.prev()}
              />
              <ChevronRight
                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900 z-10 hidden md:block"
                size={40}
                onClick={() => instanceRef.current?.next()}
              />
            </>
          )}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from(
              { length: instanceRef.current.track.details.slides.length },
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
