"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { serviceDetails, services, works } from "../../_lib/data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = ({ params }: { params: { slug: string } }) => {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];
  const completedWorks = works.filter(
    (w) => w.status === "Complete" && w.mainService == service.title
  );

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="w-full mb-16">
          <p className="text-gray-600">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight uppercase">
            {service.title}
          </h1>
          <div className="aspect-[4/2] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={service.heroImage}
              alt={service.title}
              width={1024}
              height={1024}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.about}</p>
            </section>

            {/* Our Clients */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b">
                Our Clients
              </h2>
              <p className="text-gray-600 leading-relaxed">{service.clients}</p>
            </section>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 uppercase mb-4">
            Completed <span className="italic underline">works</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {completedWorks.map((work) => (
              <TransitionLink
                key={work.slug}
                href={`/sudut-profile-design-corp/works/${work.slug}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                  <Image
                    src={work.heroImage}
                    width={1024}
                    height={1024}
                    alt="Comes Back service"
                    className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{work.title}</p>
                  <div className="flex gap-2 text-xs text-gray-500">
                    {work.categories.map((category, index) => (
                      <span key={index}>{category}</span>
                    ))}
                  </div>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>

        {/* What&apos;s Next */}
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 uppercase">
            Our Other <span className="italic underline"> services</span>
          </h2>
          <Link
            href="/works"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            View All Works
            <ArrowRight />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services
            .filter((service) => service.slug !== params.slug)
            .slice(0, 2)
            .map((service) => (
              <div className="group" key={service.slug}>
                <div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                  <div className="aspect-[4/3] mb-4">
                    <Image
                      src={service.heroImage}
                      alt="Desktop interface"
                      width={1024}
                      height={1024}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{service.about}</p>
                    </div>
                    <TransitionLink
                      href={`/sudut-profile-design-corp/services/${service.slug}`}
                      className="inline-flex items-center text-sm text-gray-600 transition-all duration-500 delay-300 group-hover:text-gray-800 transition-colors group-hover:scale-110"
                    >
                      <Button
                        variant="outline"
                        className="rounded-full px-6 py-2 bg-transparent"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TransitionLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
