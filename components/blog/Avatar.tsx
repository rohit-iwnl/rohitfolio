import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface Props {
  name: string;
  picture: any;
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center text-xl">
      {picture?.asset?._ref ? (
        <div className="mr-4 h-12 w-12">
          <Image
            alt={picture?.alt || ""}
            className="h-full rounded-full object-cover"
            height={48}
            width={48}
            src={urlFor(picture).width(96).height(96).url()}
          />
        </div>
      ) : (
        <div className="mr-1">By </div>
      )}
      <div className="text-pretty text-xl font-bold">{name}</div>
    </div>
  );
} 