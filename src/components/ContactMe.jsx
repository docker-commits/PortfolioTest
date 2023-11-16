"use client";
import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:sk1779504@gmail.com?subject=${data.subject}&body=Hi! My name is  ${data.name}, ${data.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center ">
      <h3 className="absolute top-20 md:top-24 uppercase  tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10     absolute top-[25px] p-[80px] md:top-20 md:p-[60px]">
        <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          I have got just what you need.{""}
          <span className="underline decoration-slate-600">Let's talk</span>
        </h4>
        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+91 6305590516</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              sk1779504@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">INDIA</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              className="ContactInp w-80 md:w-auto"
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInp w-80 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="ContactInp"
            name="subject"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="ContactInp"
            name="message"
          />
          <button
            type="submit"
            className="bg-[#acd5f0] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="animate-ping"></div>
    </div>
  );
};

export default ContactMe;
