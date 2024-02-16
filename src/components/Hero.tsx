"use client";
import Image from "next/image";
import light from "../../public/Hero_light.svg";
import grid from "../../public/Hero_Section.svg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 right-0 z-0">
        <Image src={grid} alt="grid" style={{objectFit:"cover"}}/>
      </div>
      <div className="absolute top-0 right-0 z-0">
        <Image src={light} alt="Light Source" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-4/5 p-8 pt-64 text-center">
        <h1 className=" text-4xl md:text-6xl p-8 font-bold"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!
        </h1>
        <h3 className="text-l md:text-xl p-6 text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quia quibusdam laudantium fugit doloribus quod atque quasi impedit itaque adipisci quae temporibus.
        </h3>
        <div className="p-4 ">
          <Button variant={"outline"} size={"xl"} className="text-xl" >Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;


