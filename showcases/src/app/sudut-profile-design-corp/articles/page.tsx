"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Cta from "../_components/cta";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  latestInsights,
  additionalInsights,
  blogPosts,
  featuredBlogPost,
} from "../_lib/data";
const Page = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedInsights = showMore
    ? [...latestInsights, ...additionalInsights]
    : latestInsights;

  return (
    <div>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            INSIGHTS
          </h1>
          <p className="text-lg text-gray-600">
            Creative Insights from Our Work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full h-full">
          {/* Hero Article */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative mb-20">
              <Image
                src={featuredBlogPost.image || "/placeholder.svg"}
                alt="Aerial view of Kuara Resort in Southern Lombok"
                width={1024}
                height={1024}
                className="w-full h-full lg:h-80 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {featuredBlogPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredBlogPost.excerpt}
              </p>
              <TransitionLink
                href={`articles/${featuredBlogPost.slug}`}
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post, index) => (
              <TransitionLink
                key={index}
                href={`articles/${
                  post.slug || "designing-for-user-experience"
                }`}
                className="group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </TransitionLink>
            ))}
          </div>

          {/* Latest Insights List */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">My Latest Insights</h2>
            <div className="space-y-12">
              {displayedInsights.map((insight, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{insight.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 bg-transparent"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </section>

      {/* Cta Section */}
      <Cta />
    </div>
  );
};

export default Page;
