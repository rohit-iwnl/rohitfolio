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
        className="p-4 object-contain w-20 h-20 md:w-[4.5rem] md:h-[4.5rem] filter group-hover:scale-125 drop-shadow-md shadow-accent group-hover:drop-shadow-2xl transition duration-300 ease-in-out"
      />
      <p className="font-medium leading-loose text-xl text-secondary">
        {skillName}
      </p>
    </div>
  );
}
