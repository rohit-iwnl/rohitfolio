import React from 'react'
import Link from 'next/link'

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

interface BlogPageProps {
  posts?: BlogPost[];
}

export default function BlogPage({ posts = [] }: BlogPageProps) {
  return (
    <div className="relative lg:min-h-[70vh] lg:max-h-screen w-screen flex items-center justify-center p-[3vh] pt-[4vh] md:pt-[3vh] lg:pt-[4vh]" id="projectsContainer">
      {/* Left-Right Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 w-full max-w-7xl mx-auto lg:min-h-[70vh]">
        {/* Left Side - Blog Heading */}
        <div className="lg:w-1/3 flex flex-col justify-center lg:justify-start lg:pt-8">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-tertiary text-[12vw] md:text-[10vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] font-bold leading-tight">
              Blog
            </h1>
            <div className="lg:hidden w-full h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-gray-300 self-stretch min-h-[60vh]"></div>

        {/* Right Side - Blog Posts */}
        <div className="lg:w-2/3 flex flex-col justify-center lg:justify-start lg:pt-4">
          <div className="space-y-6 lg:space-y-10">
            {posts && posts.length > 0 ? (
              posts.map((post, index) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <article className={`group cursor-pointer block py-2 lg:py-4 ${index !== posts.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-tertiary mb-2 lg:mb-4 transition-all duration-300 ease-out group-hover:font-extrabold group-hover:text-accent transform-gpu origin-left group-hover:scale-[1.02] leading-tight">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed transition-all duration-300 ease-out group-hover:font-medium group-hover:text-gray-800 transform-gpu origin-left group-hover:scale-[1.01]">
                        {post.excerpt}
                      </p>
                    )}
                  </article>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 lg:py-32">
                <p className="text-gray-500 text-xl lg:text-3xl mb-2 lg:mb-4">No blog posts found.</p>
                <p className="text-gray-400 text-base lg:text-xl">Check back soon for new content!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}