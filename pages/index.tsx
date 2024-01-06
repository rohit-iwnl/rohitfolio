import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import { clashGrotesk,generalSans } from "@/public/utils/FontLoader";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import dynamic from "next/dynamic";

const DynamicSummary = dynamic(() => import("@/pages/components/Summary"),{ssr:false})

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`${generalSans.variable} ${clashGrotesk.variable}`}>
      <Navbar />
      <main className=" w-screen" id="mainContainer">
        <Hero />
        <DynamicSummary />
      </main>
    </div>
  );
}
