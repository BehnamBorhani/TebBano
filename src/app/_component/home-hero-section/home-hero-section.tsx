import React from "react";
import { Avatar } from "@/app/_component/avatar";
import { Button } from "@/app/_component/button";
import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "../search-box";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="container relative mt-24 flex h-fit flex-col-reverse md:flex-row md:justify-between">
      <div className="title-container flex flex-col justify-center gap-16 xl:mt-32">
        <div className="hidden w-full space-y-4 md:block">
          <h1 className="text-5xl font-bold">
            کنارتان هستیم با بهترین{" "}
            <span className="text-third-600">متخصصان</span>
          </h1>
          <p className="text-2xl font-medium text-mayBe-800">
            در طبانو ما بهترین متخصصان را در سراسر کشور دورهم جمع کرده ایم
            <br />
            تا بهترین خدمات را به شما ارایه دهیم.
          </p>
        </div>

        <div className="h-12 w-full md:h-16">
          <SearchBox />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex -space-x-6 space-x-reverse">
            <Avatar src={"/images/doctors/female doctor 3.png"} size="large" />
            <Avatar src={"/images/doctors/female doctor 2.png"} size="large" />
            <Avatar src={"/images/doctors/female doctor 1.png"} size="large" />
          </div>

          <Link href="https://www.goftino.com/c/aVIRWx" target="_blank">
            <Button
              variant="outline"
              color="primary"
              className="mr-auto text-xl font-bold text-icon-500"
            >
              <Image
                src="/images/icons/support.svg"
                alt="logo"
                width={35}
                height={35}
              />
              مشاوره آنلاین فوری
            </Button>
          </Link>
        </div>
      </div>

      <div className="hero-container -z-10">
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
