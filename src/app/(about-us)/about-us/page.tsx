// app/about/page.tsx
"use client";

import { Accordion } from "@/app/_component/accordion";
import Counter from "@/app/_component/counter/counter";
import { aboutUsFeatures } from "@/data/about-us-features";
import { AboutUsStatistics } from "@/data/about-us-statistics";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page bg-[#E6E6EE]">
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-xl text-icon-500">درباره ما</h2>
        <h1 className="my-4 text-4xl font-bold">
          ماموریت ما در طبانو رزرو سلامتی شماست.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-mayBe-900">
          طبانو به مردم کمک میکند تا در مسیر زندگی، جسم و روانی سالم تر و طول
          عمر بیشتری داشته باشند. چشم انداز ما، دسترسی آسان تر، شفاف و کم هزینه
          تر به خدمات درمانی است.
        </p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto flex flex-col justify-between gap-24 px-4 py-16 md:flex-row">
        <div className="flex-1 text-right">
          <h2 className="mb-4 text-2xl font-bold">داستان طبانو</h2>
          <p className="text-justify text-lg leading-relaxed text-mayBe-900">
            ما در طبانو با عشق و تخصص در کنار شما خواهیم بود تا سفر زیبای
            بارداری و مادرشدن را آسان‌تر و لذت‌بخش‌تر کنیم. اینجا جایی است که
            شکوفایی زندگی جدید آغاز می‌ شود.
            <br />
            طبانو، تلفیقی است از طب و بانو ؛نماد احترام به بانوان و سلامت آنان.
            ما با هدف ایجاد یک تجربه‌ی منحصر به فرد و رضایت‌بخش در زمینه‌ی زنان
            و زایمان تاسیس شده‌ایم. در طبانو، ما به اهمیت انتخاب یک پزشک متخصص و
            متعهد واقفیم و تمام تلاش خود را می‌کنیم تا شما را به بهترین‌ها متصل
            کنیم.
            <br />
            چرا طبانو؟ چون ما باور داریم که بانوان لیاقت بهترین مراقبت‌ها و
            اطلاعات بروز را برای سلامت خود و فرزندان خود دارند. از زمان بارداری
            تا زایمان و مراقبت‌های پس از آن، تیم ما با تخصص و دلسوزی در کنار
            شماست تا سفری امن و آرامش‌بخشی را برای شما به ارمغان بیاورد. با
            استفاده ازنوبت دهی آنلاین ما، می‌توانید به سادگی وقت ملاقات خود را
            تعیین کنید و از مشاوره‌های تخصصی بدون حضور در مطب بهره‌مند شوید.
            همچنین، مقالات و محتوای آموزشی ما نقشه راهیست که میتوانید از آن بهره
            ببرید.
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
      <section className="container mx-auto px-4 py-16 text-center md:text-start">
        <div className="flex flex-col items-center gap-32 md:flex-row">
          <div className="flex-1 space-y-20">
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl">
                در مسیر پیشرفت با همراهی شما
              </h3>

              <p className="text-mayBe-900">
                طبانو به مردم کمک میکند تا در مسیر زندگی، جسم و روانی سالم تر و
                طول عمر بیشتری داشته باشند. چشم انداز ما، دسترسی آسان تر، شفاف و
                کم هزینه تر به خدمات درمانی است.
                <br />
                در طبانو، ما نه تنها به درمان می‌اندیشیم، بلکه به خلق آینده‌ای
                روشن و سالم برای شما و نسل‌های آینده می اندیشیم چرا که سلامت
                زنان پایه ی یک جامعه موفق خواهد بود.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-16 text-center">
              {AboutUsStatistics.map((item) => (
                <div key={item.title}>
                  <div className="flex justify-center text-4xl font-bold text-primary">
                    <Counter end={item.value} />+
                  </div>
                  <p className="text-mayBe-900">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/images/about-us/iran.png"
              alt="Map"
              width={400}
              height={400}
              className="object-scale-down object-center"
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">به ما بپیوندید</h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-mayBe-800">
          ما در طبانو به دنبال افراد مستعدیم...
          <br />
          به طبانو بپیوندید تا تجربه‌ای بی‌نظیر از مراقبت و حمایت را در کنار
          یکدیگر تجربه کنیم.
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
