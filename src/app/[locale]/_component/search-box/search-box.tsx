"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CityModal from "../city-modal/city-modal";
import type { Location } from "../city-modal/types/api-response.model";

export const SearchBox: React.FC<{ locations: Location }> = ({ locations }) => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    en_slug: "tehran",
    name: "تهران",
  });

  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim()) {
      event.preventDefault();
      search();
    }
  };

  const search = () => {
    router.push(`/search/${selectedLocation.en_slug}/${query}#searchbox`);
  };

  return (
    <>
      <div className="flex h-full items-center justify-between rounded-4xl border-2 border-icon-500 bg-white-50 px-2 py-2 md:px-5">
        <div className="input-container flex flex-1 items-center gap-1 overflow-hidden md:gap-4">
          <Image
            src="/images/icons/search.svg"
            alt="search-icon"
            width={35}
            height={35}
            className="size-6 cursor-pointer md:size-7"
            onClick={search}
          />
          <input
            className="flex-1 border-none !outline-none md:text-xl"
            placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={handleKeyDown}
          />
        </div>

        <div className="ml-1 h-full w-0.5 bg-mayBe-700 md:ml-5"></div>

        <div
          className="select-box-container flex cursor-pointer items-center gap-1 md:gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/images/icons/location.svg"
            alt="location-icon"
            width={35}
            height={35}
            className="size-5 md:size-7"
          />
          <span className="md:text-xl">{selectedLocation.name}</span>
          <Image
            src="/images/icons/arrow.svg"
            alt="arrow-icon"
            width={30}
            height={30}
            className="size-5 translate-y-1 md:size-6"
          />
        </div>
      </div>

      <CityModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        locations={locations}
        setSelectedLocation={setSelectedLocation}
      />
    </>
  );
};
