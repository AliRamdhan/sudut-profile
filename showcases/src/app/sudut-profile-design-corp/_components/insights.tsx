import React from "react";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Insights = () => {
  return (
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
  );
};

export default Insights;
