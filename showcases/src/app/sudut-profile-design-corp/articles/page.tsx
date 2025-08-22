"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Cta from "../_components/cta";
import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Page = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredPost = {
    title: "Exploring the Power of Minimalism in Visual Design",
    excerpt:
      "In the fast-paced, visually overwhelming world we live in, it's no surprise that minimalism has become a powerful trend in the realm of visual design.",
    image: "/images/sudut-profile-design-corp/design-1.jpg",
  };

  const blogPosts = [
    {
      title:
        "The Power of Typography in Visual Design: Enhancing Communication and Impact",
      excerpt:
        "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions.",
      image: "/images/sudut-profile-design-corp/design-2.jpg",
      date: "May 5, 2023",
      slug: "typography-power",
    },
    {
      title:
        "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
      excerpt:
        "Explore the realm of user experience (UX) design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive and engaging for users.",
      image: "/images/sudut-profile-design-corp/design-3.jpg",
      date: "May 3, 2023",
      slug: "user-experience-design",
    },
    {
      title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
      excerpt:
        "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
      image: "/images/sudut-profile-design-corp/design-1.jpg",
      date: "May 5, 2023",
      slug: "color-theory-guide",
    },
  ];

  const latestInsights = [
    {
      title:
        "The Power of Typography in Visual Design: Enhancing Communication and Impact",
      date: "May 5, 2023",
      description:
        "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions. This blog post will cover typography fundamentals, font pairing stra...",
    },
    {
      title:
        "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
      date: "May 3, 2023",
      description:
        "Explore the realm of user experience (UX) design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive and engaging for users. This blog post will explore UX design principle...",
    },
    {
      title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
      date: "May 5, 2023",
      description:
        "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
    },
  ];

  const additionalInsights = [
    {
      title: "The Psychology of Visual Hierarchy in Web Design",
      date: "April 28, 2023",
      description:
        "Learn how to guide users through your designs using visual hierarchy principles. This comprehensive guide covers spacing, typography, color, and layout techniques to create intuitive user experiences.",
    },
    {
      title: "Creating Accessible Design Systems for Modern Applications",
      date: "April 25, 2023",
      description:
        "Explore the fundamentals of building inclusive design systems that work for everyone. From color contrast to keyboard navigation, discover how to make your designs accessible from the ground up.",
    },
    {
      title: "The Future of Motion Design in Digital Interfaces",
      date: "April 22, 2023",
      description:
        "Discover how thoughtful animation and micro-interactions can enhance user experience. This post explores the latest trends in motion design and how to implement them effectively in your projects.",
    },
  ];

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
                src={featuredPost.image || "/placeholder.svg"}
                alt="Aerial view of Kuara Resort in Southern Lombok"
                width={1024}
                height={1024}
                className="w-full h-full lg:h-80 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <TransitionLink
                href="articles/kuara-resort-launch"
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
