import Link from "next/link";
import { Suspense, useEffect } from "react";
import { GetStaticProps } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

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
      <Link className="group mb-8 block md:mb-16" href={`/blog/${slug.current}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className={`text-pretty mb-4 text-5xl md:text-6xl lg:text-7xl leading-tight font-bold ${jetbrainsMono.className}`}>
            <Link href={`/blog/${slug.current}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="text-pretty mb-4 text-lg leading-relaxed text-gray-600">
              {excerpt}
            </p>
          )}
          {author && <Avatar name={author.name} picture={author.picture} />}
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
    <div className={`min-h-screen bg-primary ${jetbrainsMono.className}`}>
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
            <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
              {allPosts.filter(post => post._id !== heroPost._id).map((post: any) => {
                const { _id, title, slug, coverImage, excerpt, author, date } = post;
                return (
                  <article key={_id}>
                    <Link href={`/blog/${slug.current}`} className="group mb-5 block">
                      <CoverImage image={coverImage} priority={false} />
                    </Link>
                    <h3 className={`text-balance mb-3 text-4xl leading-snug font-bold ${jetbrainsMono.className}`}>
                      <Link href={`/blog/${slug.current}`} className="hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <div className="mb-4 text-lg">
                      <DateComponent dateString={date} />
                    </div>
                    {excerpt && (
                      <p className="text-pretty mb-4 text-lg leading-relaxed text-gray-600">
                        {excerpt}
                      </p>
                    )}
                    {author && <Avatar name={author.name} picture={author.picture} />}
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