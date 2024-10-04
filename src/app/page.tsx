import { HomeHeroSection } from "@/app/_component/home-hero-section";
import { DoctorCardList } from "./(doctors)/_components/doctor-card-list";
import { API_URL } from "@/configs/global";
import { Doctor } from "./(doctors)/_types/doctor.model";

async function getِDoctors(count: number): Promise<[]> {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
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

      <section className="min-h-screen rounded-t-3xl bg-white-50 pt-8 shadow-2xl md:rounded-t-5xl md:pt-20">
        <div className="container">
          <h2 className="text-xl font-bold md:text-3xl">معرفی پزشکان</h2>
          <DoctorCardList doctors={doctorsData} />
        </div>
      </section>
    </div>
  );
}
