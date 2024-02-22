import { motion } from "framer-motion";
import Image from "next/image";
import light from "../../public/bg.png";
import grid from "../../public/Hero_Section.svg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 z-0"
      >
        <Image src={grid} alt="grid" style={{ objectFit: "cover" }} />
      </motion.div>
      {/* Light Source Image */}
      <div className="absolute top-0 right-0 z-0">
        <Image className="opacity-30" src={light} alt="Light Source" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl font-bold text-gray-200"
        >
          ethsoil
        </motion.h2>
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-4xl md:text-6xl p-8 font-bold"
        >
          Your gateway to hassle-free <br /> procurement and sourcing
        </motion.h1>
        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-lg md:text-xl p-6 text-gray-400"
        >
          We supply industries with high quality agricultural waste for eco-friendly product manufacturing, your partner in sustainable solutions.
        </motion.h3>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="p-4"
        >
          <Button
            variant={"outline"}
            size={"xl"}
            className="text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
