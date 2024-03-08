"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";



type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    words: [
      "skateboard around the city",
      "swim",
      "solve a lot of cubes",
      "learn how to center a div",
      "gulp down a cup of coffee and sit down to code my side projects",
      'watch "Silicon Valley" for the 100th time',
      "headbang to eden music",
      "am committing thousands of lines of code saying 'fixed a typo'",
      "am trying to figure out how to make my website look better",
      "Improving PitchForkPilot",
      ""
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const aboutSection = useRef(null);
  const aboutSectionImage = useRef(null);
  
  return (
    <div
    ref={aboutSection}
      className="relative min-h-screen w-screen"
      id="aboutContainer"
    >
      {/* Section Heading */}
      <div className="flex items-center justify-center">
        <h1
          id="aboutSectionHeading"
          className="text-tertiary font-bold text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
        >
          About Me
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* About Section Photo */}
        <div className="w-[100vw] min-h-[50vh] md:w-[95vw] md:min-h-[100vh] px-[5vh] py-[2vh]">
          <Image
            ref={aboutSectionImage}
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
        <div
          className="flex items-start w-screen min-h-[50vh]  flex-col md:h-screen md:max-h-[100vh] justify-start p-[5vh] gap-[1rem]"
          id="aboutMe"
        >
          <h2 className=" md:text-[1.7rem] lg:text-[2.2rem] xl:text-[3rem] text-tertiary">
            Let me spill something about myself
          </h2>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            My name is{" "}
            <span className="md:text-[1.3rem] lg:text-[1.5rem] font-medium">
              Rohit Manivel
            </span>
            . I am a creative and passionate developer who loves to build
            interactive experiences for the web based in Arizona, USA. I study
            MS in Computer Science at{" "}
            <span className="underline decoration-accent font-medium md:text-[1.3rem] lg:text-[1.5rem] ">
              Arizona State University.
            </span>
            &nbsp;Go Sun Devils!
          </p>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            I have always had a knack for solving problems with code and design.
            My core interests are Front-End development and Mobile Applications
            Development. I don&apos;t necessarily shy away from backend and also
            to catch the hype train to learn the new frameworks and technologies
            that will help me expand my software engineering horizon.
          </p>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            {" "}
            I interned at Rubrik Inc. for 5 months as Customer Success Engineer
            back in Bengaluru, India . I am currently on the lookout of software
            engineering Summer 2024 interships opportunities. Please do reach
            out to me if you think I&apos;ll be a good fit in your team. Also I
            would never say no to referrals{" "}
            <span className="md:text-[1.3rem] lg:text-[1.5rem]">😉</span>
          </p>

          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            The times I&apos;m not worrying about projects and deadlines, I{" "}
            <span className="text-accent font-medium text-start  md:text-[1.3rem] lg:text-[1.5rem]">
              {text}
              <Cursor cursorBlinking cursorColor="#252422" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
