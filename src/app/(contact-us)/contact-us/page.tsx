import React from "react";
import { Avatar } from "@/app/_component/avatar";
import { MyButton } from "@/app/_component/button/MyButton";

const ContactUs = () => {
  return (
    <div className={"flex min-h-screen bg-[#E6E6EE]"}>
      <div className="start h-[1000px] flex-1">
        <form action="" className="space-y-6 p-24">
          <div className="items-center justify-between gap-16 md:flex">
            <div className="flex flex-1 flex-col gap-5">
              <label htmlFor="" className="text-2xl text-icon-500">
                نام
              </label>
              <input
                className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
                placeholder="نام"
              />
            </div>

            <div className="flex flex-1 flex-col gap-5">
              <label htmlFor="" className="text-2xl text-icon-500">
                نام خانوادگی
              </label>
              <input
                className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
                placeholder="نام خانوادگی"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <label htmlFor="" className="text-2xl text-icon-500">
              ایمیل
            </label>
            <input
              className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <label htmlFor="" className="text-2xl text-icon-500">
              پیام شما
            </label>
            <textarea
              className="rounded-4xl px-6 py-4 placeholder:text-mayBe-700"
              rows={10}
              placeholder="پیام مورد نظر خود را وارد نمایید تا در اولین فرصت همکاران ما با شما ارتباط بگیرند!"
            />
          </div>

          <MyButton
            color="primarySolid"
            fullWidth
            radius="full"
            size="lg"
            className="mt-20"
          >
            ثبت نظر شما
          </MyButton>
        </form>
      </div>

      <div className="end relative h-[1000px] flex-1 overflow-hidden rounded-2xl bg-white-50 bg-logo bg-right bg-no-repeat shadow-2xl child:scale-150">
        <div className="absolute top-1/2 size-[800px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset">
          <div className="relative size-full animate-clockwise">
            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute left-1/4 top-0 -rotate-25"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute right-1/4 top-0 rotate-25"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="absolute right-0 top-1/4 rotate-65"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute bottom-1/4 right-0 rotate-115"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute bottom-0 right-1/4 rotate-155"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute bottom-0 left-1/4 -rotate-155"
            />

            <Avatar
              src={"/images/doctors/male doctor 1.png"}
              size="small"
              className="absolute bottom-1/4 left-0 -rotate-115"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="absolute left-0 top-1/4 -rotate-65"
            />
          </div>
        </div>

        <div className="absolute top-1/2 size-[600px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset">
          <div className="relative size-full animate-anticlockwise">
            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute left-1/4 top-0 -rotate-25"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute right-1/4 top-0 rotate-25"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="absolute right-0 top-1/4 rotate-65"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute bottom-1/4 right-0 rotate-115"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute bottom-0 right-1/4 rotate-155"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute bottom-0 left-1/4 -rotate-155"
            />

            <Avatar
              src={"/images/doctors/male doctor 1.png"}
              size="small"
              className="absolute bottom-1/4 left-0 -rotate-115"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="absolute left-0 top-1/4 -rotate-65"
            />
          </div>
        </div>

        <div className="absolute top-1/2 size-[400px] -translate-y-1/2 translate-x-1/2 rounded-full  border-dash-offset">
          <div className="relative size-full animate-clockwise">
            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
