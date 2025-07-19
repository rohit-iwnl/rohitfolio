import { useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag after hydration
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only initialize Lenis on client side after hydration
    if (!isClient) return;

    // Check if mobile for optimized settings
    const isMobile = window.innerWidth < 768;
    
    const lenis = new Lenis({ 
      autoResize: true, 
      lerp: isMobile ? 0.08 : 0.05, // Slightly higher lerp on mobile for smoother feel
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, [isClient]);

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
