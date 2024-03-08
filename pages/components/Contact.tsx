"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

import dynamic from "next/dynamic";
import ContactUsForm from "./ContactForm";

const DynamicLiveClock = dynamic(() => import("@/pages/components/LiveClock"), {
  ssr: false,
});

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative w-screen min-h-screen" id="contactMe">
      <h1
        id="contactSectionHeading"
        className="text-tertiary relative text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row px-[5vh] py-[5vh] w-screen h-auto  space-y-10 ">
        {/* Left Side */}
        <div className="flex flex-col group cursor-pointer gap-6  justify-start">
          <p className="font-semibold text-[7vw] md:text-[5vw]  text-accent leading-[1.2]">
            Want to work together?<br></br>Hit me up
          </p>
          <ContactUsForm />
        </div>
        {/* Right Side */}
        <div className="flex flex-col md:ml-[10vh]">
          <p className="font-medium text-[6vw] md:text-[5vw] lg:text-[4vw] leading-relaxed">
            Contact Details
          </p>
          <Link href="mailto:rmanivel@asu.edu" className="mb-5">
            <div className="flex flex-row items-center space-x-2">
              <p className="text-[4vw] md:text-[3vw] lg:text-[2vw] hover:font-medium transition-all duration-500 ease-in-out">
                rmanivel@asu.edu
              </p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <p className="font-medium text-[5vw] md:text-[3vw] leading-relaxed">
            Lets connect on my digital spaces
          </p>

          <div className="">
            <div className="flex flex-row items-center group cursor-pointer">
              <SocialIcon
                url="https://www.github.com/rohit-iwnl"
                bgColor="transparent"
                fgColor="#403D39"
                className=""
              />
              <Link href="https://www.github.com/rohit-iwnl">
                <p className="text-xl group-hover:font-medium transition-all duration-500 ease-in-out">
                  Github
                </p>
              </Link>
            </div>
            <div className="flex flex-row items-center group cursor-pointer">
              <SocialIcon
                url="https://www.linkedin.com/in/rohit-manivel/"
                bgColor="transparent"
                fgColor="#403D39"
                className=""
              />
              <Link href="https://www.linkedin.com/in/rohit-manivel/">
                <p className="text-xl group-hover:font-medium transition-all duration-500 ease-in-out">
                  LinkedIn
                </p>
              </Link>
            </div>
            <div className="flex flex-row items-center group cursor-pointer">
              <SocialIcon
                url="https://www.instagram.com/not_rohiit"
                bgColor="transparent"
                fgColor="#403D39"
                className=""
              />
              <Link href="https://www.instagram.com/not_rohiit">
                <p className="text-xl group-hover:font-medium transition-all duration-500 ease-in-out">
                  Instagram
                </p>
              </Link>
            </div>
          </div>
          <p className="font-medium text-[5vw] md:text-[4vw] lg:text-[3vw] leading-relaxed mb-5">
            Location
          </p>
          <p className="text-[4vw] md:text-[3vw] lg:text-[2vw] hover:font-medium transition-all duration-500 ease-in-out mb-5">
            Arizona,USA
          </p>
          <p className="font-medium text-[5vw] md:text-[4vw] lg:text-[3vw] leading-relaxed mb-5">
            Local Time
          </p>
          <DynamicLiveClock />
        </div>
        <div></div>
      </div>
      <p className="mb-10 w-full flex items-center text-center justify-center bottom-2">
        Made with ❤️️ and ofcouse Next.js, Tailwind CSS, Sanity and GSAP
      </p>
    </div>
  );
}
