"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    sectionId: "aboutContainer",
  },
  {
    title: "Projects",
    sectionId: "projectsContainer",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    sectionId: "contactMe",
  },
];

interface MobileNavProps {
  onNavigate?: (sectionId: string) => void;
}

function MobileNav({ onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleNavClick = (sectionId?: string, href?: string) => {
    if (href) {
      // External navigation (like blog)
      setOpen(false);
      return;
    }
    
    if (sectionId && onNavigate) {
      onNavigate(sectionId);
      setOpen(false);
    }
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div
        className="cursor-pointer md:hidden font-semibold z-[1000] relative"
        onClick={toggleMenu}
      >
        <svg
          aria-label="Open Menu"
          className="h-6 w-6 text-primary_dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary_dark text-accent p-10 z-[999]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-accent text-2xl font-bold">Rm</h1>
                <svg
                  aria-label="Close Menu"
                  onClick={toggleMenu}
                  className="h-6 w-6 cursor-pointer text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-8"
              >
                {navLinks.map((link, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <MobileNavLink
                      title={link.title}
                      href={link.href}
                      sectionId={link.sectionId}
                      onClick={() => handleNavClick(link.sectionId, link.href)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;

const MobileNavLink = ({ 
  title, 
  href, 
  sectionId, 
  onClick 
}: { 
  title: string; 
  href?: string; 
  sectionId?: string;
  onClick: () => void;
}) => {
  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  if (href) {
    return (
      <motion.div
        variants={linkVariants}
        >
        <Link 
          aria-label={title} 
          href={href} 
          onClick={onClick}
          className="uppercase text-accent text-4xl font-bold hover:text-primary transition-colors duration-300"
        >
          {title}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={linkVariants}
      className="uppercase text-accent text-4xl font-bold hover:text-primary transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {title}
    </motion.div>
  );
}; 