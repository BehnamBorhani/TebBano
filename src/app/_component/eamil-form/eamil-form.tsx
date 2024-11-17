"use client";

import React, { useState } from "react";
import { MyButton } from "../button/MyButton";
import Image from "next/image";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }

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
        setMessage("Email sent successfully!");
        setEmail("");
      } else {
        setMessage(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");
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
      {message && <p className="mt-4 text-center">{message}</p>}
    </>
  );
}
