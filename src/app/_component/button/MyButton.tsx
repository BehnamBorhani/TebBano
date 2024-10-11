"use client";
import { Button, extendVariants } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      primary:
        "border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white-100",
      icon: "border-icon-500 text-icon-500 hover:bg-icon-500 hover:text-white-100",
      third:
        "border-third-500 text-third-500 hover:bg-third-500 hover:text-white-100",
    },
  },
});
