import React from "react";
import Clock from "react-live-clock";

type Props = {};

export default function LiveClock({}: Props) {
  return <Clock format={"h:mm:ss a"} ticking={true} timezone={"America/Phoenix"} className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] text-accent"/>;
}
