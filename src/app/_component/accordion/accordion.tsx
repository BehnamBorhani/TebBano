"use client";
import React, { useState } from "react";
import { AccordionProps } from "./accordion.types";
import Image from "next/image";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={`accordion-${item.id}`}
            className={`overflow-hidden rounded-xl shadow`}
          >
            <h2 className={`accordion-title ${isActive && "border-b-1"}`}>
              <button onClick={() => toggleAccordion(index)} type="button">
                <div className="flex items-center justify-center gap-4">
                  <Image src={item.icon!} alt="Icon" width={24} height={24} />
                  <span>{item.title}</span>
                </div>
                <Image
                  src="/images/icons/arrow.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className={`transition-all duration-100 ${isActive && "!rounded-b-0 rotate-180"}`}
                />
              </button>
            </h2>
            <div className={`accordion-content ${isActive && "active"}`}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
