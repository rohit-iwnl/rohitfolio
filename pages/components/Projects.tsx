"use client";
import React, { useState, useEffect, use } from "react";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import ProjectsGrid from "./ProjectsGrid";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {};

export default function Projects({}: Props) {
  const [projects, setProjects] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(groq`
          *[_type == 'post'] {
            ...,
            author->,
            categories[]->
          } | order(_createdAt desc)
        `);
        ScrollTrigger.refresh();


        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="relative min-h-screen w-screen p-[3vh] pt-[2vh] md:pt-[4vh]" id="projectsContainer">
      {/* Left Side Div */}
      <h1
        id="aboutSectionHeading"
        className="text-tertiary relative text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Projects
      </h1>
      <div className="pt-4 md:p-5 lg:p-8 xl:p-12">
        {projects && <ProjectsGrid posts={projects} />}
      </div>
    </div>
  );
}
