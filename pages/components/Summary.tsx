import React, { useEffect, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import SplitType from "split-type";
import { Duru_Sans } from "next/font/google";

type Props = {};
gsap.registerPlugin(ScrollTrigger);

export default function Summary({}: Props) {
  useEffect(() => {
    const summarytextSplit = new SplitType("#summaryText", { types: "words" });
    gsap.to(".word", {
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "20% 75%",
        end: "center center",
        scrub: true,
        toggleActions:"play none none reverse",
      },
      color: "#EB5E28",
      stagger: 0.1,
      duration: 0.5,

    });
  }, []);
  return (
    <div className="h-screen w-screen relative" id="summaryContainer">
      <div className="h-full w-full flex items-center justify-center p-4 ">
        <div className="min-h-[80%] flex max-h-[80%] max-w-[90%] min-w-[80%] mx-auto items-start justify-center overflow-hidden flex-col">
          <p
            className=" leading-normal  text-secondary max-h-full text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[6vw]"
            id="summaryText"
          >
            I&apos;m a CS student at ASU. I solve problems with code and design.
            I also create interactive experiences for the web
          </p>
        </div>
      </div>
    </div>
  );
}
