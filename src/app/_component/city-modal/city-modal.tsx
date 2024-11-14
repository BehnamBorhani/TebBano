"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Province } from "./types/province.model";
import { CityModalProps } from "./types/city-modal.types";

export default function CityModal({
  isOpen,
  setIsOpen,
  setSelectedLocation,
  locations,
}: CityModalProps) {
  const handleSelectCity = (province: Province) => {
    setSelectedLocation({ en_slug: province.en_slug, name: province.name });
    setIsOpen(false);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-lg font-medium">انتخاب شهر</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="جستجو در شهر ها"
                  className="border-gray-300 focus:ring-blue-500 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                />
              </div>

              {/* Cities List */}
              <div className="max-h-60 overflow-y-auto px-4">
                <ul>
                  {locations.province?.map((prov, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-100 flex cursor-pointer items-center justify-between border-b py-2 text-sm"
                      onClick={() => handleSelectCity(prov)}
                    >
                      {prov.name}
                      <span>←</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
