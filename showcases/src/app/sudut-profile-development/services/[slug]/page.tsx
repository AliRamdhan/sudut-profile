"use client";

import { services } from "../../lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import ServiceCard from "../_components/service-card";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-10 pt-8 pb-16">
        <div className="pb-2 mb-4 border-b border-gray-300">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            SERVICES
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {service.title}
        </h1>
        {/* === BLOK GAMBAR YANG DIMODIFIKASI === */}
        <div className="aspect-video md:aspect-[16/8] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            width={1600}
            height={900}
            priority
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* ==================================== */}
      </div>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-10 pb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            About
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">{service.description}</p>
            <p>{service.details.aboutService}</p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="container mx-auto px-6 md:px-10 pb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Who We Serve
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{service.details.targetClients}</p>
          </div>
        </div>
      </section>

      {/* Challenges We Solve Section */}
      <section className="container mx-auto px-6 md:px-10 pb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Challenges We Solve
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{service.details.commonChallenges}</p>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Other Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 2)
                .map((otherService) => (
                  <ServiceCard
                    key={otherService.id}
                    service={otherService}
                    className="h-96"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-24" />
    </div>
  );
}