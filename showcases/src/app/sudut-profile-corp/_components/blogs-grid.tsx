import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TransitionLink from "@/components/shared/transition-link";
import Image from "next/image";
import { blogs } from "../_lib/data";

const Blogs = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div className="space-y-2">
          <Badge
            variant={"outline"}
            className="text-sm uppercase tracking-wide shadow-xl"
          >
            DIGITAL DOWNLOAD & Event&apos;s
          </Badge>
          <h1 className="max-w-2xl text-4xl lg:text-7xl font-bold text-gray-900 uppercase tracking-tighter">
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
              src={blogs[0].imageUrl}
              alt={blogs[0].title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-blue-600">{blogs[0].author.name}</span>
              <span className="text-blue-600">{blogs[0].author.role}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 leading-tight">
              {blogs[0].excerpt}
            </h2>
            <TransitionLink
              href={`/sudut-profile-corp/blogs/${blogs[0].slug}`}
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
              <span className="text-blue-600">{blogs[3].author.name}</span>
              <span className="text-blue-600">{blogs[3].author.role}</span>
            </div>
            <h3 className="text-xl font-normal text-gray-800 leading-tight">
              {blogs[3].excerpt}
            </h3>
            <TransitionLink
              href={`/sudut-profile-corp/blogs/${blogs[3].slug}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Read Article →
            </TransitionLink>
          </div>
        </article>

        <article className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-blue-600">{blogs[5].author.name}</span>
              <span className="text-blue-600">{blogs[5].author.role}</span>
            </div>
            <h3 className="text-xl font-normal text-gray-800 leading-tight">
              {blogs[5].excerpt}
            </h3>
            <TransitionLink
              href={`/sudut-profile-corp/blogs/${blogs[5].slug}`}
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
