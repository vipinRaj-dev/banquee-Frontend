import { ArrowRight } from "lucide-react";
import React from "react";
import BlogCard from "../UIelements/BlogCard";
import { BlogData } from "../TextData/BlogData";

const Blog = () => {
  return (
    <div className="mb-40">
      <div className="mt-40 mb-16">
        <div className="flex justify-between">
          <h1 className="text-[64px] font-medium leading-[70.4px]">Blog</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#5BB5A2] font-medium text-[18px] leading-[18px]">
              All Articles
            </p>
            <ArrowRight size={20} color="#5BB5A2" />
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        {BlogData.map((blog) => {
          return (
            <BlogCard
            image={blog.Image}
              title={blog.title}
              description={blog.description}
              keywords={blog.keywords}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
