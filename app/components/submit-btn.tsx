'use client'
import React from "react";
import Image from "next/image";
import arrowTopRight from "../../public/svg/arrowTopRight.svg";
import { motion } from "framer-motion"


export default function SubmitBtn() {

  return (
  <motion.button 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8}}
      type="submit"
      className="p-3 w-32 flex items-center justify-between bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm group"
    >
      <p className="button-text group-hover:invert transition duration-1000">Envoyer</p>
      <Image
        priority
        src={arrowTopRight}
        alt="Arrow icon"
        className="group-hover:invert transition duration-1000"
      />
    </motion.button>
  );
}
