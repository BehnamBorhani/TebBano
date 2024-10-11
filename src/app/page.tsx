import { HomeHeroSection } from "@/app/_component/home-hero-section";
import { DoctorCardList } from "./(doctors)/_components/doctor-card-list";
import { API_URL } from "@/configs/global";
import { Doctor } from "./(doctors)/_types/doctor.model";
import { homeFeatures } from "@/data/home-features";
import HomeFeature from "./_component/home-feature/home-feature";
import { TestimonialList } from "./_component/testimonial/testimonial-list";
import { testimonials } from "@/data/testimonial";

async function getِDoctors(count: number): Promise<[]> {
  const res = await fetch(
    `${API_URL}/search/tehran?text=%D9%85%D8%AA%D8%AE%D8%B5%D8%B5+%D8%B2%D9%86%D8%A7%D9%86+%D9%88+%D8%B2%D8%A7%DB%8C%D9%85%D8%A7%D9%86`,
    {
      cache: "no-store",
      next: { revalidate: 60 * 60 * 24 },
    },
  );
  const data = await res.json();
  return data.search.result.slice(0, count);
}

export default async function Home() {
  const doctorsData: Doctor[] = await getِDoctors(12);

  return (
    <div className="bg-[#E6E6EE]">
      <HomeHeroSection />

      <section className="rounded-t-3xl bg-white-50 px-10 py-20 shadow-2xl md:rounded-t-5xl md:pt-20">
        <div className="container">
          <h2 className="mb-5 text-xl font-bold md:text-3xl">معرفی پزشکان</h2>
          <DoctorCardList doctors={doctorsData} />
        </div>
      </section>

      <section className="features z-10 bg-third-50 py-12">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-y-11 lg:gap-x-11">
            {homeFeatures.map((feature) => (
              <HomeFeature key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white-50 pt-28">
        {/* <div className="pointer-events-none absolute -top-52 bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full bg-primary-300 opacity-30 blur-3xl"></div> */}
        <h2 className="relative z-0 mx-auto block w-fit text-3xl font-extrabold text-icon">
          <span className="absolute -right-3 -top-2 -z-10 inline-block h-8 w-8 rounded-full bg-icon-700 opacity-25"></span>
          تجربه هم‌میسرهای تبانو
        </h2>

        <p className="mb-20 mt-2 text-center text-lg">
          تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد خدمات ما چیه
        </p>
        
        <TestimonialList testimonials={testimonials} />
      </section>
    </div>
  );
}
