import React from "react";
import { Doctor } from "../_types/doctor.model";
import { Avatar } from "@/app/_component/avatar";
import Image from "next/image";
import { MyButton } from "@/app/_component/button/MyButton";

type DoctorCardProps = Doctor;

export const DoctorCard: React.FC<DoctorCardProps> = ({
  display_name,
  display_expertise,
  display_address,
  expertise,
  image,
  star,
  medical_code,
}) => {
  return (
    <div className="h-full w-full select-none overflow-hidden rounded-4xl bg-white-50 px-9 py-7 shadow-xl">
      <div className="card-header gap-7 md:flex">
        <Avatar src={`https://cdn.paziresh24.com/${image}`} />
        <div className="title">
          <h3 className="text-2xl font-bold text-icon-500">{display_name}</h3>
          <h4 className="text-xl font-medium text-mayBe-800">
            {expertise.join("، ")}
          </h4>
        </div>
      </div>

      <div className="card-body mt-8 space-y-5">
        <div className="flex items-center justify-between">
          <h6 className="text-xl text-mayBe-800">امتیاز</h6>

          <div className="flex items-center gap-1">
            <h5 className="text-xl">{star} از 5</h5>
            <Image
              src={"/images/icons/star.svg"}
              width={34}
              height={34}
              alt="star-icon"
              className="size-8"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h6 className="text-xl text-mayBe-800">کد نظام پزشکی</h6>
          <h5 className="text-xl">{medical_code}</h5>
        </div>

        <div className="flex items-center justify-between">
          <h6 className="text-xl text-mayBe-800">اولین نوبت خالی</h6>
          <h5 className="text-xl">سه شنبه 23خرداد - 10:30</h5>
        </div>

        <div className="hidden gap-2 pt-2 md:flex">
          <Image
            src="/images/icons/location.svg"
            alt="location-icon"
            width={35}
            height={35}
            className="size-7"
          />
          <h5 className="truncate text-xl" title={display_address}>
            {display_address}
          </h5>
        </div>

        <hr />

        <MyButton
          color="third"
          variant="bordered"
          radius="full"
          size="lg"
          fullWidth
        >
          رزرو نوبت
        </MyButton>
      </div>
    </div>
  );
};
