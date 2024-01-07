import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "lorem ispum dolor isit amet consector adisipising.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ispum dolor isit amet consector adisipising.",
      filesize: "9.8mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "lorem ispum dolor isit amet consector adisipising.",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  useState();
  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) =>(
            <Card data = {item} reference = {ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
