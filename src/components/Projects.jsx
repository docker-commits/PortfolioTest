"use client";
import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col  text-right md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center px-20 md:p-44 h-screen"
            key={index}
          >
            <motion.img
              initial={{ y: -300, opcity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0eb090179527799.Y3JvcCw5OTQsNzc4LDI5MCww.png"
              alt={`Project ${index + 1}`}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-gray-800">
                  Case Study {index + 1} of 5:
                </span>{" "}
                Lolcha
              </h4>
              <p className="text-lg text-center md:text-left">
                You can also use variant modifiers to target media queries like
                responsive breakpoints, dark mode, prefers-reduced-motion, and
                more. For example, use md:origin-top to apply the origin-top
                utility at only medium screen sizes and above.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
};

export default Projects;
