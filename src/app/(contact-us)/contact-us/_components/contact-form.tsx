"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyButton } from "@/app/_component/button/MyButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the form inputs' types
interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const toastId = toast.loading("در حال ارسال پیام..."); // Show loading toast

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.update(toastId, {
          render: "پیام شما با موفقیت ارسال شد.",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        reset(); // Reset the form fields
      } else {
        const result = await response.json();
        toast.update(toastId, {
          render:
            result.message ||
            "خطایی در ارسال پیام رخ داده است! لطفا دوباره تلاش کنید.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.update(toastId, {
        render: "خطایی در ارسال پیام رخ داده است! لطفا دوباره تلاش کنید.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:p-24"
        noValidate
      >
        <div className="items-center justify-between gap-16 space-y-8 md:flex md:space-y-0">
          <div className="flex flex-1 flex-col gap-5">
            <label htmlFor="firstName" className="text-2xl text-icon-500">
              نام
            </label>
            <input
              {...register("firstName", { required: "نام الزامی است" })}
              className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
              placeholder="نام"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <label htmlFor="lastName" className="text-2xl text-icon-500">
              نام خانوادگی
            </label>
            <input
              {...register("lastName", { required: "نام خانوادگی الزامی است" })}
              className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
              placeholder="نام خانوادگی"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <label htmlFor="email" className="text-2xl text-icon-500">
            ایمیل
          </label>
          <input
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "فرمت ایمیل نامعتبر است",
              },
            })}
            className="rounded-full px-6 py-4 placeholder:text-mayBe-700"
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <label htmlFor="message" className="text-2xl text-icon-500">
            پیام شما
          </label>
          <textarea
            {...register("message", { required: "پیام الزامی است" })}
            className="rounded-3xl px-6 py-4 placeholder:text-mayBe-700 md:rounded-4xl"
            rows={10}
            placeholder="پیام مورد نظر خود را وارد نمایید تا در اولین فرصت همکاران ما با شما ارتباط بگیرند!"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <MyButton
          color="primarySolid"
          fullWidth
          radius="full"
          size="lg"
          className="mt-20"
          type="submit"
        >
          ثبت نظر شما
        </MyButton>
      </form>
    </>
  );
}

export default ContactForm;
