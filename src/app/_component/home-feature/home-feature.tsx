import Image from "next/image";
import React from "react";
import { MyButton } from "../button/MyButton";

const HomeFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex w-1/2 flex-col items-center gap-5 lg:flex-1 ">
      <Image
        src={feature.icon}
        width={91}
        height={91}
        className="size-20"
        alt="feature-icon"
      />

      <h3 className="text-2xl font-bold text-primary-400">{feature.title}</h3>

      <p className="hidden text-center text-xl lg:block">
        {feature.description}
      </p>

      <MyButton color="primary" variant="bordered" radius="full">
        {feature.action}
      </MyButton>
    </div>
  );
};

export default HomeFeature;
