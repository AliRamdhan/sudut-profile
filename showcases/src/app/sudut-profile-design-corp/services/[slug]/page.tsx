"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const Page = ({ params }: { params: { slug: string } }) => {
  const project =
    portfolioProjects[params.slug as keyof typeof portfolioProjects];

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="w-full mb-16">
          <p className="text-gray-600 mb-4">Portfolio</p>
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
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
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
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {project.results.totalRaised}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Total raised in funding so far
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {project.results.conversionRate}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Conversion rate with new design
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {project.results.dailyUsers}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Daily users engaging monthly
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt="Mobile interface"
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={project.images[1] || "/placeholder.svg"}
                alt="Desktop interface"
                width={1024}
                height={1024}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-[2/1] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={project.images[2] || "/placeholder.svg"}
              alt="Dashboard analytics"
              width={1024}
              height={1024}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <blockquote className="text-lg text-gray-700 mb-6 italic">
            &quot;{project.testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
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
