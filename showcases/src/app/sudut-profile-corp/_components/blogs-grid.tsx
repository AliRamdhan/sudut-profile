import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TransitionLink from "@/components/shared/transition-link";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Badge
            variant={"outline"}
            className="text-sm uppercase tracking-wide shadow-xl"
          >
            DIGITAL DOWNLOAD & Event&apos;s
          </Badge>
          <h1 className="max-w-2xl text-7xl font-bold text-gray-900 uppercase tracking-tighter">
            Info terbaru Sudut Corp
          </h1>
        </div>
        <Button
          variant="outline"
          className="text-gray-500 border-gray-500 hover:bg-gray-50 bg-transparent"
        >
          LIHAT BLOG LAINNYA →
        </Button>
      </div>

      <article className="my-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/logistics/templates-logistic1-client2.jpg"
              alt="Aerial view of Kuara Resort in Southern Lombok"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm">
              <time className="text-blue-600">June 24, 2025</time>
              <span className="text-blue-600">Press Release</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 leading-tight">
              Mirah Investment & Development Achieves Key Milestone with the
              Soft Launch of Kuara Resort in Southern Lombok.
            </h2>
            <TransitionLink
              href="/article/kuara-resort-launch"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Read Article →
            </TransitionLink>
          </div>
        </div>
      </article>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm">
              <time className="text-blue-600">May 23, 2025</time>
              <span className="text-blue-600">Press Release</span>
            </div>
            <h3 className="text-xl font-normal text-gray-800 leading-tight">
              <em className="font-serif italic">
                Introducing Klara Ocean Place:
              </em>{" "}
              Batu Belig&apos;s Newest Serviced Apartment Landmark
            </h3>
            <TransitionLink
              href="/article/klara-ocean-place-full"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Read Article →
            </TransitionLink>
          </div>
        </article>

        <article className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm">
              <time className="text-blue-600">May 23, 2025</time>
              <span className="text-blue-600">Press Release</span>
            </div>
            <h3 className="text-xl font-normal text-gray-800 leading-tight">
              <em className="font-serif italic">
                Introducing Klara Ocean Place:
              </em>{" "}
              Batu Belig&apos;s Newest Serviced Apartment Landmark
            </h3>
            <TransitionLink
              href="/article/klara-ocean-place-full"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Read Article →
            </TransitionLink>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
