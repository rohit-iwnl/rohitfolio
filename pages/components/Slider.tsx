import React from "react";
import Marquee from "react-fast-marquee";
type Props = {};

export default function Slider({}: Props) {
  return (
    <div className="w-screen bg-primary_dark h-[20vh] flex">
      <Marquee autoFill className="">
      </Marquee>
    </div>
  );
}
