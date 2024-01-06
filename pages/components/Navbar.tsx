import Link from "next/link";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";

type Props = {};

export default function Navbar({}: Props) {
  useLayoutEffect(() => {
    gsap.to("#navbarContainer", {
      y: "0%",
      duration: 2,
      ease: "power4.inOut",
      delay: 0.5,
    });
  }, []);
  return (
    <header
      className="fixed top-0 p-8 flex flex-row items-center justify-between w-screen max-h-[4vh] z-[999] transform -translate-y-full"
      id="navbarContainer"
    >
      {/* Logo */}
      <h1>Rohit Manivel</h1>
      {/* Links */}
      <nav className="hidden md:flex flex-row gap-5 items-center justify-center">
        <Link href="#about" id="navAbout">
          <p>About</p>
        </Link>
        <Link href="#projects" id="navProjects">
          <p>Projects</p>
        </Link>
        <Link href="#contact">
          <p className="cursor-pointer bg-primary_dark text-primary rounded-full hover:bg-accent hover:text-primary transition-all duration-300 ease-in-out hover:font-semibold hover:px-3 p-2" id="navContact">
            Contact Me
          </p>
        </Link>
      </nav>
    </header>
  );
}
