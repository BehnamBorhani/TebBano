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
    <div className="text-md h-full min-h-full w-full select-none overflow-hidden rounded-3xl bg-white-50 px-4 py-3 shadow-xl md:rounded-4xl md:px-9 md:py-7 md:text-xl">
      <div className="card-header flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-7">
        <Avatar src={`https://cdn.paziresh24.com/${image}`} />
        <div className="title text-center">
          <h3 className="text-xl font-bold text-icon-500 md:text-2xl">
            {display_name}
          </h3>
          <h4 className="font-medium text-mayBe-800">{expertise.join("، ")}</h4>
        </div>
      </div>

      <div className="card-body mt-4 space-y-2 md:mt-8 md:space-y-7">
        <div className="flex items-center justify-between">
          <h6 className=" text-mayBe-800">امتیاز</h6>

          <div className="flex items-center gap-1">
            <h5 className="">{star} از 5</h5>
            <Image
              src={"/images/icons/star.svg"}
              width={34}
              height={34}
              alt="star-icon"
              className="size-5 md:size-8"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h6 className=" text-mayBe-800">کد نظام پزشکی</h6>
          <h5 className="">{medical_code}</h5>
        </div>

        <div className="hidden items-center justify-between md:flex">
          <h6 className=" text-mayBe-800">اولین نوبت خالی</h6>
          <h5 className="">سه شنبه 23خرداد - 10:30</h5>
        </div>

        <div className="hidden gap-2 pt-2 md:flex">
          <Image
            src="/images/icons/location.svg"
            alt="location-icon"
            width={35}
            height={35}
            className="size-3 md:size-7"
          />
          <h5 className="truncate" title={display_address}>
            {display_address}
          </h5>
        </div>

        <hr />

        <MyButton
          color="third"
          variant="bordered"
          radius="full"
          size="md"
          fullWidth
        >
          رزرو نوبت
        </MyButton>
      </div>
    </div>
  );
};
