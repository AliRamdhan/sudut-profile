"use client";

import { ArrowRight, Calendar, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { works } from "../../lib/data";

const constructionProject = {
  title: "Skyline Corporate Tower - Modern Office Complex",
  client: "Metropolitan Development Group",
  date: "January 15, 2024",
  services: [
    "Commercial Construction",
    "Project Management",
    "Sustainable Design",
  ],
  heroImage: "/images/construction/skyline-works/skyline-hero.jpg",
  overview:
    "The Skyline Corporate Tower represents a landmark achievement in sustainable commercial construction. This 32-story mixed-use development combines cutting-edge design with environmentally conscious building practices. Located in the heart of downtown, the project features 850,000 square feet of premium office space, retail areas, and underground parking facilities. Our team delivered this complex project on time and 5% under budget while achieving LEED Platinum certification.",
  scope:
    "The project scope encompassed complete design-build services for a 32-story commercial tower including structural engineering, MEP systems, facade installation, interior fit-out, and site development. Key deliverables included 600,000 sq ft of office space, 50,000 sq ft of retail space, 200,000 sq ft of parking, rooftop amenities, and full site infrastructure including utilities, landscaping, and access roads.",
  specification:
    "Construction utilized high-performance concrete with 60% recycled content, energy-efficient curtain wall systems with triple-glazed windows, advanced HVAC systems with smart building controls, LED lighting throughout, and integrated renewable energy systems including rooftop solar arrays. The building meets all local seismic requirements and exceeds energy efficiency standards by 40%.",
  stakeholders:
    "Key project stakeholders included Metropolitan Development Group (client), City Planning Department, Environmental Protection Agency, local community groups, tenant representatives, and our construction consortium of 15 specialized subcontractors. Regular stakeholder meetings ensured alignment on project goals, timeline, and community impact throughout the 28-month construction period.",
  timeline: {
    phases: [
      {
        phase: "Pre-Construction & Permits",
        duration: "4 months",
        status: "Completed",
      },
      {
        phase: "Foundation & Structure",
        duration: "8 months",
        status: "Completed",
      },
      {
        phase: "Envelope & MEP Systems",
        duration: "10 months",
        status: "Completed",
      },
      { phase: "Interior Fit-out", duration: "4 months", status: "Completed" },
      {
        phase: "Final Inspections & Handover",
        duration: "2 months",
        status: "Completed",
      },
    ],
    totalDuration: "28 months",
    completionDate: "May 2024",
  },
  budget: {
    totalValue: "$185M",
    costPerSqFt: "$218",
    savings: "5% under budget",
    contingency: "3% utilized",
  },
  results: {
    occupancyRate: "95%",
    tenantSatisfaction: "4.8/5",
    energyPerformance: "+40% efficiency",
    awards: ["Best Commercial Project 2024", "Sustainability Excellence Award"],
  },
  testimonial: {
    quote:
      "The team delivered exceptional results on our most ambitious project to date. Their commitment to sustainability, safety, and quality craftsmanship resulted in a building that exceeds all our expectations and sets a new standard for commercial development in our city.",
    author: "Sarah Chen",
    position: "CEO, Metropolitan Development Group",
  },
  images: [
    "/images/construction/skyline-works/skyline-process.jpg",
    "/images/construction/skyline-works/skyline-team.jpg",
    "/images/construction/skyline-works/skyline-construction.jpg",
    "/images/construction/skyline-works/skyline-foundation.jpg",
  ],
};

const Page = () => {
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
              {constructionProject.title}
            </h1>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">
                  {constructionProject.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">
                  {constructionProject.client}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">
                  {constructionProject.budget.totalValue}
                </span>
              </div>
            </div>
            <div className="aspect-[6/3] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={constructionProject.heroImage || "/placeholder.svg"}
                alt={constructionProject.title}
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
                {constructionProject.overview}
              </p>
            </section>

            {/* Scope */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Scope
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {constructionProject.scope}
              </p>
            </section>

            {/* Specification */}
            <section>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-400">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Specification
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {constructionProject.specification}
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
                {constructionProject.stakeholders}
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
                  {constructionProject.timeline.phases.map((phase, index) => (
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
                    {constructionProject.timeline.totalDuration} |
                    <strong> Completed:</strong>{" "}
                    {constructionProject.timeline.completionDate}
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
                src={constructionProject.images[0] || "/placeholder.svg"}
                alt="Construction progress"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={constructionProject.images[2] || "/placeholder.svg"}
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
                src={constructionProject.images[1] || "/placeholder.svg"}
                alt="Construction team"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={constructionProject.images[3] || "/placeholder.svg"}
                alt="Construction foundation"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Result & Impact */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Result & Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {constructionProject.results.occupancyRate}
              </p>
              <p className="text-gray-600">Occupancy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">
                {constructionProject.results.tenantSatisfaction}
              </p>
              <p className="text-gray-600">Tenant Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                {constructionProject.results.energyPerformance}
              </p>
              <p className="text-gray-600">Energy Efficiency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">2</p>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <p className="text-lg text-gray-700 mb-6 italic">
            &quot;{constructionProject.testimonial.quote}&quot;
          </p>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={"/images/shared/avatar.jpg"} />
              <AvatarFallback>
                {constructionProject.testimonial.author}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900">
                {constructionProject.testimonial.author}
              </p>
              <p className="text-gray-600 text-sm">
                {constructionProject.testimonial.position}
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
                  src={works[1].image}
                  alt={works[1].label}
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
                    {works[5].label}
                  </h3>
                  <p className="max-w-md text-gray-600 text-sm">
                    {" "}
                    {works[5].description}
                  </p>
                </div>
                <TransitionLink
                  href={`/sudut-profile-construction/works/${works[5].slug}`}
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
