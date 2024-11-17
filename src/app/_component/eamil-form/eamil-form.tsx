"use client";

import React, { useState } from "react";
import { MyButton } from "../button/MyButton";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = async () => {
    if (!email.trim()) {
      toast.error("لطفا ایمیل خود را وارد نمایید!");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("ایمیل وارد شده نامعتبر است!");
      return;
    }

    const toastId = toast.loading("در حال ارسال ایمیل..."); // Show loading toast

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.update(toastId, {
          render: "ایمیل شما با موفقیت ثبت شد.",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setEmail(""); // Clear the input field
      } else {
        toast.update(toastId, {
          render:
            result.message ||
            "خطایی در ارسال ایمیل رخ داده است! لطفا مجددا تلاش کنید.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.update(toastId, {
        render: "خطایی در ارسال ایمیل رخ داده است! لطفا مجددا تلاش کنید.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <MyButton
        color="secondary"
        radius="full"
        size="lg"
        className="mr-auto px-6 py-2.5 text-xl font-bold"
        onClick={sendEmail}
      >
        <Image
          src="/images/icons/send.svg"
          alt="send-icon"
          width={25}
          height={25}
        />
        ارسال
      </MyButton>

      <input
        type="text"
        className="flex-1 rounded-full px-6 py-2 text-mayBe-900"
        placeholder="example@gmail.com"
        dir="ltr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        tabIndex={-1}
      />
    </>
  );
}
