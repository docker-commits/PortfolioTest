"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profile from "../../public/portfolio.jpg";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Coder", "Crickter", "Market Analysis"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="../../public/portfolio.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            {text}
            <Cursor cursorColor="black" />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobtn">About</button>
          </Link>
          <Link href="#wexp">
            <button className="herobtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobtn">Skills</button>
          </Link>
          <Link href="#pro">
            <button className="herobtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
