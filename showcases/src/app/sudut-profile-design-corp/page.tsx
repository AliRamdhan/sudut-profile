import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Timeline from "./_components/timeline";
import Aboutus from "./_components/about";
import TransitionLink from "@/components/shared/transition-link";
import Cta from "./_components/cta";
import { services, works } from "./_lib/data";

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-bold italic">Sudut Profile</span>{" "}
            DesignCorp
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
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
          <h2 className="text-3xl font-semibold">
            Our <span className="italic underline"> Works</span>
          </h2>
          <TransitionLink href={"sudut-profile-design-corp/works"}>
            <Button
              variant="outline"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              View all works
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {works.slice(0, 4).map((work) => (
            <div
              key={work.slug}
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-[400px] group"
              style={{
                backgroundImage: `url(${work.heroImage})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  {work.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  {work.mainService}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <Aboutus />

      {/* Business Cards Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Web Design Business */}
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-gray-50 rounded-3xl p-8 group-hover:shadow-xl"
            >
              <TransitionLink
                href={`/sudut-profile-design-corp/services/${service.slug}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-5xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="max-w-3xl text-lg text-gray-600">
                      {service.about}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:bg-black group-hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="rounded-2xl h-[640px] flex items-center justify-center">
                  <Image
                    src={service.heroImage}
                    alt="Design Portfolio"
                    className="w-full h-full object-cover object-center rounded-2xl"
                    width={1024}
                    height={1024}
                  />
                </div>
              </TransitionLink>
            </div>
          ))}

          {/* UI / UX Business */}
          {/* <div className="group bg-gray-50 rounded-3xl p-8 group-hover:shadow-xl">
            <TransitionLink href={`/sudut-profile-design-corp/services/ui-ux`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
                  <p className="text-gray-600">Refined UI/UX Design</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:bg-black group-hover:text-white"
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
            </TransitionLink>
          </div> */}

          {/* Product Design Business */}
          {/* <div className="group bg-gray-50 rounded-3xl p-8 group-hover:shadow-xl">
            <TransitionLink
              href={`/sudut-profile-design-corp/services/product-design`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product Design</h3>
                  <p className="text-gray-600">Minimalist Product Design</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:bg-black group-hover:text-white"
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
            </TransitionLink>
          </div> */}

          {/* Branding Business */}
          {/* <div className="group bg-gray-50 rounded-3xl p-8 group-hover:shadow-xl">
            <TransitionLink
              href={`/sudut-profile-design-corp/services/branding`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Branding</h3>
                  <p className="text-gray-600">Minimalist Brand Identity</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:bg-black group-hover:text-white"
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
            </TransitionLink>
          </div> */}
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Insights */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-semibold">
            Our <span className="italic underline"> Insights</span>
          </h2>
          <TransitionLink href={"sudut-profile-design-corp/articles"}>
            <Button
              variant="outline"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              View all insights
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="space-y-4 p-2.5 pb-8 border rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <TransitionLink
              href={`sudut-profile-design-corp/articles/kuara-resort-launch`}
            >
              <div className="w-full h-72 rounded-2xl mb-4">
                <Image
                  src={"/images/sudut-profile-design-corp/design-2.jpg"}
                  alt="Design Portfolio"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="px-2 space-y-2">
                <h3 className="font-semibold">
                  Mastering the Art of Color Theory in Digital Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Understanding how colors work together to create emotional
                  responses in digital interfaces.
                </p>
              </div>
            </TransitionLink>
          </article>
          <article className="space-y-4 p-2.5 pb-8 border rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <TransitionLink
              href={`sudut-profile-design-corp/articles/kuara-resort-launch`}
            >
              <div className="w-full h-72 rounded-2xl mb-4">
                <Image
                  src={"/images/sudut-profile-design-corp/design-2.jpg"}
                  alt="Design Portfolio"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="px-2 space-y-2">
                <h3 className="font-semibold">
                  Designing for User Experience: A Complete Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Key principles and methodologies for creating user-centered
                  digital experiences.
                </p>
              </div>
            </TransitionLink>
          </article>
          <article className="space-y-4 p-2.5 pb-8 border rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <TransitionLink
              href={`sudut-profile-design-corp/articles/kuara-resort-launch`}
            >
              <div className="w-full h-72 rounded-2xl mb-4">
                <Image
                  src={"/images/sudut-profile-design-corp/design-2.jpg"}
                  alt="Design Portfolio"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="px-2 space-y-2">
                <h3 className="font-semibold">
                  The Power of Typography in Brand Identity
                </h3>
                <p className="text-gray-600 text-sm">
                  How typography choices can make or break your brand&apos;s
                  visual identity.
                </p>
              </div>
            </TransitionLink>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />
    </div>
  );
};

export default Page;
