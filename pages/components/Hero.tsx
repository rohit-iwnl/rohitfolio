import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
type Props = {};

export default function Hero({}: Props) {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    
    // Check if mobile for performance optimization only
    const isMobile = window.innerWidth < 768;
    const scrubValue = isMobile ? 1 : true;
    
    gsap.to("#heroImage", {
      scale: 0.7,
      duration: 2,
      delay: 0.3,
      ease: "power4.inOut",
      filter: "blur(25px)",
    });

    gsap.to("#heroTextContainer", {
      y: "0%",
      color: "white",
      duration: 2.5,
      ease: "power4.inOut",
      delay: 0.5,
    });
    
    gsap.to("#mainContainer", {
      backgroundColor: "#252422",
      duration: 2.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "bottom 70%",
        end: "bottom top",
        scrub: scrubValue,
        refreshPriority: 1,

        onEnter: () => {
          gsap.to("#navMenuContainer", {
            backgroundColor: "#fffcf2",
            color: "#252422",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "bottom 70%",
              end: "bottom top",
              scrub: scrubValue,
              refreshPriority: 2,
            },
            ease: "power4.inOut",
          });
          gsap.to("#navContact", {
            backgroundColor: "#fffcf2",
            color: "#252422",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "bottom 70%",
              end: "bottom top",
              scrub: scrubValue,
              refreshPriority: 2,
            },
            ease: "power4.inOut",
          });
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
              scrub: scrubValue,
              refreshPriority: 1,
              onLeave: () => {
                gsap.to("#navContact", {
                  backgroundColor: "#fffcf2",
                  color: "#252422",
                  scrollTrigger: {
                    trigger: "#aboutContainer",
                    start: "bottom 70%",
                    end: "bottom top",
                    scrub: scrubValue,
                    refreshPriority: 3,
                  },
                  ease: "power4.inOut",
                });
                gsap.to("#mainContainer", {
                  backgroundColor: "#252422",
                  duration: 2.5,
                  ease: "power4.inOut",
                  scrollTrigger: {
                    trigger: "#aboutContainer",
                    start: "bottom 90%",
                    end: "bottom top",
                    scrub: scrubValue,
                    refreshPriority: 1,
                    onLeave: () => {
                      gsap.to("#mainContainer", {
                        backgroundColor: "#fffcf2",
                        duration: 2.5,
                        ease: "power4.inOut",
                        scrollTrigger: {
                          trigger: "#toolboxContainer",
                          start: "center top",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 1,
                        },
                      });
                    },
                    onEnter: () => {
                      gsap.to("#skillSectionHeading", {
                        color: "#403D39",
                        scrollTrigger: {
                          trigger: "#aboutContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                      gsap.to("#navName", {
                        opacity: 0,
                        scrollTrigger: {
                          trigger: "#aboutContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                      gsap.to("#navbarContainer", {
                        opacity: 0,
                        scrollTrigger: {
                          trigger: "#projectsContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                      gsap.to("#languagesh2", {
                        color: "#EB5E28",
                        scrollTrigger: {
                          trigger: "#aboutContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                      gsap.to("#frameworksh2", {
                        color: "#EB5E28",
                        scrollTrigger: {
                          trigger: "#aboutContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                      gsap.to("#devh2", {
                        color: "#EB5E28",
                        scrollTrigger: {
                          trigger: "#aboutContainer",
                          start: "bottom 90%",
                          end: "bottom top",
                          scrub: scrubValue,
                          refreshPriority: 4,
                        },
                      });
                    },
                    onEnterBack: () => {
                      // Smooth transition when scrolling back to this section
                      gsap.to("#mainContainer", { 
                        backgroundColor: "#252422",
                        duration: 0.8,
                        ease: "power2.inOut"
                      });
                      gsap.to("#skillSectionHeading", { 
                        color: "#403D39",
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                      gsap.to("#navName", { 
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                      gsap.to(["#languagesh2", "#frameworksh2", "#devh2"], { 
                        color: "#EB5E28",
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                    },
                    onLeaveBack: () => {
                      // Smooth transition when scrolling back up past this section
                      gsap.to("#mainContainer", { 
                        backgroundColor: "#fffcf2",
                        duration: 0.8,
                        ease: "power2.inOut"
                      });
                      gsap.to("#skillSectionHeading", { 
                        color: "#403D39",
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                      gsap.to("#navName", { 
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                      gsap.to(["#languagesh2", "#frameworksh2", "#devh2"], { 
                        color: "#252422",
                        duration: 0.6,
                        ease: "power2.inOut"
                      });
                    },
                  },
                });
              },
              onEnterBack: () => {
                // Smooth transition when coming back to summary
                gsap.to("#mainContainer", { 
                  backgroundColor: "#fffcf2",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
                gsap.to("#navMenuContainer", { 
                  backgroundColor: "#252422", 
                  color: "#fffcf2",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
                gsap.to("#navContact", { 
                  backgroundColor: "#252422", 
                  color: "#fffcf2",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
              },
              onLeaveBack: () => {
                // Smooth transition when scrolling back up past summary
                gsap.to("#mainContainer", { 
                  backgroundColor: "#252422",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
                gsap.to("#navMenuContainer", { 
                  backgroundColor: "#fffcf2", 
                  color: "#252422",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
                gsap.to("#navContact", { 
                  backgroundColor: "#fffcf2", 
                  color: "#252422",
                  duration: 0.8,
                  ease: "power2.inOut"
                });
              },
            },
          });
          gsap.to("#navMenuContainer", {
            backgroundColor: "#252422",
            color: "#fffcf2",
            scrollTrigger: {
              trigger: "#summaryContainer",
              start: "top top",
              end: "bottom top",
              scrub: scrubValue,
              refreshPriority: 2,
            },
            ease: "power4.inOut",
          });
          gsap.to("#navContact", {
            backgroundColor: "#252422",
            color: "#fffcf2",
            scrollTrigger: {
              trigger: "#summaryContainer",
              start: "top top",
              end: "bottom top",
              scrub: scrubValue,
              refreshPriority: 2,
            },
            ease: "power4.inOut",
          });
        },
        onEnterBack: () => {
          // Smooth transition when scrolling back to hero
          gsap.to("#mainContainer", { 
            backgroundColor: "#252422", 
            duration: 0.8,
            ease: "power2.inOut"
          });
          gsap.to("#navMenuContainer", { 
            backgroundColor: "#fffcf2", 
            color: "#252422",
            duration: 0.8,
            ease: "power2.inOut"
          });
          gsap.to("#navContact", { 
            backgroundColor: "#fffcf2", 
            color: "#252422",
            duration: 0.8,
            ease: "power2.inOut"
          });
        },
        onLeaveBack: () => {
          // Smooth transition when scrolling back up past hero
          gsap.to("#mainContainer", { 
            backgroundColor: "#fffcf2",
            duration: 0.8,
            ease: "power2.inOut"
          });
          gsap.to("#navMenuContainer", { 
            backgroundColor: "#252422", 
            color: "#fffcf2",
            duration: 0.8,
            ease: "power2.inOut"
          });
          gsap.to("#navContact", { 
            backgroundColor: "#252422", 
            color: "#fffcf2",
            duration: 0.8,
            ease: "power2.inOut"
          });
        },
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div
      className="relative h-screen w-screen z-[1]"
      id="heroSection"
      ref={mainRef}
    >
      {/* Hero Image */}
      <div className="w-full h-full absolute flex items-center justify-center z-[-20]">
        <Image
          src="/assets/images/hero.webp"
          alt="Photo of me"
          fill
          className="object-cover"
          id="heroImage"
        />
      </div>
      {/* Middle Text*/}
      <div className="h-screen w-screen flex items-center justify-center max-w-full absolute">
        <div className="overflow-hidden">
          <h1
            className="outline_sm md:outline_lg text-[10vw] py-5 text-transparent  transform translate-y-full"
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
