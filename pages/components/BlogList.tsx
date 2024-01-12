import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    posts && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-0 md:space-x-10 lg:space-y-20 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center flex-col">
        {" "}
        {posts.map((post) => (
          <Link
            href={post.hyperlink}
            key={post._id}
            className="group w-full md:max-w-[40vw] h-auto cursor-pointer hover:scale-105  transition-all duration-[500ms] ease-in-out rounded overflow-hidden shadow-sm  shadow-primary_dark hover:shadow-accent hover:shadow-lg md:mb-8 lg:mb-5  bg-primary"
          >
            <Image
              src={urlFor(post.mainImage).url()}
              alt="Project Image"
              width={0}
              height={0}
              className="w-full z-[-10] h-full group-hover:scale-105 transition-all duration-[1000ms] ease-in-out"
              sizes="20vw-100vw"
              objectFit="contain"
            />
            <div className="px-6 py-4 z-[20]">
              <div className="font-bold text-xl mb-2 text-accent">
                {post.title}
              </div>
              <p className="text-gray-700 text-base">{post.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {post.categories.map((category) => (
                <span
                  key={post._id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
