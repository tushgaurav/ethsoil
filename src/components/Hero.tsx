"use client";
import Image from "next/image";
import light from "../../public/bg.png";
import grid from "../../public/Hero_Section.svg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 right-0 z-0">
        <Image src={grid} alt="grid" style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute top-0 right-0 z-0">
        <Image className="opacity-30" src={light} alt="Light Source" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-4/5 p-8 pt-34 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-200">ethsoil</h2>
        <h1 className=" text-4xl md:text-6xl p-8 font-bold">
          Your Gateway to Hassle-free Procurement and Sourcing
        </h1>
        <h3 className="text-l md:text-xl p-6 text-zinc-400">
          We supply industries with high quality agricultural waste for eco-friendly product manufacturing, your partner in sustainable solutions.
        </h3>
        {/* <div className="p-4 ">
          <Button variant={"outline"} size={"xl"} className="text-xl" >Get Started</Button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;


