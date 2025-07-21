import Link from "next/link";
import { Suspense, useEffect } from "react";
import { GetStaticProps } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});
const inter = Inter({ subsets: ['latin'] });

import Avatar from "../../components/blog/Avatar";
import CoverImage from "../../components/blog/CoverImage";
import DateComponent from "../../components/blog/DateComponent";
import MoreStories from "../../components/blog/MoreStories";
import PortableText from "../../components/blog/PortableText";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery, allPostsQuery } from "@/sanity/lib/queries";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className={`text-balance text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tighter lg:pr-8 ${jetbrainsMono.className}`}>
        {title || demo.title}
      </h1>
      <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left text-gray-600">
        <PortableText
          className="prose-lg"
          value={description?.length ? description : demo.description}
        />
      </h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: any) {
  return (
    <article>
      <Link className="group mb-4 block md:mb-8" href={`/blog/${slug.current}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28">
        <div className="max-w-4xl">
          <div className="mb-1 text-sm text-gray-500 uppercase tracking-wide">
            <DateComponent dateString={date} />
          </div>
          <h3 className="text-pretty mb-2 leading-tight font-bold" >
            <Link href={`/blog/${slug.current}`} className="hover:underline text-6xl md:text-7xl lg:text-7xl">
              {title}
            </Link>
          </h3>
          {excerpt && (
            <p className="text-pretty text-lg leading-relaxed text-gray-600 max-w-3xl">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

interface BlogProps {
  settings: any;
  heroPost: any;
  allPosts: any[];
}

export default function Blog({ settings, heroPost, allPosts }: BlogProps) {
  // Debug logging
  console.log("Blog data:", { settings, heroPost, allPosts: allPosts?.length });

  // Fix scroll issue by allowing normal overflow on blog pages
  useEffect(() => {
    // Override the global overflow: hidden for blog pages
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Cleanup function to restore original if needed
    return () => {
      // Don't restore the overflow hidden as user might navigate to other pages
    };
  }, []);
  
  return (
    <div className={`min-h-screen bg-primary ${inter.className}`}>
      <div className="container mx-auto px-5">
        <Intro title={settings?.title} description={settings?.description} />
        {heroPost ? (
          <HeroPost
            title={heroPost.title}
            slug={heroPost.slug}
            coverImage={heroPost.coverImage}
            excerpt={heroPost.excerpt}
            date={heroPost.date}
            author={heroPost.author}
          />
        ) : (
          <div className="grid grid-flow-row gap-6 py-60 text-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">No Blog Posts Found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Create your first blog post in Sanity Studio to get started.
              </p>
              <a 
                href="/studio" 
                target="_blank"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Create Blog Post in Studio
              </a>
            </div>
          </div>
        )}
        {heroPost?._id && allPosts?.length > 1 && (
          <aside>
            <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
              More Stories
            </h2>
            <div className="mb-32 space-y-12">
              {allPosts.filter(post => post._id !== heroPost._id).map((post: any) => {
                const { _id, title, slug, coverImage, excerpt, date } = post;
                return (
                  <article key={_id} className="border-b border-gray-200 pb-12 last:border-b-0">
                    <div className="md:flex md:gap-6 items-start">
                      <div className="md:w-2/5 mb-3 md:mb-0 md:flex-shrink-0">
                        <Link href={`/blog/${slug.current}`} className="group block">
                          <CoverImage image={coverImage} priority={false} />
                        </Link>
                      </div>
                      <div className="md:w-3/5 md:pl-2">
                        <div className="mb-2 text-sm text-gray-500 uppercase tracking-wide">
                          <DateComponent dateString={date} />
                        </div>
                        <h3 className="text-balance mb-3 leading-tight font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: jetbrainsMono.style.fontFamily }}>
                          <Link href={`/blog/${slug.current}`} className="hover:underline transition-colors duration-200">
                            {title}
                          </Link>
                        </h3>
                        {excerpt && (
                          <p className="text-pretty text-base md:text-lg leading-relaxed text-gray-600">
                            {excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [settings, heroPost, allPosts] = await Promise.all([
    sanityFetch({
      query: settingsQuery,
    }),
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: allPostsQuery }),
  ]);

  return {
    props: {
      settings,
      heroPost,
      allPosts,
    },
    revalidate: 60,
  };
}; 