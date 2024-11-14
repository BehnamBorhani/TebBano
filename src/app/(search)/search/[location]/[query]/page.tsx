import { DoctorCard } from "@/app/(doctors)/_components/doctor-card";
import { DoctorCardList } from "@/app/(doctors)/_components/doctor-card-list";
import { Doctor } from "@/app/(doctors)/_types/doctor.model";
import { API_URL } from "@/configs/global";

async function getِDoctors(
  location: string,
  query: string,
  count: number = 100,
): Promise<[]> {
  const response = await fetch(`${API_URL}/search/${location}?text=${query}`, {
    cache: "no-store",
  });

  if (response.ok) {
    const data = await response.json();
    return data.search.result.slice(0, count);
  } else {
    return [];
  }
}

export default async function SearchResultsPage({
  params,
}: {
  params: { location: string; query: string };
}) {
  const { location, query } = params;
  const doctorsData: Doctor[] = await getِDoctors(location, query);

  return (
    <div className="min-h-screen">
      <h2>نتیجه جستجو:</h2>
      {/* Display search results here */}
      <div className="grid grid-cols-3 gap-4">
        {doctorsData?.map((doctor) => (
          <DoctorCard {...doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
}
