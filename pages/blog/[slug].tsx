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

  // Generate OpenGraph image URL
  const ogImageUrl = post.coverImage 
    ? `${post.coverImage.asset.url}?w=1200&h=630&fit=crop&crop=center`
    : '/api/og?title=' + encodeURIComponent(post.title);

  return (
    <>
      <Head>
        <title>{post.title} | {settings?.title || demo.title}</title>
        <meta name="description" content={post.excerpt || "Read this blog post"} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || "Read this blog post"} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}/blog/${post.slug.current}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={settings?.title || demo.title} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || "Read this blog post"} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content={post.author?.name || "Rohit Manivel"} />
        <meta property="article:published_time" content={post.publishedAt} />
        {post.categories && post.categories.length > 0 && (
          <meta property="article:section" content={post.categories[0].title} />
        )}
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
    revalidate: 60,
  };
}; 