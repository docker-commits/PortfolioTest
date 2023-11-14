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
    <div className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-7xl px-10  mx-auto items-center justify-center">
      <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{""}
          <span className="undeline decoration-slate-600">Let's talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-2xl">+91 6305590516</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-2xl">sk1779504@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f09e8a] animate-pulse" />
            <p className="text-2xl">INDIA</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="ContactInp"
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInp"
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
            className="bg-[#acd5f0] py-5 px-10 rounded-md text-black font-bold text-lg"
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
