'use client';
import arrowLeft from "../../public/svg/arrowLeft.svg";
import Image from "next/image";
import { motion } from "framer-motion"

interface ButtonProps {
  href?: string;
}

export default function ButtonBack({ href }: ButtonProps) {
  return (
    <motion.a 
      whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.8,
        }}
      href={href} className="relative inline-flex items-center py-2 px-4 space-x-6 bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm group">

      <div className="relative z-10">
        <Image
          priority
          src={arrowLeft}
          alt="Arrow icon"
          className="group-hover:invert transition duration-1000"
        />
      </div>
    </motion.a>
  );
}
