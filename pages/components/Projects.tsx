import React, { useState, useEffect, use } from "react";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import BlogList from "./BlogList";

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
        console.log(data);


        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="relative h-screen w-screen p-[5vh] pt-[10vh]">
      {/* Left Side Div */}
      <h1
        id="aboutSectionHeading"
        className="text-tertiary relative text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Projects
      </h1>
      <div className="pt-4 md:p-5 lg:p-8 xl:p-12">
        {projects && <BlogList posts={projects} />}
      </div>
    </div>
  );
}
