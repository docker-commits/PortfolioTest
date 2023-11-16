"use client";
import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#b0a9e2]  rounded-full h-[200px] w-[200px] mt-52  animate-ping" />
      <div className="rounded-full border border-[#dfd1e9]  h-[300px] w-[300px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#b0a9e2]   h-[500px] w-[500px] absolute  mt-52" />
      <div className="rounded-full border border-[#e4c0d5] opacity-20 h-[510px] w-[510px] absolute mt-52 animate-pulse" />
      <div className="absolute border border-[#b0a9e2] opacity-30 rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
