import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-white drop-shadow-lg">
        Sukanthan Elangovan
      </h1>
      <TypeAnimation
        sequence={["React Developer", 2000, "Java Developer", 2000, "Podcaster", 2000]}
        wrapper="span"
        speed={50}
        className="text-xl md:text-3xl text-cyan-400 font-semibold tracking-wider mt-2"
        repeat={Infinity}
      />
    </motion.div>
  );
}
