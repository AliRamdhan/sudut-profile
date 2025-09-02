"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TransitionLink from "@/components/shared/transition-link";
import BlogCard from "../../blogs/_components/blog_card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talentsDetail } from "../../_lib/data";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { slug: string } }) => {
  const talent = talentsDetail.find((t) => t.slug === params.slug);

  if (!talent) {
    notFound();
  }

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:justify-center lg:items-center lg:gap-x-10 lg:px-8">
          {/* Image */}
          <motion.div
            className="mx-auto mt-16 lg:mt-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[500px] h-full lg:h-[640px]">
              <Image
                src={talent.imageUrl}
                alt={talent.name}
                className="w-full h-full object-cover object-center rounded-2xl shadow-xl ring-1 ring-gray-900/10"
                width={1024}
                height={1024}
              />
            </div>
          </motion.div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-shrink-0 text-justify">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">{talent.name}</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {talent.bio}
            </motion.p>
            <motion.h1
              className="mt-10 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Visit their platforms :</span>
            </motion.h1>
            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TransitionLink href={"#"}>
                <svg
                  role="img"
                  aria-label="Facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-12 h-12 transition-all duration-300 hover:scale-105"
                >
                  <title>Facebook</title>
                  <path d="M22 12.073C22 6.484 17.523 2 12 2S2 6.484 2 12.073C2 17.09 5.657 21.254 10.438 21.98v-6.99H7.898v-2.92h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.444 2.92h-2.329v6.99C18.343 21.254 22 17.09 22 12.073z" />
                </svg>
              </TransitionLink>
              <TransitionLink href={"#"}>
                <svg
                  role="img"
                  aria-label="Instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-12 h-12 transition-all duration-300 hover:scale-105"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.405a4.92 4.92 0 011.675 1.09c.48.48.81 1.05 1.09 1.675.165.46.352 1.26.405 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.43a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.46.165-1.26.352-2.43.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.405a4.902 4.902 0 01-1.675-1.09 4.902 4.902 0 01-1.09-1.675c-.165-.46-.352-1.26-.405-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.43a4.902 4.902 0 011.09-1.675 4.902 4.902 0 011.675-1.09c.46-.165 1.26-.352 2.43-.405C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.069-1.02.045-1.574.215-1.944.357-.495.18-.848.396-1.22.768-.372.372-.588.725-.768 1.22-.142.37-.312.924-.357 1.944-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.045 1.02.215 1.574.357 1.944.18.495.396.848.768 1.22.372.372.725.588 1.22.768.37.142.924.312 1.944.357 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.02-.045 1.574-.215 1.944-.357.495-.18.848-.396 1.22-.768.372-.372.588-.725.768-1.22.142-.37.312-.924.357-1.944.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.045-1.02-.215-1.574-.357-1.944-.18-.495-.396-.848-.768-1.22-.372-.372-.725-.588-1.22-.768-.37-.142-.924-.312-1.944-.357C15.548 4.013 15.17 4.001 12 4.001zM12 7.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 1.838a2.324 2.324 0 110 4.648 2.324 2.324 0 010-4.648zM17.844 6.162a1.02 1.02 0 11-2.04 0 1.02 1.02 0 012.04 0z" />
                </svg>
              </TransitionLink>
              <TransitionLink href={"#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-12 h-12 transition-all duration-300 hover:scale-105"
                >
                  <title>Youtube</title>
                  <path
                    d="M23.498 6.186a2.974 2.974 0 0 
        0-2.095-2.107C19.5 3.5 12 
        3.5 12 3.5s-7.5 0-9.403.579a2.974 
        2.974 0 0 0-2.095 2.107A31.38 
        31.38 0 0 0 .5 12a31.38 31.38 0 0 
        0 .002 5.814 2.974 2.974 0 0 0 
        2.095 2.107C4.5 20.5 12 
        20.5 12 20.5s7.5 0 9.403-.579a2.974 
        2.974 0 0 0 2.095-2.107A31.38 
        31.38 0 0 0 23.5 12a31.38 31.38 
        0 0 0-.002-5.814zM9.75 15.02V8.98L15.5 
        12l-5.75 3.02z"
                  />
                </svg>
              </TransitionLink>
              <TransitionLink href={"#"}>
                <svg
                  role="img"
                  aria-label="Instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-12 h-12 transition-all duration-300 hover:scale-105"
                >
                  <title>Twitter</title>
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69a4.23 
        4.23 0 0 0 1.85-2.34 8.48 
        8.48 0 0 1-2.68 1.03 4.22 
        4.22 0 0 0-7.2 3.85A11.95 
        11.95 0 0 1 3.15 4.6a4.22 
        4.22 0 0 0 1.3 5.63 4.2 
        4.2 0 0 1-1.91-.53v.05a4.22 
        4.22 0 0 0 3.39 4.14 4.23 
        4.23 0 0 1-1.9.07 4.22 4.22 
        0 0 0 3.94 2.93A8.47 8.47 
        0 0 1 2 19.54a11.93 11.93 
        0 0 0 6.46 1.89c7.75 0 
        11.99-6.42 11.99-11.99 0-.18 
        0-.35-.01-.53A8.58 8.58 
        0 0 0 22.46 6z"
                  />
                </svg>
              </TransitionLink>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Filmography :
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(talent.filmography).map(([section, items]) => (
                <div key={section} className="mb-6">
                  <h3 className="text-lg font-medium mb-2 capitalize">
                    {section.replace(/([A-Z])/g, " $1")}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground">
                    {items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Card */}
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Act :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground">
                {talent.act.roles.map((role: string, i: number) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>

              <h3 className="font-medium mt-4 mb-2">Co-Director</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Teka-Teki Tika (2021)</li>
                <li>Kaka Boss (2024)</li>
              </ul>

              <h3 className="font-medium mt-4 mb-2">
                Penulis, sutradara & produser
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Dealing With Myself (2020)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-20">
        <p className="max-w-xs text-4xl font-semibold border-b pb-3">
          Related Blogs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {talent.relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
