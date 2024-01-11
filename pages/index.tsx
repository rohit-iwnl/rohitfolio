import { useEffect, useLayoutEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import { clashGrotesk, generalSans } from "@/public/utils/FontLoader";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import About from "./components/About";
import Projects from "./components/Projects";
import Toolbox from "./components/Toolbox";
import Contact from "./components/Contact";

const DynamicSummary = dynamic(() => import("@/pages/components/Summary"), {
  ssr: false,
});

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis({ autoResize: true, lerp: 0.05 });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`${generalSans.variable} ${clashGrotesk.variable}`}>
      {/* <DyanmicHelloAnimation /> */}
      <Navbar />
      <main className=" w-screen" id="mainContainer">
        <Hero />
        <DynamicSummary />
        <About />
        <Toolbox />
        <Projects />

        <Contact />
      </main>
    </div>
  );
}
