import { Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MyButton } from "../button/MyButton";

export const Footer: React.FC = () => {
  return (
    <>
      <section className="bg-transparent pb-[28rem] text-white-50 md:pb-60">
        <div className="bg-logo2 md:y-20 z-20 flex items-center justify-center rounded-t-3xl pb-20 pt-10 shadow-2xl md:rounded-t-4xl">
          <div className="container flex flex-col items-center justify-center gap-4 px-10 md:gap-8 md:pt-10">
            <h2 className="border-b-2 border-white-50 pb-4 text-2xl font-bold md:text-4xl">
              با ما در ارتباط باشید
            </h2>
            <p className="text-center text-lg font-light md:text-xl">
              مقاله های ماهانه ما باعث میشود شما درباره لایف استایل، آخرین اخبار
              دنیای پزشکی و تلاش های ما برای بهبود دسترسی کاربران باخبر شوید
            </p>
            <div className="flex scale-90 gap-4 md:w-1/2 md:scale-100">
              <MyButton
                color="secondary"
                radius="full"
                size="lg"
                className="mr-auto px-6 py-2.5 text-xl font-bold"
              >
                <Image
                  src="/images/icons/send.svg"
                  alt="send-icon"
                  width={25}
                  height={25}
                />
                ارسال
              </MyButton>
              <input
                type="text"
                className="flex-1 rounded-full px-6 py-2 text-mayBe-900"
                placeholder="example@gmail.com"
                dir="ltr"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="absolute bottom-0 w-full bg-[#7774BA]">
        <div className="z-30 flex items-center justify-center rounded-t-3xl bg-white-50 pb-5 shadow-2xl md:rounded-t-4xl">
          <div className="container items-center justify-center gap-16 px-10 md:flex md:py-10">
            <div className="flex-1 space-y-2 py-4 md:pt-0">
              <div className="flex items-center justify-center gap-1 md:justify-start">
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
              <p className="text-center md:text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>

            <div className="flex-[2] items-center justify-between md:flex">
              <div className="flex flex-1 items-center justify-between text-center md:text-start">
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
              </div>

              <div className="flex-1 space-y-6">
                <span className="hidden text-icon-300 md:block">جستجو</span>
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
                <div className="flex items-center justify-end gap-6 child:cursor-pointer">
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
