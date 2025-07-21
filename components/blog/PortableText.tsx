import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        return (
          <div className="my-6">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || "Blog image"}
              width={0}
              height={0}
              className="rounded-lg shadow-md w-full h-auto"
              sizes="100vw"
            />
            {value.alt && (
              <p className="text-sm text-gray-600 mt-2 italic">
                {value.alt}
              </p>
            )}
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-base font-bold mb-2 mt-3">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-sm font-semibold mb-2">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-xs font-semibold mb-1">{children}</h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      number: ({ children }) => <li className="mb-1">{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ children, value }) => {
        return (
          <a 
            href={value?.href} 
            rel="noreferrer noopener"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose max-w-2xl mx-auto", inter.className, className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
} 