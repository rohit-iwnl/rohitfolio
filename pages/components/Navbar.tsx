"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import MobileNav from "./MobileNav";

type Props = {};

export default function Navbar({}: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag after hydration
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run GSAP animation on client side after hydration
    if (isClient) {
      gsap.to("#navbarContainer", {
        y: "0%",
        duration: 2.5,
        ease: "power4.inOut",
        delay: 0.75,
      });
    }
  }, [isClient]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Use a more direct approach
    const element = document.getElementById(sectionId);
    if (element) {
      const lenis = (window as any).lenisInstance;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      } else {
        // Fallback
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const handleMobileNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const lenis = (window as any).lenisInstance;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      } else {
        // Fallback
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <header
      className="fixed top-0 p-6 md:p-8 flex flex-row items-center justify-between w-screen max-h-[4vh] z-[999] transform -translate-y-full"
      id="navbarContainer"
    >
      {/* Logo */}
      <Link href="/">
        <h1 className="text-primary_dark text-md " id="navName">
          Rm
        </h1>
      </Link>
      
      {/* Desktop Links */}
      <nav className="hidden md:flex flex-row gap-5 items-center justify-center">
        <button onClick={(e) => handleNavClick(e, "aboutContainer")} id="navAbout">
          <p className="text-primary_dark font-medium">About</p>
        </button>
        <button onClick={(e) => handleNavClick(e, "projectsContainer")} id="navProjects">
          <p className="text-primary_dark font-medium">Projects</p>
        </button>
        <Link href="/blog" id="navBlog">
          <p className="text-primary_dark font-medium">Blog</p>
        </Link>
        <button onClick={(e) => handleNavClick(e, "contactMe")}>
          <p
            className="cursor-pointer bg-primary_dark text-primary rounded-full hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out hover:font-semibold hover:px-3 p-2"
            id="navContact"
          >
            Lets Talk
          </p>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <MobileNav onNavigate={handleMobileNavigation} />
    </header>
  );
}
