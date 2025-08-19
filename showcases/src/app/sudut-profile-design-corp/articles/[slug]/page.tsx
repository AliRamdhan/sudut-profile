"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import TransitionLink from "@/components/shared/transition-link";

// Blog post data
const blogPosts = {
  "user-experience-design": {
    title:
      "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
    date: "May 5, 2023",
    image: "/images/sudut-profile-design-corp/design-2.jpg",
    content: {
      intro:
        "Explore the realm of user experience (UX) design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive and engaging for users. This blog post will delve into UX design principles and best practices that demonstrate its effectiveness.",
      sections: [
        {
          title: "The Essence of Minimalism",
          content:
            "At its core, minimalism is about distilling a design down to its essential elements, eliminating excess and focusing on what truly matters. By reducing visual clutter, minimalism allows for better communication and a more refined user experience. The use of clean lines, ample white space, and minimal color palettes creates a sense of calmness and sophistication, inviting viewers to engage with the design in a more meaningful way.",
        },
        {
          title: "Clarity and Communication",
          content:
            "One of the key strengths of minimalism lies in its ability to convey messages with clarity and precision. By stripping away unnecessary details, minimalistic designs emphasize the core message or concept, making it easier for viewers to understand and remember. Whether it's a logo, a website, or an advertisement, minimalism cuts through the noise and delivers a clear and impactful message.",
        },
        {
          title: "Enhanced User Experience",
          content:
            "Minimalist design principles also play a crucial role in enhancing the user experience. In today's digital landscape, where attention spans are shrinking, simplicity is paramount. Minimalistic interfaces, with their intuitive navigation and uncluttered layouts, provide users with a seamless and enjoyable experience. By reducing cognitive load, minimalism allows users to focus on the content or functionality, leading to higher engagement and satisfaction.",
        },
        {
          title: "Versatility and Timelessness",
          content:
            "Another advantage of minimalism is its versatility across various design disciplines. Minimalistic approaches can be applied to graphic design, web design, interior design, architecture, fashion, and more. Its adaptability allows designers to create timeless visuals that transcend trends and stand the test of time. The clean lines and simplicity inherent in minimalism lend themselves to a wide range of applications, ensuring longevity and relevance.",
        },
      ],
      conclusion:
        "Minimalism has emerged as a dominant force in visual design, offering a compelling alternative to the noise and clutter that often saturate our surroundings. Its power lies in the ability to communicate effectively, enhance user experience, and create timeless aesthetics. By embracing the principles of minimalism, designers can create visually striking designs that resonate with audiences and a sense of purpose in their creations. As we continue to navigate a visually overwhelming world, the principles of minimalism will undoubtedly remain a guiding light in the realm of visual design.",
    },
  },
  "typography-power": {
    title:
      "The Power of Typography in Visual Design: Enhancing Communication and Impact",
    date: "May 5, 2023",
    image: "/images/sudut-profile-design-corp/design-3.jpg",
    content: {
      intro:
        "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions. This blog post will cover typography fundamentals, font pairing strategies, and implementation techniques.",
      sections: [
        {
          title: "Typography Fundamentals",
          content:
            "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. It involves the selection of typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.",
        },
      ],
      conclusion:
        "Typography is a powerful tool that can make or break your design. Understanding its principles and applying them thoughtfully will elevate your visual communication.",
    },
  },
  "color-theory-guide": {
    title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
    date: "May 5, 2023",
    image: "/images/sudut-profile-design-corp/design-1.jpg",
    content: {
      intro:
        "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies, psychology, and combinations.",
      sections: [
        {
          title: "Understanding Color Psychology",
          content:
            "Colors have the power to evoke emotions and influence behavior. Understanding color psychology is crucial for creating designs that resonate with your audience and achieve your intended goals.",
        },
      ],
      conclusion:
        "Color theory is an essential skill for any visual designer. Master these principles to create more impactful and emotionally resonant designs.",
    },
  },
};

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
  const post = blogPosts[params.slug as keyof typeof blogPosts];

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
          <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
            {post.content.intro}
          </p>
          <p className="text-gray-500 text-sm">{post.date}</p>
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
