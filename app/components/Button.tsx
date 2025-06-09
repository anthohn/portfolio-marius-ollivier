'use client'
import arrowTopRight from "../../public/svg/arrowTopRight.svg";
import Image from "next/image";
import { inter } from '../fonts/fonts'
import { motion } from "framer-motion"


interface ButtonProps {
  text?: string;
  href?: string; 
}

export default function Button({ text, href  }: ButtonProps) {
  return (
    <motion.a 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8}}
      href={href} className="p-3 flex flex-wrap space-x-6 bg-btnBackground-light dark:bg-btnBackground-dark rounded-sm group ">
      {/* Affiche le texte seulement s'il est fourni */}
      {text && (
        <p className={`${inter.className} button-text`}>
          {text}
        </p>
      )}
      <Image
        priority
        src={arrowTopRight}
        alt="Arrow icon"
        className="group-hover:invert transition duration-1000"
      />
    </motion.a>
  );
}
