import { DoctorCard } from "@/app/(doctors)/_components/doctor-card";
import { DoctorCardList } from "@/app/(doctors)/_components/doctor-card-list";
import { Doctor } from "@/app/(doctors)/_types/doctor.model";
import { API_URL } from "@/configs/global";

async function getِDoctors(count: number, query: string): Promise<[]> {
  const res = await fetch(`${API_URL}/search/tehran?text=${query}`, {
    cache: "no-store",
    next: { revalidate: 60 * 60 * 24 },
  });
  const data = await res.json();
  return data.search.result.slice(0, count);
}

export default async function SearchResultsPage({
  params,
}: {
  params: { query: string };
}) {
  const { query } = params;
  const doctorsData: Doctor[] = await getِDoctors(24, query);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Display search results here */}
      <div className="grid grid-cols-3 gap-4">
        {doctorsData?.map((doctor) => (
          <DoctorCard {...doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
}
