"use client";
import React from "react";
import { DoctorCard } from "./doctor-card";
import { Doctor } from "../_types/doctor.model";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export const DoctorCardList = async ({ doctors }: { doctors: Doctor[] }) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // Mobile screens (up to 640px)
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // Tablet screens (up to 768px)
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Desktop screens (up to 1024px and larger)
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      loop={true}
      style={{
        padding: "2rem",
      }}
    >
      {doctors.map((doctor) => (
        <SwiperSlide key={doctor._id} className="ml-10">
          <DoctorCard {...doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
