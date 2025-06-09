'use client'
import React from "react";
// import Image from "next/image";
// import arrowTopRight from "../../public/svg/arrowTopRight.svg";
import { motion } from "framer-motion"


export default function SubmitBtn() {

  return (
  <motion.button 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8}}
      type="submit"
      className="p-3 w-fit flex items-center justify-between bg-btnBackground-light dark:bg-btnBackground-dark rounded-sm group"
    >
      <p className="button-text group-hover:invert transition duration-1000 font-semibold text-primary-light dark:text-primary-dark">Envoyer</p>
      {/* <Image
        priority
        src={arrowTopRight}
        alt="Arrow icon"
        className="group-hover:invert transition duration-1000"
      /> */}
    </motion.button>
  );
}
