/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import TransitionLink from "@/components/shared/transition-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogDetail } from "../../_lib/data";

const recommendedPosts = [
  {
    title:
      "The Power of Typography in Visual Design: Enhancing Communication and Impact",
    date: "May 5, 2023",
    image: "/images/sudut-profile-design-corp/design-1.jpg",
    slug: "typography-power",
  },
  {
    title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
    date: "May 5, 2023",
    image: "/images/sudut-profile-design-corp/design-2.jpg",
    slug: "color-theory-guide",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogDetail[params.slug as keyof typeof blogDetail];

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Article Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex justify-between items-center gap-x-2">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={"/images/shared/avatar.jpg"} />
                <AvatarFallback>
                  {" "}
                  <p className="text-gray-600">
                    <span className="font-bold italic">Sudut Profile</span>{" "}
                    DesignCorp
                  </p>
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-gray-600">
                  <span className="font-bold italic">Sudut Profile</span>{" "}
                  DesignCorp
                </p>
                <p className="text-gray-600 text-sm">Author</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1024}
            height={1024}
            className="w-full h-96 object-cover rounded-2xl"
          />
          <p className="text-center text-sm italic text-gray-600 my-8 text-lg max-w-4xl mx-auto">
            {post.content.intro}
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            {post.content.intro}
          </p>

          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-black">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}

          <p className="text-gray-700 leading-relaxed text-lg">
            {post.content.conclusion}
          </p>
        </div>

        {/* Recommended Insights */}
        <div className="border-t border-gray-200 pt-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recommended Insights</h2>
            <TransitionLink
              href="/sudut-profile-design-corp/articles"
              className="text-black hover:text-gray-600 flex items-center gap-2 font-medium"
            >
              View All Insights <ArrowRight className="h-4 w-4" />
            </TransitionLink>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendedPosts.map((recommendedPost, index) => (
              <TransitionLink
                key={index}
                href={`/sudut-profile-design-corp/articles/${recommendedPost.slug}`}
                className="group cursor-pointer"
              >
                <div className="flex gap-4">
                  <Image
                    src={recommendedPost.image || "/placeholder.svg"}
                    alt={recommendedPost.title}
                    width={1024}
                    height={1024}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2 leading-tight group-hover:text-gray-600 transition-colors">
                      {recommendedPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {recommendedPost.date}
                    </p>
                  </div>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
