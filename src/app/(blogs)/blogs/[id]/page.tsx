import { blogs } from "@/data/blogs";
import { Blog } from "@/types/blog.type";
import Image from "next/image";

export default async function BlogDetails({
  params,
}: {
  params: { id: String };
}) {
  const { id } = params;
  const blog: Blog = blogs.find((blog) => blog.id === +id) || blogs[0];

  return (
    <div className="min-h-screen bg-[#E6E6EE]">
      <div className="container space-y-8 pb-16">
        <div className="aspect-[2/1] overflow-hidden rounded-4xl">
          <Image
            src={`/images/blogs/${blog.thumbnail}`}
            alt={blog.title}
            width={1500}
            height={800}
            className="size-full object-cover object-center"
          />
        </div>
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    </div>
  );
}
