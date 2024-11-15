import { DoctorCard } from "@/app/(doctors)/_components/doctor-card";
import { Doctor } from "@/app/(doctors)/_types/doctor.model";
import { Location } from "@/app/_component/city-modal/types/api-response.model";
import { SearchBox } from "@/app/_component/search-box";
import { API_URL } from "@/configs/global";
import Image from "next/image";

async function getِDoctors(
  location: string,
  query: string,
  count: number = 100,
): Promise<[]> {
  const response = await fetch(`${API_URL}/search/${location}?text=${query}`);

  if (response.ok) {
    const data = await response.json();
    return data.search.result.slice(0, count);
  } else {
    return [];
  }
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

export default async function SearchResultsPage({
  params,
}: {
  params: { location: string; query: string };
}) {
  const { location, query } = params;
  const doctorsData: Doctor[] = await getِDoctors(location, query);
  const locationsData: Location = await getِLocations();

  return (
    <section className="min-h-screen bg-[#E6E6EE]">
      <div className="container">
        <header className="my-16 grid aspect-video grid-cols-12 grid-rows-12 md:gap-6">
          <div className="col-start-1 col-end-5 row-start-1 row-end-5 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g3.jpeg"
              width={1000}
              height={700}
              alt="blog-3"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="col-start-1 col-end-3 row-start-5 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g6.jpeg"
              width={1000}
              height={700}
              alt="blog-3"
              className="size-full object-cover object-right"
            />
          </div>

          <div className="col-start-3 col-end-5 row-start-9 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g5.jpeg"
              width={1000}
              height={700}
              alt="blog-3"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="col-start-3 col-end-5 row-start-5 row-end-9 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g12.jpeg"
              width={1000}
              height={700}
              alt="blog-3"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="col-start-5 col-end-9 row-start-1 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g1.jpeg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-13 row-start-1 row-end-5 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g4.jpeg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-11 row-start-5 row-end-9 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g10.jpeg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-11 col-end-13 row-start-5 row-end-9 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g11.jpeg"
              width={1000}
              height={700}
              alt="blog-1"
              className="h-full object-cover object-center"
            />
          </div>

          <div className="col-start-9 col-end-13 row-start-9 row-end-13 overflow-hidden rounded-4xl">
            <Image
              src="/images/gallery/g2.jpeg"
              width={1000}
              height={700}
              alt="blog-2"
              className="h-full object-cover object-center"
            />
          </div>
        </header>

        <div className="mx-auto w-full md:h-16 md:max-w-[700px]" id="searchbox">
          <SearchBox locations={locationsData} />
        </div>
        <h2 className="mt-8 text-xl font-bold">نتیجه جستجو:</h2>

        {/* Display search results here */}
        <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-3">
          {doctorsData.length ? (
            doctorsData?.map((doctor, index) => (
              <DoctorCard {...doctor} index={index} key={doctor._id} />
            ))
          ) : (
            <h3>متاسفانه موردی یافت نشد! لطفا دقیق تر جستجو کنید</h3>
          )}
        </div>
      </div>
    </section>
  );
}
