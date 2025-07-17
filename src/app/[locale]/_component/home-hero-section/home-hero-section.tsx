import React from "react";
import { Avatar } from "@/app/[locale]/_component/avatar";
import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "../search-box";
import { MyButton } from "../button/MyButton";
import { Location } from "../city-modal/types/api-response.model";

export const HomeHeroSection: React.FC<{
  locations: Location;
}> = ({ locations }) => {
  return (
    <section className="container relative flex flex-col-reverse md:flex-row md:justify-between">
      <div className="title-container flex flex-col justify-center gap-16">
        <div className="hidden w-full space-y-4 md:block">
          <h1 className="font-bold md:text-3xl lg:text-5xl">
            کنارتان هستیم با بهترین{" "}
            <span className="text-third-600">متخصصان</span>
          </h1>
          <p className="text-lg font-medium text-mayBe-800 lg:text-2xl">
            در طبانو ما بهترین متخصصان را در سراسر کشور دورهم جمع کرده ایم
            <br />
            تا بهترین خدمات را به شما ارایه دهیم.
          </p>
        </div>

        <div className="h-12 w-full md:h-16">
          <SearchBox locations={locations} />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex -space-x-6 space-x-reverse">
            <Avatar src={"/images/doctors/female doctor 3.png"} size="large" />
            <Avatar src={"/images/doctors/female doctor 2.png"} size="large" />
            <Avatar src={"/images/doctors/female doctor 1.png"} size="large" />
          </div>

          <Link href="https://www.goftino.com/c/chEtU1" target="_blank">
            <MyButton
              variant="bordered"
              color="icon"
              radius="full"
              size="lg"
              className="group mr-auto px-6 py-2.5 text-xl font-bold"
            >
              <Image
                src="/images/icons/support.svg"
                alt="logo"
                width={35}
                height={35}
              />
              مشاوره آنلاین فوری
            </MyButton>
          </Link>
        </div>
      </div>

      <div className="hero-container">
        <Image
          src="/images/hero-doctor.png"
          alt="hero-doctor"
          width={604}
          height={905}
          className="object-contain object-center"
        />
      </div>
    </section>
  );
};
