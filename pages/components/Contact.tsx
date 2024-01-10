import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative w-screen min-h-screen">
      <h1
        id="contactSectionHeading"
        className="text-tertiary relative text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row px-[10vh] py-[5vh]">
        {/* Left Side */}
        <div className="flex flex-col grou cursor-pointer items-center justify-center">
          <h2 className="font-semibold text-center text-[2vw]">My Email Address</h2>
          <p>rmanivel@asu.edu</p>
        </div>
        {/* Right Side */}
        <div>Right</div>
      </div>
    </div>
  );
}
