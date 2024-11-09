import { blogs } from "@/data/blogs";
import React from "react";
import BlogPostCard from "./blog-post-card";
import Link from "next/link";

const BlogPostList: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {blogs.map((blog) => (
        <Link
          href={`/blogs/${blog.id}`}
          className="col-span-12 md:col-span-6 lg:col-span-4"
          key={blog.id}
        >
          <BlogPostCard {...blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;
