import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Timeline from "./_components/timeline";
import AboutuS from "./_components/about";
import TransitionLink from "@/components/shared/transition-link";
import Cta from "./_components/cta";

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-gray-600 mb-4">Welcome to DesignCorp</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Crafting digital
            <br />
            experiences with emphasis
            <br />
            on <span className="text-gray-400">innovative design</span>
          </h1>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Selected Works */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold">Our Portfolio</h2>
          <TransitionLink href={"sudut-profile-design-corp/projects"}>
            <Button
              variant="outline"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Best website collections
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Website
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Block of Ui kit collections
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Ui kit
              </p>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Ton&apos;s of mobile mockup
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                Mockups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutuS />

      {/* Business Cards Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Spotify Project */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-5xl font-bold mb-2">
                  WEB DESIGN
                </h3>
                <p className="text-lg text-gray-600">Sleek Web Experience</p>
              </div>
              <Button
                variant="outline"
                className="w-12 h-12 rounded-full bg-transparent transition-all duration-300 hover:scale-125"
              >
                <ArrowUpRight />
              </Button>
            </div>
            <div className="rounded-2xl h-[540px] flex items-center justify-center">
              <Image
                src={"/images/sudut-profile-design-corp/design-2.jpg"}
                alt="Design Portfolio"
                className="w-full h-full object-cover object-center rounded-2xl"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* Figma Project */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
                <p className="text-gray-600">Refined UI/UX Design</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-2xl h-[540px] flex items-center justify-center">
              <Image
                src={"/images/sudut-profile-design-corp/design-2.jpg"}
                alt="Design Portfolio"
                className="w-full h-full object-cover object-center rounded-2xl"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* Wallet Project */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Design</h3>
                <p className="text-gray-600">Minimalist Product Design</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-2xl h-[540px] flex items-center justify-center">
              <Image
                src={"/images/sudut-profile-design-corp/design-2.jpg"}
                alt="Design Portfolio"
                className="w-full h-full object-cover object-center rounded-2xl"
                width={1024}
                height={1024}
              />
            </div>
          </div>

          {/* Wooter Project */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Branding</h3>
                <p className="text-gray-600">Minimalist Brand Identity</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-2xl h-[540px] flex items-center justify-center">
              <Image
                src={"/images/sudut-profile-design-corp/design-2.jpg"}
                alt="Design Portfolio"
                className="w-full h-full object-cover object-center rounded-2xl"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Awards & Recognition */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          <TransitionLink href={"sudut-profile-design-corp/awards"}>
            <Button variant="outline" className="rounded-full bg-transparent transition-all duration-300 hover:scale-105">
              View all awards
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TransitionLink>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Agency of the Year</h3>
              <p className="text-gray-600">Awwwards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Best Digital Agency</p>
              <p className="text-gray-600">2023 • Awwwards</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">Excellence in Design</h3>
              <p className="text-gray-600">CSS Design Awards</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Innovation Award</p>
              <p className="text-gray-600">2023 • CSS Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold">Insights</h2>
          <TransitionLink href={"sudut-profile-design-corp/articles"}>
            <Button variant="outline" className="rounded-full bg-transparent transition-all duration-300 hover:scale-105">
              View all insights
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-2xl"></div>
            <h3 className="font-semibold">
              Mastering the Art of Color Theory in Digital Design
            </h3>
            <p className="text-gray-600 text-sm">
              Understanding how colors work together to create emotional
              responses in digital interfaces.
            </p>
          </article>

          <article className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-2xl"></div>
            <h3 className="font-semibold">
              Designing for User Experience: A Complete Guide
            </h3>
            <p className="text-gray-600 text-sm">
              Key principles and methodologies for creating user-centered
              digital experiences.
            </p>
          </article>

          <article className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-2xl"></div>
            <h3 className="font-semibold">
              The Power of Typography in Brand Identity
            </h3>
            <p className="text-gray-600 text-sm">
              How typography choices can make or break your brand&apos;s visual
              identity.
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  );
};

export default Page;
