import { cn } from "@/utils/cn";
import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowUpRight,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

type Props = {
  posts: Post[];
};

export default function ProjectsGrid({ posts }: Props) {
  return (
    posts && (
      <BentoGrid className="max-w-screen md:p-10 mx-auto">
        {posts.map((post, i) => (
          <BentoGridItem
            key={i}
            title={post.title}
            description={post.description}
            header={
              <Image
                src={urlFor(post.mainImage).url()}
                alt="Project Image"
                width={0}
                height={0}
                className="w-full h-full object-cover rounded-md scale-100 hover:scale-[102%] transition-all transform duration-500 ease-in-out"
                sizes="20vw-100vw"
              />
            }
            link={post.hyperlink}
            icon={<IconArrowUpRight className="h-4 w-4 text-accent" />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    )
  );
}