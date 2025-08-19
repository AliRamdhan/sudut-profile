"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const animation = { duration: 10000, easing: (t: number) => t };

const jasaDisuruhTop = [
  {
    category: "Belanja",
    title: "Belanja Titipan",
    image: "/images/sudut-profile-suruh/service-document.jpg",
    description:
      "Titip belanja dari pasar, supermarket, atau toko favorit Anda, dan kami antar langsung ke rumah.",
    link: "#",
  },
  {
    category: "Pengiriman",
    title: "Kirim Dokumen",
    image: "/images/sudut-profile-suruh/services-shopping.jpg",
    description:
      "Kirim dokumen penting dengan cepat dan aman ke tujuan, tanpa repot keluar rumah.",
    link: "#",
  },
  {
    category: "Antar Pesanan",
    title: "Antar Makanan",
    image: "/images/sudut-profile-suruh/service-delivery.jpg",
    description:
      "Pesan makanan dari restoran favorit Anda dan biarkan kami mengantarkannya hangat ke pintu rumah.",
    link: "#",
  },
  {
    category: "Jasa Harian",
    title: "Bantu Angkut Barang",
    image: "/images/sudut-profile-suruh/services-send.jpg",
    description:
      "Butuh bantuan angkut barang pindahan atau belanja besar? Mitra kami siap membantu.",
    link: "#",
  },
  {
    category: "Custom Request",
    title: "Jasa Khusus",
    image: "/images/sudut-profile-suruh/services-request.jpg",
    description:
      "Punya permintaan unik? Tulis kebutuhan Anda dan kami akan carikan mitra yang tepat.",
    link: "#",
  },
];

const Services = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
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
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Top Jasa Disuruh
          </h2>
          <p className="max-w-4xl text-lg md:text-xl text-gray-300 mb-12">
            Dari belanja titipan, kirim dokumen, hingga bantu antar pesanan —
            Disuruh siap membantu kebutuhan harian Anda dengan cepat, aman, dan
            tanpa ribet. Temukan layanan favorit yang paling sering digunakan
            oleh pelanggan kami.
          </p>
        </div>
        <div ref={sliderRef} className="keen-slider flex pb-4">
          {jasaDisuruhTop.map((service) => (
            <div key={service.title} className="keen-slider__slide">
              <div className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-fit transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <p className="text-white text-center px-4 truncate">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
