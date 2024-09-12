import React from "react";
import { Input } from "../input";
import Image from "next/image";

export const SearchBox: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-between rounded-4xl border-2 border-icon-500 bg-white-50 px-8 py-2">
      <div className="input-container flex flex-1 items-center">
        <Image
          src="/images/icons/search.svg"
          alt="search-icon"
          width={35}
          height={35}
        />
        <Input
          color="primary"
          className="border-none text-xl !outline-none"
          placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        />
      </div>

      <div className="ml-5 h-full w-0.5 bg-mayBe-700"></div>

      <div className="select-box-container flex items-center gap-5">
        <Image
          src="/images/icons/location.svg"
          alt="location-icon"
          width={35}
          height={35}
        />
        <span className="text-xl">اصفهان</span>
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow-icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
