import gsap from "gsap";
import React, { useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
export default function Hero({}: Props) {
  const mainRef = useRef(null);
  useEffect(() => {
    gsap.to("#heroImage", {
      scale: 0.7,
      duration: 2,
      delay:0.3,
      ease: "power4.inOut",
      filter: "blur(20px)",
    });

    gsap.to("#heroTextContainer", {
      y: "0%",
      color: "white",
      duration: 2.5,
      ease: "power4.inOut",
      delay: 1,
    });
    gsap.to("#mainContainer", {
      backgroundColor: "#252422",
      duration: 2.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "bottom 70%",
        end: "bottom top",
        scrub: true,

        onEnter: () => {
        },
        onLeave: () => {
          gsap.to("#mainContainer", {
            backgroundColor: "#fffcf2",
            duration: 2.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: "#summaryContainer",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      },
    });
  }, []);
  return (
    <div
      className="relative h-screen w-screen z-[1]"
      id="heroSection"
      ref={mainRef}
    >
      {/* Hero Image */}
      <div className="object-cover w-full h-full absolute flex items-center justify-center z-[-20]">
        <Image
          src="/assets/images/hero.webp"
          alt="Photo of me"
          layout="fill"
          objectFit="cover"
          id="heroImage"
        />
      </div>
      {/* Middle Text*/}
      <div className="h-screen w-screen flex items-center justify-center max-w-full absolute">
        <div className="overflow-hidden">
          <h1
            className="outline_sm md:outline_lg text-[10vw] py-5 text-transparent transform translate-y-full"
            id="heroTextContainer"
          >
            Hey, I&apos;m Rohit
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
    </div>
  );
}
