import Link from "next/link";
import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateComponent from "./DateComponent";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

interface MoreStoriesProps {
  posts: any[];
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <>
      <div className="mb-32 space-y-10">
        {posts?.map((post: any) => {
          const { _id, title, slug, coverImage, excerpt } = post;
          return (
            <article key={_id} className="border-b border-gray-200 pb-10 last:border-b-0">
              <div className="md:flex md:gap-4 items-start">
                <div className="md:w-2/5 mb-3 md:mb-0 md:flex-shrink-0">
                  <Link href={`/blog/${slug.current}`} className="group block">
                    <CoverImage image={coverImage} priority={false} />
                  </Link>
                </div>
                <div className="md:w-3/5 md:pl-1">
                  <div className="mb-2 text-sm text-gray-500 uppercase tracking-wide">
                    <DateComponent dateString={post.date} />
                  </div>
                  <h3 className="text-balance mb-3 leading-tight font-bold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: jetbrainsMono.style.fontFamily }}>
                    <Link href={`/blog/${slug.current}`} className="hover:underline transition-colors duration-200">
                      {title}
                    </Link>
                  </h3>
                  {excerpt && (
                    <p className="text-pretty text-base leading-relaxed text-gray-600">
                      {excerpt}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
} 