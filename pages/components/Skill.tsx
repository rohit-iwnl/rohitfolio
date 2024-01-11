import Image from "next/image";
import React from "react";

type Props = {
  imagePath: string;
  altText: string;
  skillName: string;
};

export default function Skill({ imagePath, altText, skillName }: Props) {
  return (
    <div className="group relative flex flex-col items-center group">
      <Image
        src={`/assets/images/skillSection/${imagePath}.svg`}
        alt={altText}
        width={0}
        height={0}
        sizes="100vw"
        className="p-4 object-contain w-24 h-24 md:w-32 md:h-32 filter group-hover:scale-125 drop-shadow-md group-hover:drop-shadow-2xl transition duration-300 ease-in-out"
      />
      <p className="font-medium leading-loose text-xl text-tertiary">
        {skillName}
      </p>
    </div>
  );
}
