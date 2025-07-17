"use client";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const MiniSearchBox = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim()) {
      event.preventDefault();
      search();
    }
  };

  const search = () => {
    router.push(`/search/tehran/${query}#searchbox`);
  };

  return (
    <Input
      type="text"
      placeholder="جستجو براساس موضوع"
      radius="full"
      fullWidth
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      onKeyUp={handleKeyDown}
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
  );
};
