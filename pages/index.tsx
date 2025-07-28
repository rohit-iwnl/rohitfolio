import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero";
import { clashGrotesk, generalSans } from "@/public/utils/FontLoader";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import About from "./components/About";
import Projects from "./components/Projects";
import Toolbox from "./components/Toolbox";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import BlogPage from "./components/BlogPage";
import { sanityFetch } from '@/sanity/lib/fetch';
import { allPostsQuery } from '@/sanity/lib/queries';

const DynamicSummary = dynamic(() => import("@/pages/components/Summary"), {
  ssr: false,
});

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  date: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

interface HomeProps {
  posts: BlogPost[];
}

export default function Home({ posts }: HomeProps) {
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
      <Head>
        <title>Rohitfolio - Rohit Manivel&apos;s Portfolio</title>
        <meta name="description" content="Explore Rohit Manivel's portfolio showcasing innovative projects, technical skills, and professional journey in software development." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitmanivel.com/" />
        <meta property="og:title" content="Rohitfolio - Rohit Manivel's Portfolio" />
        <meta property="og:description" content="Explore Rohit Manivel's portfolio showcasing innovative projects, technical skills, and professional journey in software development." />
        <meta property="og:image" content="https://rohitmanivel.com/assets/images/hero.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rohit Manivel - Software Developer Portfolio" />
        <meta property="og:site_name" content="Rohitfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rohitmanivel.com/" />
        <meta property="twitter:title" content="Rohitfolio - Rohit Manivel's Portfolio" />
        <meta property="twitter:description" content="Explore Rohit Manivel's portfolio showcasing innovative projects, technical skills, and professional journey in software development." />
        <meta property="twitter:image" content="https://rohitmanivel.com/assets/images/hero.webp" />
        <meta property="twitter:image:alt" content="Rohit Manivel - Software Developer Portfolio" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="Rohit Manivel, portfolio, software developer, web development, mobile development, React, Next.js" />
        <link rel="canonical" href="https://rohitmanivel.com/" />
      </Head>
      {/* <DyanmicHelloAnimation /> */}
      <Navbar />
      <main className=" w-screen" id="mainContainer">
        <Hero />
        <DynamicSummary />
        <About />
        <Toolbox />
        <WorkExperience />
        <Projects />

        <BlogPage posts={posts} />
        <Contact />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const posts = await sanityFetch<BlogPost[]>({
      query: allPostsQuery,
    });

    return {
      props: {
        posts: posts || [],
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};
