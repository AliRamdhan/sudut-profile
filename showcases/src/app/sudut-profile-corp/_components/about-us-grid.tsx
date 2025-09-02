import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  const services = [
    {
      title: "Talent Discovery & Development",
      description:
        "Sudut Corp berfokus pada menemukan bakat-bakat baru dan mendukung mereka melalui program pengembangan berkelanjutan.",
      image: "/images/sudut-profile-corp/talent-management.jpg",
      alt: "Talent Discovery & Development",
    },
    {
      title: "Event & Performance Management",
      description:
        "Kami membantu mengatur penampilan, pertunjukan, serta kolaborasi agar setiap talent dapat tampil maksimal di setiap kesempatan.",
      image: "/images/sudut-profile-corp/event-management.jpg",
      alt: "Event & Performance Management",
    },
    {
      title: "Brand Collaboration",
      description:
        "Menghubungkan talent dengan brand untuk berbagai bentuk kerjasama komersial seperti endorsement, campaign, dan promosi.",
      image: "/images/sudut-profile-corp/brand-collaboration.jpg",
      alt: "Brand Collaboration",
    },
    {
      title: "Professional Support",
      description:
        "Sudut Corp menyediakan dukungan penuh mulai dari manajemen kontrak, legalitas, hingga strategi karier jangka panjang.",
      image: "/images/sudut-profile-corp/professional-support.jpg",
      alt: "Professional Support",
    },
    {
      title: "Digital Presence & Content Strategy",
      description:
        "Membantu talent membangun personal branding yang kuat melalui strategi konten, social media management, dan optimasi digital presence.",
      image: "/images/sudut-profile-corp/digital-strategy.jpg",
      alt: "Digital Presence & Content Strategy",
    },
  ];

  return (
    <section
      id="solution"
      className="py-16 md:py-24 bg-background min-h-screen flex items-center text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="lg:sticky lg:top-0 lg:self-start py-48">
          {/* Left side - Statistics */}
          <div className="relative">
            {/* Background Map Illustration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-8 top-1/2 -translate-y-1/4 w-96 h-64">
                {/* Indonesia Map Silhouette with dots */}
                <svg
                  viewBox="0 0 400 250"
                  className="w-full h-full fill-slate-600"
                >
                  {/* Simplified Indonesia map shape */}
                  <path d="M50 120 L80 100 L120 110 L160 95 L200 105 L240 90 L280 100 L320 85 L350 95 L380 110 L370 140 L340 150 L300 145 L260 155 L220 150 L180 160 L140 155 L100 165 L60 150 Z" />
                  <path d="M90 180 L130 170 L170 175 L210 165 L250 170 L290 160 L330 165 L360 175 L350 195 L320 200 L280 195 L240 200 L200 195 L160 200 L120 195 L80 200 Z" />

                  {/* Scattered dots across the map */}
                  <circle cx="100" cy="125" r="3" className="fill-slate-500" />
                  <circle cx="140" cy="115" r="2" className="fill-slate-500" />
                  <circle cx="180" cy="130" r="3" className="fill-slate-500" />
                  <circle cx="220" cy="120" r="2" className="fill-slate-500" />
                  <circle cx="260" cy="135" r="3" className="fill-slate-500" />
                  <circle cx="300" cy="125" r="2" className="fill-slate-500" />
                  <circle cx="340" cy="140" r="3" className="fill-slate-500" />
                  <circle cx="120" cy="185" r="2" className="fill-slate-500" />
                  <circle cx="160" cy="180" r="3" className="fill-slate-500" />
                  <circle cx="200" cy="175" r="2" className="fill-slate-500" />
                  <circle cx="240" cy="185" r="3" className="fill-slate-500" />
                  <circle cx="280" cy="175" r="2" className="fill-slate-500" />
                  <circle cx="320" cy="180" r="3" className="fill-slate-500" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold mb-2">150+</div>
              <div className="text-slate-700 text-sm">Komunitas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold mb-2">1.5K</div>
              <div className="text-slate-700 text-sm">Komika</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold mb-2">500+</div>
              <div className="text-slate-700 text-sm">Yang Lucu</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 p-6 flex flex-col items-start text-left text-black transition-all duration-300 hover:scale-105"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={100}
                height={100}
                className="rounded-lg mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
