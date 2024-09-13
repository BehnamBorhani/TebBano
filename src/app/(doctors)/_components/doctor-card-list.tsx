import { API_URL } from "@/configs/global";
import React from "react";
import { DoctorCard } from "./doctor-card";
import { Doctor } from "../_types/doctor.model";

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

export const DoctorCardList = async () => {
  const doctorsData: Doctor[] = await getِDoctors(4);

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-6 xl:justify-start">
      {doctorsData.map((doctor, index) => (
        <DoctorCard key={`doctor-${index}`} {...doctor} />
      ))}

    </div>
  );
};
