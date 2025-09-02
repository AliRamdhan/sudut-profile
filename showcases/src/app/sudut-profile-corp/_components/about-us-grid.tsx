import React from "react";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";

import { ArrowRightCircleIcon, Users, Mic, Sparkles } from "lucide-react";
import CountUp from "react-countup";
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

  const stats = [
    {
      label: "Komunitas",
      value: 150,
      number: true,
      Icon: Users,
    },
    {
      label: "Talents",
      value: 20,
      number: false,
      Icon: Mic,
    },
    {
      label: "Awards",
      value: 20,
      number: true,
      Icon: Sparkles,
    },
  ];

  return (
    <section
      id="solution"
      className="py-16 md:py-24 bg-background min-h-screen flex items-center text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
          <div className="w-full lg:col-span-3 lg:sticky lg:top-0 lg:self-start lg:py-32">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-x-2 lg:space-y-8">
              {/* Left side - Statistics */}
              {stats.map(({ label, value, Icon, number }) => (
                <div
                  key={label}
                  className="w-full flex justify-center items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full lg:w-64 text-center border p-4 shadow-xl rounded-lg">
                    <div
                      className="mx-auto mb-3 flex w-8 h-8 lg:h-12 lg:w-12 items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/5 backdrop-blur-sm bg-white/70 dark:bg-white/5"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 lg:h-6 lg:w-6" />
                    </div>

                    <div className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                      <CountUp end={value} duration={3} />
                      {number && "+"}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 text-xs sm:text-lg mt-1">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 gap-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {services.map((service, index) => (
              <div key={index}>
                <TransitionLink
                  href="layanan#basic-tracking"
                  className="group cursor-pointer"
                >
                  <div className="relative w-full h-[350px] sm:h-[550px] overflow-hidden bg-gray-100 aspect-square mb-4">
                    <picture>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={1024}
                        height={1024}
                        className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRightCircleIcon className="text-3xl text-gray-800 -rotate-45" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-1">
                      {service.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </TransitionLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
