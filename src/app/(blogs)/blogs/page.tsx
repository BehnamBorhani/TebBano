import Image from "next/image";
import BlogPostList from "../_components/blog-post-list";

export default async function Blog() {
  return (
    <section className={"min-h-screen bg-[#E6E6EE]"}>
      <div className="container">
        <header className="my-16 grid h-[800px] grid-cols-12 grid-rows-12 gap-6">
          <h1 className="col-start-1 col-end-8 row-start-1 row-end-2 text-5xl font-bold">
            بهترین‌های هفته
          </h1>

          <div className="col-start-1 col-end-9 row-start-2 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/blogs/blog-3.jpg"
              width={1000}
              height={700}
              alt="blog-3"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-13 row-start-1 row-end-7 overflow-hidden rounded-4xl">
            <Image
              src="/images/blogs/blog-1.jpg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-13 row-start-1 row-end-7 overflow-hidden rounded-4xl">
            <Image
              src="/images/blogs/blog-1.jpg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-13 row-start-7 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/blogs/blog-2.jpg"
              width={1000}
              height={700}
              alt="blog-2"
              className="h-full object-cover object-center"
            />
          </div>
        </header>

        <main className="pb-16">
          <h2 className="mb-8 text-3xl font-bold">مجله سلامتی</h2>

          <BlogPostList />
        </main>
      </div>
    </section>
  );
}
