import React, { useEffect, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import SplitType from "split-type";

type Props = {};

export default function Summary({}: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    const summarytextSplit = new SplitType("#summaryText", { types: "words" });
    gsap.to(".word", {
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "40% 75%",
        end: "center center",
        scrub: true,
        toggleActions: "play none none reverse",
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
            I also create interactive experiences for the web.
          </p>
        </div>
      </div>
    </div>
  );
}
