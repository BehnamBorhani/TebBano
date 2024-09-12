import React from "react";
import { Avatar } from "@/app/_component/avatar";
import { Button } from "@/app/_component/button";
import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "../search-box";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="container mt-5 flex min-h-screen flex-col justify-center gap-16 bg-hero-doctor bg-contain bg-center bg-no-repeat md:bg-left xl:mt-32">
      <div className="w-1/2 space-y-4">
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

      <div className="h-16 w-1/2">
        <SearchBox />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex -space-x-6 space-x-reverse">
          <Avatar src={"/images/doctors/female doctor 3.png"} size="large" />
          <Avatar src={"/images/doctors/female doctor 2.png"} size="large" />
          <Avatar src={"/images/doctors/female doctor 1.png"} size="large" />
        </div>

        <Link href="/signin">
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
    </section>
  );
};
