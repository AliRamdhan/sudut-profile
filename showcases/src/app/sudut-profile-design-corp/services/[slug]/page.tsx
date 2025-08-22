"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";

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

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="w-full mb-16">
          <p className="text-gray-600 mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {project.title}
          </h1>
          <div className="aspect-[4/2] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
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
              <p className="text-gray-600 leading-relaxed">{project.about}</p>
            </section>

            {/* Our Clients */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b">
                Our Clients
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.clients}</p>
            </section>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 uppercase mb-4">
            Completed <span className="italic underline">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <TransitionLink
              href={`works/spotify-redesign`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <Image
                  src="/images/sudut-profile-design-corp/placeholder-v74tb.png"
                  width={1024}
                  height={1024}
                  alt="Comes Back project"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">COMES BACK</h3>
                <p className="text-sm text-gray-600 mb-2">2022</p>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Automotive</span>
                  <span>Lifestyle</span>
                </div>
              </div>
            </TransitionLink>

            <TransitionLink
              href={`works/spotify-redesign`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <Image
                  src="/images/sudut-profile-design-corp/close-faces-portrait.png"
                  width={1024}
                  height={1024}
                  alt="File Not Found project"
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">FILE NOT FOUND</h3>
                <p className="text-sm text-gray-600 mb-2">2019</p>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Feature</span>
                  <span>Lifestyle</span>
                </div>
              </div>
            </TransitionLink>

            <TransitionLink
              href={`works/spotify-redesign`}
              className="group cursor-pointer col-span-2"
            >
              <div className="relative">
                <div className="aspect-[4/2] bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-1">FILE NOT FOUND</h3>
                <p className="text-sm text-gray-600 mb-2">2019</p>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Feature</span>
                  <span>Lifestyle</span>
                </div>
              </div>
            </TransitionLink>
          </div>
        </div>

        {/* What&apos;s Next */}
      </section>

      <section className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 uppercase">
            Our Other <span className="italic underline"> Projects</span>
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
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] mb-4">
                <Image
                  src={
                    "/images/sudut-profile-design-corp/close-faces-portrait.png"
                  }
                  alt="Desktop interface"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Payrolle</h3>
                  <p className="text-gray-600 text-sm">Web Design</p>
                </div>
                <TransitionLink
                  href="/sudut-profile-design-corp/works/kuara-resort-launch"
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
            <div className="bg-gray-50 rounded-2xl p-6 group-hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] mb-4">
                <Image
                  src={
                    "/images/sudut-profile-design-corp/athletic-portrait.png"
                  }
                  alt="Desktop interface"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Payrolle</h3>
                  <p className="text-gray-600 text-sm">Web Design</p>
                </div>
                <TransitionLink
                  href="/sudut-profile-design-corp/works/kuara-resort-launch"
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
