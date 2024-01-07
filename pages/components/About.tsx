"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

export default function About({}: Props) {
  const aboutSection = useRef(null);
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: aboutSection.current,
  //     start: "top bottom",
  //     animation: gsap.timeline().fromTo(
  //       "#mainContainer",
  //       {
  //         backgroundColor: "#252422",
  //       },
  //       {
  //         backgroundColor: "#fffcf2",
  //       }
  //     ),
  //   });
  // }, [aboutSection]);
  return (
    <div
      ref={aboutSection}
      className="relative h-screen w-screen flex flex-col md:flex-row gap-5 items-center"
      id="aboutContainer"
    >
      {/* About Section Photo */}
      <div className="w-[100vw] h-[50vh] md:w-[50vw] md:h-[100vh] p-[5vh]">
        <Image
          src="/assets/images/about.webp"
          alt="Photo of Rohit"
          width={0}
          height={0}
          sizes="50vw"
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            objectFit: "cover",
          }}
          className="rounded-xl shadow-2xl"
        />
      </div>

      {/* About Me */}
      <div className="max-w-[60vw] max-h-screen">
        <p>I&apos;m Rohit Manivel, A </p>
      </div>
    </div>
  );
}
