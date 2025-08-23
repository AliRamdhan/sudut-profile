"use client";

import { ArrowRight, Calendar, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { works, constructionProject } from "../../lib/data";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { slug: string } }) => {
  const project =
    constructionProject[params.slug as keyof typeof constructionProject];

  if (!project) {
    notFound();
  }
  return (
    <div>
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="w-full mb-16">
          <div className="lg:col-span-2">
            <div className="pb-2 mb-4 border-b border-gray-400">
              <p className="text-base md:text-2xl text-gray-600">
                CONSTRUCTION PROJECT
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {project.title}
            </h1>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">
                  {project.budget.totalValue}
                </span>
              </div>
            </div>
            <div className="aspect-[6/3] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full mb-16">
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Overview
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Scope */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Scope
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.scope}</p>
            </section>

            {/* Specification */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Specification
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.specification}
              </p>
            </section>

            {/* Stakeholders */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Stakeholders
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.stakeholders}
              </p>
            </section>

            {/* Timeline & Milestones */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Timeline & Milestones
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid gap-4">
                  {project.timeline.phases.map((phase, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {phase.phase}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {phase.duration}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {phase.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">
                    <strong>Total Duration:</strong>{" "}
                    {project.timeline.totalDuration} |
                    <strong> Completed:</strong>{" "}
                    {project.timeline.completionDate}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Visual Documentation */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            VISUAL <span className="italic underline">DOCUMENTATION</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt="Construction progress"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[2] || "/placeholder.svg"}
                alt="Construction progress"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[1] || "/placeholder.svg"}
                alt="Construction team"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[3] || "/placeholder.svg"}
                alt="Construction foundation"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Result & Impact */}

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <p className="text-lg text-gray-700 mb-6 italic">
            &quot;{project.testimonial.quote}&quot;
          </p>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={"/images/shared/avatar.jpg"} />
              <AvatarFallback>{project.testimonial.author}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900">
                {project.testimonial.author}
              </p>
              <p className="text-gray-600 text-sm">
                {project.testimonial.position}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What&apos;s next?
          </h2>
          <TransitionLink
            href="/sudut-profile-construction/works"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            View All Works
            <ArrowRight />
          </TransitionLink>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] mb-4">
                <Image
                  src={works[4].image}
                  alt={works[4].label}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {" "}
                    {works[4].label}
                  </h3>
                  <p className="max-w-md text-gray-600 text-sm">
                    {" "}
                    {works[4].description}
                  </p>
                </div>
                <TransitionLink
                  href={`/sudut-profile-construction/works/${works[4].slug}`}
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
                  src={works[3].image}
                  alt={works[3].label}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {" "}
                    {works[3].label}
                  </h3>
                  <p className="max-w-md text-gray-600 text-sm">
                    {" "}
                    {works[3].description}
                  </p>
                </div>
                <TransitionLink
                  href={`/sudut-profile-construction/works/${works[3].slug}`}
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
