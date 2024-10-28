import { Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <section className="absolute bottom-0 w-full bg-[#7774BA]">
        <div className="z-30 flex items-center justify-center rounded-t-3xl bg-white-50 pb-5 shadow-2xl md:rounded-t-4xl">
          <div className="container items-center justify-center gap-8 px-10 md:flex md:py-10">
            <div className="flex-1 space-y-2 pb-4">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/logo-icon.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-16"
                />
                <Image
                  src="/images/brand-logo.png"
                  alt="logo"
                  width={138}
                  height={55}
                  className="h-12 w-28"
                />
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div className="flex-1 space-y-6">
                <span className="text-icon-300">دسترسی سریع</span>
                <ul className="space-y-4">
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>بلاگ ها</li>
                </ul>
              </div>

              <div className="flex-1 space-y-6">
                <span className="text-icon-300">لینک های کمکی</span>
                <ul className="space-y-4">
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>بلاگ ها</li>
                </ul>
              </div>

              <div className="flex-[2] space-y-6">
                <span className="text-icon-300">جستجو</span>
                <Input
                  type="text"
                  placeholder="جستجو براساس موضوع"
                  radius="full"
                  fullWidth
                  className=""
                  endContent={
                    <Image
                      src="/images/icons/search.svg"
                      width={25}
                      height={25}
                      className="pointer-events-none flex-shrink-0 text-2xl text-default-400"
                      alt="search-icon"
                    />
                  }
                />
                <div className="child:cursor-pointer flex items-center gap-2">
                  <a href="mailto:info@dejavureve.com">
                    <Image
                      src="/images/icons/mail.svg"
                      width={25}
                      height={25}
                      alt="mail-icon"
                    />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=+989365041466&text=با سلام برای دریافت نوبت دکتر مزاحم شدم`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/icons/whatsapp.png"
                      width={25}
                      height={25}
                      alt="whatsapp-icon"
                    />
                  </a>
                  <a href="tel:+989365041466">
                    <Image
                      src="/images/icons/call.png"
                      width={25}
                      height={25}
                      alt="call-icon"
                    />
                  </a>
                  <a href="">
                    <Image
                      src="/images/icons/instagram.svg"
                      width={25}
                      height={25}
                      alt="mail-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
