import Image from "next/image";
import React from "react";
import Car from "@/assets/car-image.jpg";
import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div
      id="Home"
      className="relative w-[95%] mx-auto mt-30 h-[80vh] rounded-3xl overflow-hidden shadow-2xl z-30"
    >
      <Image src={Car} fill alt="Hero Car" priority className="object-cover" />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Find Your <span className="text-green-400">Dream Car</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto">
          Explore our exclusive collection of premium and luxurious cars. Your
          perfect ride is just a click away.
        </p>

        <button className="mt-10 bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-1">
          Browse Cars
          <HiArrowRight className="w-6 h-6 mt-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
