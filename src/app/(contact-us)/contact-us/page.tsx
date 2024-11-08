import React from "react";
import { Avatar } from "@/app/_component/avatar";

const ContactUs = () => {
  return (
    <div className={"flex min-h-screen bg-white-50 "}>
      <div className="start h-[1000px] flex-1 bg-primary-50"></div>
      <div className="end relative h-[1000px] flex-1 overflow-hidden  bg-white-50 shadow-2xl child:scale-150">
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

        <div className="absolute top-1/2 size-[600px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset">
          <div className="relative size-full animate-anticlockwise">
            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="-rotate-25 absolute left-1/4 top-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-25 absolute right-1/4 top-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="rotate-65 absolute right-0 top-1/4"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-115 absolute bottom-1/4 right-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-155 absolute bottom-0 right-1/4"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="-rotate-155 absolute bottom-0 left-1/4"
            />

            <Avatar
              src={"/images/doctors/male doctor 1.png"}
              size="small"
              className="-rotate-115 absolute bottom-1/4 left-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="-rotate-65 absolute left-0 top-1/4"
            />
          </div>
        </div>

        <div className="absolute top-1/2 size-[800px] -translate-y-1/2 translate-x-1/2 rounded-full border-dash-offset">
          <div className="relative size-full animate-clockwise">
            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="-rotate-25 absolute left-1/4 top-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-25 absolute right-1/4 top-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="rotate-65 absolute right-0 top-1/4"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-115 absolute bottom-1/4 right-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 2.png"}
              size="small"
              className="rotate-155 absolute bottom-0 right-1/4"
            />

            <Avatar
              src={"/images/doctors/female doctor 1.png"}
              size="small"
              className="-rotate-155 absolute bottom-0 left-1/4"
            />

            <Avatar
              src={"/images/doctors/male doctor 1.png"}
              size="small"
              className="-rotate-115 absolute bottom-1/4 left-0"
            />

            <Avatar
              src={"/images/doctors/female doctor 3.png"}
              size="small"
              className="-rotate-65 absolute left-0 top-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
