import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="h-auto w-full"
      width={2000}
      height={1000}
      alt={source?.alt || ""}
      src={urlFor(source).width(2000).height(1000).url()}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  );

  return (
    <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
      {image}
    </div>
  );
} 