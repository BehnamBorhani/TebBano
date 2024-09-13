import { HomeHeroSection } from "@/app/_component/home-hero-section";
import { DoctorCardList } from "./(doctors)/_components/doctor-card-list";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />

      <section className="md:rounded-t-5xl min-h-screen rounded-t-3xl bg-white-50 pt-8 shadow-2xl md:pt-20">
        <div className="container">
          <h2 className="text-xl font-bold md:text-3xl">معرفی پزشکان</h2>
          <DoctorCardList />
        </div>
      </section>
    </div>
  );
}
