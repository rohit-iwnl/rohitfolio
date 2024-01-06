import React, { useEffect, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import SplitType from "split-type";

type Props = {};

export default function Summary({}: Props) {
  useEffect(() => {
    const summarytextSplit = new SplitType("#summaryText", { types: "words" });

    gsap.to("#mainContainer", {
      backgroundColor: "#252422",
      ease: "power4.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "top 80%",
        end: "20% 40%",
        scrub: true,
        markers: true,
      },
    });
    gsap.to("#navContact", {
      backgroundColor: "#EB5E28",
      color: "#403D39",
      ease: "power4.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "top 80%",
        end: "20% 40%",
        scrub: true,
        markers: true,
      },
    });
    gsap.to("#navAbout", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "top 80%",
        end: "20% 40%",
        scrub: true,
        markers: true,
      },
      ease: "power4.inOut",
    });
    gsap.to("#navProjects", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "top 80%",
        end: "20% 40%",
        scrub: true,
        markers: true,
      },
      ease: "power4.inOut",
    });

    gsap.to(".word", {
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "30% 70%",
        end: "center center",
        scrub: true,
      },
      color: "#EB5E28",
      stagger: 0.1,
      duration: 0.5,
    });
    gsap.to("#asuText", {
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "30% 70%",
        end: "center center",
        scrub: true,
      },
      color: "#8C1D40",
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="h-screen w-screen relative" id="summaryContainer">
      <div className="h-full w-full flex items-center justify-center p-4 ">
        <div className="min-h-[80%] flex max-h-[80%] max-w-[90%] min-w-[80%] mx-auto items-center justify-center overflow-hidden">
          <p
            className=" leading-normal  text-tertiary max-h-full text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[6vw]"
            id="summaryText"
          >
            I&apos;m a CS student at ASU. I solve problems with code and design. I also create interactive
            experiences for the web.
          </p>
        </div>
      </div>
    </div>
  );
}
