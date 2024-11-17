import React from "react";
import { Avatar } from "@/app/_component/avatar";
import ContactForm from "./_components/contact-form";

const ContactUs = () => {
  return (
    <div className={"min-h-screen space-y-8 bg-[#E6E6EE] md:flex"}>
      <div className="start container flex-1 md:h-[1000px]">
        <ContactForm />
      </div>

      <div className="end relative h-[1000px] flex-1 overflow-hidden rounded-2xl bg-white-50 bg-logo bg-right bg-no-repeat shadow-2xl child:scale-150">
        <div className="absolute top-1/2 size-[550px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset md:size-[800px]">
          <div className="relative size-full animate-clockwise">
            <Avatar
              src={"/images/doctors/23.webp"}
              size="small"
              className="absolute left-1/4 top-0 -rotate-25"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="absolute right-1/4 top-0 rotate-25"
            />

            <Avatar
              src={"/images/doctors/24.webp"}
              size="small"
              className="absolute right-0 top-1/4 rotate-65"
            />

            <Avatar
              src={"/images/doctors/6.webp"}
              size="small"
              className="absolute bottom-1/4 right-0 rotate-115"
            />

            <Avatar
              src={"/images/doctors/7.webp"}
              size="small"
              className="absolute bottom-0 right-1/4 rotate-155"
            />

            <Avatar
              src={"/images/doctors/8.webp"}
              size="small"
              className="absolute bottom-0 left-1/4 -rotate-155"
            />

            <Avatar
              src={"/images/doctors/9.webp"}
              size="small"
              className="absolute bottom-1/4 left-0 -rotate-115"
            />

            <Avatar
              src={"/images/doctors/10.webp"}
              size="small"
              className="absolute left-0 top-1/4 -rotate-65"
            />
          </div>
        </div>

        <div className="absolute top-1/2 size-[400px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset md:size-[600px]">
          <div className="relative size-full animate-anticlockwise">
            <Avatar
              src={"/images/doctors/11.webp"}
              size="small"
              className="absolute left-1/4 top-0 -rotate-25"
            />

            <Avatar
              src={"/images/doctors/12.webp"}
              size="small"
              className="absolute right-1/4 top-0 rotate-25"
            />

            <Avatar
              src={"/images/doctors/13.webp"}
              size="small"
              className="absolute right-0 top-1/4 rotate-65"
            />

            <Avatar
              src={"/images/doctors/14.webp"}
              size="small"
              className="absolute bottom-1/4 right-0 rotate-115"
            />

            <Avatar
              src={"/images/doctors/15.webp"}
              size="small"
              className="absolute bottom-0 right-1/4 rotate-155"
            />

            <Avatar
              src={"/images/doctors/16.webp"}
              size="small"
              className="absolute bottom-0 left-1/4 -rotate-155"
            />

            <Avatar
              src={"/images/doctors/17.webp"}
              size="small"
              className="absolute bottom-1/4 left-0 -rotate-115"
            />

            <Avatar
              src={"/images/doctors/18.webp"}
              size="small"
              className="absolute left-0 top-1/4 -rotate-65"
            />
          </div>
        </div>

        <div className="absolute top-1/2 size-[250px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset  md:size-[400px]">
          <div className="relative size-full animate-clockwise">
            <Avatar
              src={"/images/doctors/19.webp"}
              size="small"
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            />

            <Avatar
              src={"/images/doctors/20.webp"}
              size="small"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90"
            />

            <Avatar
              src={"/images/doctors/21.webp"}
              size="small"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180"
            />

            <Avatar
              src={"/images/doctors/22.webp"}
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
