// app/about/page.tsx
"use client";

import { Accordion } from "@/app/_component/accordion";
import { aboutUsFeatures } from "@/data/about-us-features";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page bg-[#E6E6EE]">
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-xl text-icon-500">درباره ما</h2>
        <h1 className="my-4 text-4xl font-bold">
          ماموریت ما در طب بانو رزرو سلامتی شماست.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-mayBe-800">
          تب بانو به مردم کمک میکند تا در مسیر زندگی، جسم و روانی سالم تر و طول
          عمر بیشتری داشته باشند. چشم انداز ما، دسترسی آسان تر، شفاف و کم هزینه
          تر به خدمات درمانی است.
        </p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto flex flex-col justify-between gap-24 px-4 py-16 md:flex-row">
        <div className="flex-1 text-right">
          <h2 className="mb-4 text-2xl font-bold">داستان طب بانو</h2>
          <p className="text-justify text-lg leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/images/about-us/about-us-1.jpeg"
            alt="About Us"
            width={600}
            height={300}
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-4 py-16">
        <div className="flex h-[700px] flex-col justify-between gap-24  md:flex-row">
          <div className="flex-1">
            <Image
              src="/images/about-us/about-us-2.jpeg"
              alt="Doctor"
              width={400}
              height={400}
              className="h-full w-full rounded-xl object-cover object-center"
            />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h2 className="mb-4 text-right text-2xl font-bold">
              خدماتی که ارائه می‌دهیم
            </h2>
            <Accordion data={aboutUsFeatures} />
          </div>
        </div>
      </section>

      {/* Map and Statistics Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <Image
              src="/images/about-us/iran.png"
              alt="Map"
              width={400}
              height={400}
            />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">+1,000,000</p>
              <p className="text-mayBe-800">رزرو دکتر موفق</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">+250</p>
              <p className="text-mayBe-800">شهر تحت پوشش</p>
            </div>
            {/* Repeat for other statistics */}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">به ما بپیوندید</h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-mayBe-800">
          ما در طب بانو به دنبال افراد مستعدیم...
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/* person- pictures */}
          <Image
            src="/images/about-us/person-1.jpeg"
            alt="person"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src="/images/about-us/person-2.jpeg"
            alt="person"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Image
            src="/images/about-us/person-3.jpeg"
            alt="person"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <Button color="primary" className="mt-8">
          ارسال رزومه
        </Button>
      </section>
    </div>
  );
}