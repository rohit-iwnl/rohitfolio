import Link from "next/link";
import DateComponent from "./DateComponent";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

interface BlogPostListProps {
  posts: any[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post: any) => {
        const { _id, title, slug, excerpt, date } = post;
        return (
          <article key={_id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-1 text-xs text-gray-500 uppercase tracking-wide">
                  <DateComponent dateString={date} />
                </div>
                <h3 className={`mb-2 ${jetbrainsMono.className}`}>
                  <Link 
                    href={`/blog/${slug.current}`} 
                    className="hover:underline transition-colors duration-200 text-2xl md:text-3xl font-bold leading-tight"
                  >
                    {title}
                  </Link>
                </h3>
                {excerpt && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {excerpt}
                  </p>
                )}
              </div>
              <div className="ml-4 flex-shrink-0">
                <Link 
                  href={`/blog/${slug.current}`}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Read →
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
} 