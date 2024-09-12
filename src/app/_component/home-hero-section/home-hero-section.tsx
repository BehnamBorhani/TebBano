import React from "react";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="container mt-5 flex min-h-screen flex-col justify-center bg-hero-doctor bg-contain bg-center bg-no-repeat md:bg-left xl:mt-32">
      <div className="w-1/2 space-y-4">
        <h1 className="text-5xl font-bold">
          کنارتان هستیم با بهترین{" "}
          <span className="text-third-600">متخصصان</span>
        </h1>
        <p className="text-2xl font-medium text-mayBe-800">
          در طبانو ما بهترین متخصصان را در سراسر کشور دورهم جمع کرده ایم
          <br />
          تا بهترین خدمات را به شما ارایه دهیم.
        </p>
      </div>
    </section>
  );
};
