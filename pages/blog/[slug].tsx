import { GetStaticProps, GetStaticPaths } from "next";
import { type PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

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
      <div className={`min-h-screen bg-primary flex items-center justify-center ${jetbrainsMono.className}`}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-primary ${jetbrainsMono.className}`}>
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
          <div className="hidden md:mb-12 md:block">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-8 sm:mx-0 md:mb-16">
            <CoverImage image={post.coverImage} priority />
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 block md:hidden">
              {post.author && (
                <Avatar name={post.author.name} picture={post.author.picture} />
              )}
            </div>
            <div className="mb-6 text-lg">
              <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div>
            </div>
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