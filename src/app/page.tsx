import { HomeHeroSection } from "@/app/_component/home-hero-section";
import { DoctorCardList } from "./(doctors)/_components/doctor-card-list";
import { API_URL } from "@/configs/global";
import { Doctor } from "./(doctors)/_types/doctor.model";
import { homeFeatures } from "@/data/home-features";
import HomeFeature from "./_component/home-feature/home-feature";

async function getِDoctors(count: number): Promise<[]> {
  const res = await fetch(
    `${API_URL}/search/tehran?text=%D9%85%D8%AA%D8%AE%D8%B5%D8%B5+%D8%B2%D9%86%D8%A7%D9%86+%D9%88+%D8%B2%D8%A7%DB%8C%D9%85%D8%A7%D9%86`,
    {
      cache: "no-store",
      next: { revalidate: 60 * 60 * 24 },
    },
  );
  const data = await res.json();
  return data.search.result;
}

export default async function Home() {
  const doctorsData: Doctor[] = await getِDoctors(4);

  return (
    <div>
      <HomeHeroSection />

      <section className="rounded-t-3xl bg-white-50 px-10 py-20 shadow-2xl md:rounded-t-5xl md:pt-20">
        <div className="container">
          <h2 className="mb-5 text-xl font-bold md:text-3xl">معرفی پزشکان</h2>
          <DoctorCardList doctors={doctorsData} />
        </div>
      </section>

      <section className="features mb-12 bg-third-50 py-12 lg:mb-36">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-y-11 lg:gap-x-11">
            {homeFeatures.map((feature) => (
              <HomeFeature key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
