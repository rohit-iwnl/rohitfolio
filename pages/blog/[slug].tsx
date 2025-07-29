import { GetStaticProps, GetStaticPaths } from "next";
import { type PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { JetBrains_Mono, Inter } from "next/font/google";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

import Avatar from "../../components/blog/Avatar";
import CoverImage from "../../components/blog/CoverImage";
import DateComponent from "../../components/blog/DateComponent";
import MoreStories from "../../components/blog/MoreStories";
import PortableText from "../../components/blog/PortableText";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/lib/sanity.client";

interface PostPageProps {
  post: any;
  settings: any;
  allPosts: any[];
}

export default function PostPage({ post, settings, allPosts }: PostPageProps) {
  const router = useRouter();

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

  if (router.isFallback || !post?._id) {
    return (
      <div className={`min-h-screen bg-primary flex items-center justify-center ${inter.className}`}>
        <div>Loading...</div>
      </div>
    );
  }

  // Generate OpenGraph image URL with absolute URL
  const ogImageUrl = post.coverImage 
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').crop('center').url()
    : `https://via.placeholder.com/1200x630/000000/ffffff?text=${encodeURIComponent(post.title)}`;
  
  // Ensure absolute URL
  const absoluteOgImageUrl = ogImageUrl.startsWith('http') ? ogImageUrl : `https:${ogImageUrl}`;
  const canonicalUrl = `https://rohitmanivel.com/blog/${post.slug.current}`;
  
  // Detect image type for LinkedIn
  const imageType = post.coverImage ? 'image/jpeg' : 'image/png';

  return (
    <>
      <Head>
        <title>{post.title} | Rohit&apos;s Blog</title>
        <meta name="description" content={post.excerpt || `Read "${post.title}" on Rohit's blog - insights about development, technology, and software engineering.`} />
        
        {/* Essential Open Graph Meta Tags - Order matters for LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Rohitfolio" />
        <meta property="og:title" content={`${post.title} | Rohit's Blog`} />
        <meta property="og:description" content={post.excerpt || `Read "${post.title}" on Rohit's blog - insights about development, technology, and software engineering.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteOgImageUrl} />
        <meta property="og:image:secure_url" content={absoluteOgImageUrl} />
        <meta property="og:image:type" content={imageType} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Cover image for ${post.title}`} />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific meta tags for LinkedIn */}
        <meta property="article:published_time" content={post.publishedAt || post.date} />
        <meta property="article:author" content={post.author?.name || "Rohit Manivel"} />
        {post.categories && post.categories.length > 0 && (
          <meta property="article:section" content={post.categories[0].title} />
        )}
        {post.categories && post.categories.map((category: any, index: number) => (
          <meta key={index} property="article:tag" content={category.title} />
        ))}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rohitmanivel" />
        <meta name="twitter:creator" content="@rohitmanivel" />
        <meta name="twitter:title" content={`${post.title} | Rohit's Blog`} />
        <meta name="twitter:description" content={post.excerpt || `Read "${post.title}" on Rohit's blog - insights about development, technology, and software engineering.`} />
        <meta name="twitter:image" content={absoluteOgImageUrl} />
        <meta name="twitter:image:alt" content={`Cover image for ${post.title}`} />
        
        {/* Additional SEO and LinkedIn optimization */}
        <meta name="author" content={post.author?.name || "Rohit Manivel"} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Ensure no conflicts with base page meta tags */}
        <meta property="og:updated_time" content={new Date().toISOString()} />
      </Head>
      
      <div className={`min-h-screen bg-primary ${inter.className}`}>
        <div className="container mx-auto px-5">
        <h2 className={`mb-16 mt-10 text-3xl font-bold leading-tight tracking-tight md:text-5xl md:tracking-tighter ${jetbrainsMono.className}`}>
          <Link href="/blog" className="hover:underline">
            {settings?.title || demo.title}
          </Link>
        </h2>
        <article>
          <h1 className={`text-balance mb-12 text-7xl font-bold leading-tight tracking-tighter md:text-8xl md:leading-none lg:text-9xl ${jetbrainsMono.className}`}>
            {post.title}
          </h1>
                  <div className="mb-8">
          <DateComponent dateString={post.date} />
        </div>
          <div className="mb-8 sm:mx-0 md:mb-16">
            <CoverImage image={post.coverImage} priority />
          </div>
          
          {post.content?.length && (
            <PortableText
              className="mx-auto max-w-2xl"
              value={post.content as PortableTextBlock[]}
            />
          )}
        </article>
        <aside>
          <hr className="border-accent-2 mb-24 mt-28" />
          <h2 className={`mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl ${jetbrainsMono.className}`}>
            Recent Stories
          </h2>
          <MoreStories posts={allPosts.filter((p: any) => p._id !== post._id).slice(0, 2)} />
        </aside>
              </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: any[] = await sanityFetch({
    query: `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current}`,
  });

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const [post, settings, allPosts] = await Promise.all([
    sanityFetch({
      query: postQuery,
      params: { slug },
    }),
    sanityFetch({ query: settingsQuery }),
    sanityFetch({ query: allPostsQuery }),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      settings,
      allPosts,
    },
    revalidate: 10800, // 3 hours
  };
};