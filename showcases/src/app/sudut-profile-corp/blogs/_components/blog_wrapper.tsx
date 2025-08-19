import React from "react";
import BlogCard from "./blog_card";
import Pagination from "@/components/shared/pagination";

const BlogWrapper = () => {
  return (
    <div>
      <div className="mt-8 sm:flex sm:items-center sm:justify-end">
        <div className="hidden sm:block">
          <div aria-label="SortBy" className="sr-only">
            SortBy
          </div>

          <select
            id="SortBy"
            className="h-10 rounded-sm border-b border-gray-300 text-sm"
          >
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </ul>

      <div className="mt-16">
        <Pagination />
      </div>
    </div>
  );
};

export default BlogWrapper;
