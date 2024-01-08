import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="relative h-screen w-screen p-[5vh]">
      {/* Left Side Div */}
      <h1
        id="aboutSectionHeading"
        className="text-tertiary text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Projects
      </h1>
      <div className="flex items-center justify-center w-full h-full">
        <h1>Projects here</h1>
      </div>
    </div>
  );
}
