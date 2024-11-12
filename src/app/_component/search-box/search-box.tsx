"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux-custom-hooks";
import { setSearchQuery } from "@/store/search.slice";
import { useRouter } from "next/navigation";

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim()) {
      router.push(`/search/${query}`);
    }
  };

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="flex h-full items-center justify-between rounded-4xl border-2 border-icon-500 bg-white-50 px-2 py-2 md:px-5">
      <div className="input-container flex flex-1 items-center">
        <Image
          src="/images/icons/search.svg"
          alt="search-icon"
          width={35}
          height={35}
          className="size-7"
        />
        <input
          className="border-none text-xl !outline-none"
          placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
          value={query}
          onChange={handleSearchQuery}
          onKeyUp={handleKeyDown}
        />
      </div>

      <div className="ml-1 h-full w-0.5 bg-mayBe-700 md:ml-5"></div>

      <div className="select-box-container flex cursor-pointer items-center gap-1 md:gap-2">
        <Image
          src="/images/icons/location.svg"
          alt="location-icon"
          width={35}
          height={35}
          className="size-7"
        />
        <span className="text-xl">اصفهان</span>
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow-icon"
          width={30}
          height={30}
          className="size-7"
        />
      </div>
    </div>
  );
};
