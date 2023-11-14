"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import About1 from "../../public/About.jpg";

import axios from "axios";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("サイ クマール ヴッティ");
  const apiKey = "ebe3ee84e6msh119c87703a7c068p10e99ajsn9a7e8f054ecd"; // Replace with your RapidAPI key
  const sourceLanguage = "ja"; // Source language code (ja for Japanese)
  const targetLanguage = "en"; // Target language code (en for English)

  const handleMouseEnter = async () => {
    const textToTranslate = " あなたの名前";

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    };

    const data = new URLSearchParams();
    data.set("q", textToTranslate);
    data.set("source", sourceLanguage);
    data.set("target", targetLanguage);

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers,
      data,
    };
    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations[0].translatedText);
      setIsHovered(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
      className="flex flex-col relative text-center  h-screen md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://i.ibb.co/xgVFWmj/About.jpg"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] md:h-[550px] sm:mt-[90px] md:mt-inherit "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Welcome to my digital portfolio! I'm
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {displayText}
          </span>
          , a passionate Software Engineer with a drive for creativity and
          innovation. Here, I invite you to explore my journey, projects, and
          the world through my lens.
        </h4>
      </div>
    </motion.div>
  );
};

export default About;
