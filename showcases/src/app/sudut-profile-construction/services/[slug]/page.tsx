"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import { works } from "../../lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const portfolioProjects = {
  "spotify-redesign": {
    title: "Unleash Your Potential and Push Beyond Limits",
    client: "Spotify",
    date: "May 3, 2023",
    services: ["Website Design", "Mobile Design"],
    heroImage: "/images/sudut-profile-design-corp/sleek-black-remote.png",
    about:
      "At Spotify, we believe in making themes fun and convenient. That's why we've developed a cutting-edge mobile app and dashboard that allows you to effortlessly track and manage your team activities. Whether you're a team leader looking to boost productivity or a team member wanting to stay connected, our platform provides the tools you need. Spotify interface that empowers you to tap your workload, set personal goals, and monitor your achievements. Whether you prefer working from the office or remotely, our solution adapts to your work environment, delivers insights into your performance, advance content, capture business, and much more.",
    clients:
      "Our passionate clients, who are passionate about maintaining an active lifestyle, inspired us to create Spotify. They sought an all-in-one solution that could seamlessly monitor their progress, provide valuable insights, and help them achieve their fitness goals. By listening to their feedback, we've delivered.",
    challenge:
      "To ensure a holistic experience, Spotify also offers a personalized dashboard accessible from any device. This dashboard gives you an overview of your team's performance, tracks your progress, and identifies areas for improvement. You can view connect with fellow team enthusiasts, share your accomplishments, and embark on challenges together.",
    results: {
      totalRaised: "$22.8M",
      conversionRate: "+24%",
      dailyUsers: "~400K",
    },
    testimonial: {
      quote:
        "Working with Ivan was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked stunning but also enhanced the overall usability of our product.",
      author: "Jacob McCurry",
      position: "CEO of rackspace",
    },
    images: [
      "/images/sudut-profile-design-corp/close-faces-portrait.png",
      "/images/sudut-profile-design-corp/design-1.jpg",
      "/images/sudut-profile-design-corp/athletic-portrait.png",
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = ({ params }: { params: { slug: string } }) => {
  const project =
    portfolioProjects["spotify-redesign" as keyof typeof portfolioProjects];

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
                <TransitionLink href={`portfolios/${works[0].slug}`}>
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
                <TransitionLink href={`portfolios/${works[1].slug}`}>
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
            What&apos;s next?
          </h2>
          <Link
            href="/sudut-profile-construction/works"
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
