import { HomeHeroSection } from "@/app/_component/home-hero-section";
import { DoctorCardList } from "./(doctors)/_components/doctor-card-list";
import { API_URL } from "@/configs/global";
import { Doctor } from "./(doctors)/_types/doctor.model";
import { homeFeatures } from "@/data/home-features";
import HomeFeature from "./_component/home-feature/home-feature";
import { TestimonialList } from "./_component/testimonial/testimonial-list";
import { testimonials } from "@/data/testimonial";
import { Location } from "./_component/city-modal/types/api-response.model";

async function getِDoctors(count: number): Promise<Doctor[]> {
  const res = await fetch(
    `${API_URL}/search/tehran?text=%D9%85%D8%AA%D8%AE%D8%B5%D8%B5+%D8%B2%D9%86%D8%A7%D9%86+%D9%88+%D8%B2%D8%A7%DB%8C%D9%85%D8%A7%D9%86`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data.search.result.slice(0, count);
}

async function getِLocations(): Promise<Location> {
  const formData = new FormData();
  formData.append("table", JSON.stringify(["province", "city"]));

  const res = await fetch(`https://www.paziresh24.com/api/getbaseinfo`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
  const data = await res.json();
  return data.result;
}

export default async function Home() {
  const doctorsData: Doctor[] = await getِDoctors(12);
  const locationsData: Location = await getِLocations();

  return (
    <div className="bg-[#E6E6EE]">
      <HomeHeroSection locations={locationsData} />

      <section className="rounded-t-3xl bg-white-50 py-10 shadow-2xl md:rounded-t-5xl md:py-20 md:pt-20">
        <div className="container">
          <h2 className="mb-5 text-center text-xl font-bold md:text-start md:text-3xl">
            معرفی پزشکان
          </h2>
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

      <section className="relative bg-white-50 pt-14 md:pt-28">
        {/* <div className="pointer-events-none absolute -top-52 bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full bg-primary-300 opacity-30 blur-3xl"></div> */}
        <h2 className="relative z-0 mx-auto block w-fit text-center text-xl font-extrabold text-icon md:text-start md:text-3xl">
          <span className="absolute -right-3 -top-2 -z-10 inline-block size-6 rounded-full bg-icon-700 opacity-25 md:size-8"></span>
          تجربه هم‌میسرهای تبانو
        </h2>

        <p className="mb-10 mt-2 text-center text-lg md:mb-20">
          تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد خدمات ما چیه
        </p>

        <TestimonialList testimonials={testimonials} />
      </section>
    </div>
  );
}
