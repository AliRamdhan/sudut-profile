"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { works, solutionsDetail, solutions } from "../../lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = ({ params }: { params: { slug: string } }) => {
  const project = solutionsDetail[params.slug as keyof typeof solutionsDetail];

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
              <p className="text-base md:text-2xl text-gray-600">SERVICES</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {project.title}
            </h1>
            <div className="aspect-[6/3] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="w-full mb-16">
          <div className="space-y-12">
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
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            WORKS <span className="italic underline">DONE</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={works[0].image}
                alt={works[0].label}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {works[0].label}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {works[0].description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                  <div>Location</div>
                  <div className="font-medium text-gray-900">
                    {works[0].location}
                  </div>
                  <div>Duration</div>
                  <div className="font-medium text-gray-900">
                    {works[0].duration}
                  </div>
                  <div>Total Budget</div>
                  <div className="font-medium text-gray-900">
                    {works[0].price}
                  </div>
                </div>
                <TransitionLink href={`/sudut-profile-construction/works/${works[0].slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                  >
                    Read more
                  </Button>
                </TransitionLink>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={works[1].image}
                alt={works[1].label}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {works[1].label}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {works[1].description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                  <div>Location</div>
                  <div className="font-medium text-gray-900">
                    {works[1].location}
                  </div>
                  <div>Duration</div>
                  <div className="font-medium text-gray-900">
                    {works[1].duration}
                  </div>
                  <div>Total Budget</div>
                  <div className="font-medium text-gray-900">
                    {works[1].price}
                  </div>
                </div>
                <TransitionLink href={`/sudut-profile-construction/works/${works[1].slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                  >
                    Read more
                  </Button>
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-[3/1] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={works[2].image}
                alt={works[2].label}
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {works[2].label}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {works[2].description}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                <div>Location</div>
                <div className="font-medium text-gray-900">
                  {works[2].location}
                </div>
                <div>Duration</div>
                <div className="font-medium text-gray-900">
                  {works[2].duration}
                </div>
                <div>Total Budget</div>
                <div className="font-medium text-gray-900">
                  {works[2].price}
                </div>
              </div>
              <TransitionLink
                href={`/sudut-profile-construction/works/${works[2].slug}`}
              >
                <Button
                  variant="outline"
                  className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  Read more
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 border">
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

        {/* What&apos;s Next */}
      </section>

      <section className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What&apos;s other solution?
          </h2>
          <Link
            href="/sudut-profile-construction/services"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            View all solutions
            <ArrowRight />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src={solutions[0].image}
              alt={solutions[0].label}
              width={600}
              height={400}
              className="w-full h-64 lg:h-[56vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {solutions[0].label}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {solutions[0].description}
              </p>
              <TransitionLink
                href={`services/${solutions[0].slug}`}
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <Image
              src={solutions[2].image}
              alt={solutions[2].label}
              width={600}
              height={400}
              className="w-full h-64 lg:h-[56vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {solutions[1].label}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {solutions[1].description}
              </p>
              <TransitionLink
                href={`services/${solutions[1].slug}`}
                className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
