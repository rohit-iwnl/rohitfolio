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
        // Fetch data from Sanity using your GROQ query
        const data = await client.fetch(groq`
          *[_type == 'post'] {
            ...,
            author->,
            categories[]->
          } | order(_createdAt desc)
        `);
        console.log(data);

        // Update the component state with the fetched data
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <div className="relative h-screen w-screen p-[5vh]">
      {/* Left Side Div */}
      <h1
        id="aboutSectionHeading"
        className="text-tertiary relative text-center text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
      >
        Projects
      </h1>
      <div className="p-10">{projects && <BlogList posts={projects} />}</div>
    </div>
  );
}
