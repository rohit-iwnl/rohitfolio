import { useEffect, useLayoutEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import { clashGrotesk, generalSans } from "@/public/utils/FontLoader";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import About from "./components/About";

import Projects from "./components/Projects";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const DynamicSummary = dynamic(() => import("@/pages/components/Summary"), {
  ssr: false,
});

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.reset();
  },[]);
  return (
    <div className={`${generalSans.variable} ${clashGrotesk.variable}`}>
      <Navbar />
      <main className=" w-screen" id="mainContainer">
        <Hero />
        <DynamicSummary />
        <About />
        <Projects />
      </main>
    </div>
  );
}
