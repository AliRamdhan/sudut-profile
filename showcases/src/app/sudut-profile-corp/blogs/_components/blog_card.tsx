/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BlogType } from "../../_lib/data";
import Link from "next/link";
interface BlogProps {
  blog: BlogType;
}
const BlogCard = ({ blog }: BlogProps) => {
  return (
    <div className="h-[600px] border-2 shadow-xl p-4">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={blog.imageUrl}
          alt={blog.title}
        />

        <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={blog.author.avatarUrl}
            alt={blog.author.name}
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              {blog.author.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {blog.author.role}
            </p>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
        {blog.title}
      </h1>

      <hr className="w-32 my-6 text-blue-500" />

      <p className="text-sm text-gray-500 dark:text-gray-400">{blog.excerpt}</p>

      <Link
        // href={`/sudut-profile-corp/blogs/${blog.slug}`}
        href={`#`}
        className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
