import Image from "next/image";
import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <section className="bg-accent-300 h-full place-content-center">
        <div className="container flex items-center justify-between">
          <div className="title text-white">
            <h1 className="text-6xl">The Man is Hacking</h1>
          </div>
          <div className="size-96">
            <Image
              src={"/images/man-programming.jpg"}
              alt="man-programming"
              width={700}
              height={700}
              className="hero rounded-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
