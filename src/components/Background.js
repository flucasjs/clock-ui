"use client";
import React from "react";
import Image from "next/image";
import backgroundImages from "./backgroundImages";

export default function Background({ screen, theme }) {
  return (
    screen && (
      <div>
        <Image
          src={backgroundImages[screen][theme]}
          alt=""
          priority
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black pointer-events-none opacity-40"></div>
      </div>
    )
  );
}
