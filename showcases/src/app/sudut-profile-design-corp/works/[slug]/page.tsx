"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import DocumentationSlider from "./_components/documentation_slider";
import { works, worksDetail } from "../../_lib/data";

const Page = ({ params }: { params: { slug: string } }) => {
  const project = worksDetail[params.slug as keyof typeof worksDetail];

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="text-gray-600 mb-4">WORKS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {project.title}
            </h1>
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:sticky lg:top-0 lg:self-start space-y-8 py-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Date</h3>
              <p className="text-gray-600">{project.date}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Client Name</h3>
              <p className="text-gray-600">{project.client}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <div className="space-y-2">
                {project.services.map((service, index) => (
                  <p key={index} className="text-gray-600">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full">
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{project.about}</p>
            </section>

            {/* Our Clients */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Clients
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.clients}</p>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
              <div className="grid grid-cols-3 gap-8">
                {Object.entries(project.results).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold text-gray-900 mb-2`}>
                      {value}
                    </div>
                    <p className="text-gray-600 text-base">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16"></div>

        {/* Visual Showcase */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WORKS <span className="italic underline">DOCUMENTATION</span>
          </h2>
          <DocumentationSlider project={project} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Other Project&apos;s?
          </h2>
          <Link
            href="/sudut-profile-design-corp/works"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            View All Works
            <ArrowRight />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] mb-4">
                <Image
                  src={works[2].heroImage}
                  alt="Desktop interface"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {works[2].title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {works[2].mainService}
                  </p>
                </div>
                <TransitionLink
                  href={`/sudut-profile-design-corp/works/${works[2].slug}`}
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
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] mb-4">
                <Image
                  src={works[3].heroImage}
                  alt="Desktop interface"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {works[3].title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {works[3].mainService}
                  </p>
                </div>
                <TransitionLink
                  href={`/sudut-profile-design-corp/works/${works[3].slug}`}
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
        </div>
      </section>
    </div>
  );
};

export default Page;
