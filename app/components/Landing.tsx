"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bodoni_moda } from '../fonts/fonts'
import Image from "next/image";
import imgCoverArtistes1 from "@/public/projets/coversArtists/imgCoverArtistes1.jpg";
import Button from "./Button";

export function Landing() {
  return (
    <>
      <div className="h-[850px] md:h-screen max-h-[1000px] flex flex-col justify-between">
        <div className="flex flex-col -space-y-64">
          <div className={cn("relative flex h-[500px] flex-col items-center justify-center overflow-hidden w-full")}>
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate ">
              <motion.div
                initial={{ opacity: 0.5, width: "15rem" }}
                whileInView={{ opacity: 1, width: "60rem" }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                style={{
                  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute inset-auto right-1/2 h-56 overflow-visible w-[60rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                <div className="absolute w-[100%] left-0 bg-[#171717] h-40 bottom-0 [mask-image:linear-gradient(to_top,white,transparent)]" />
                <div className="absolute w-40 h-[100%] left-0 bg-[#171717] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, width: "15rem" }}
                whileInView={{ opacity: 1, width: "60rem" }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                style={{
                  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute inset-auto left-1/2 h-56 w-[60rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
              >
                <div className="absolute w-40 h-[100%] right-0 bg-[#171717] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                <div className="absolute w-[100%] right-0 bg-[#171717] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              </motion.div>
              <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#171717] blur-2xl"></div>
              <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
              <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl"></div>
              <motion.div
                initial={{ width: "8rem" }}
                whileInView={{ width: "16rem" }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-400 blur-2xl"
              ></motion.div>
              <motion.div
                initial={{ width: "15rem" }}
                whileInView={{ width: "60rem" }}
                transition={{
                  delay: 0,
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="absolute inset-auto z-50 h-0.5 w-[60rem] -translate-y-[7rem] bg-red-400 "
              ></motion.div>

              <div className="absolute inset-auto z-50 h-44 w-full -translate-y-[12.5rem] bg-[#171717]"></div>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`${bodoni_moda.className} text-center leading-none text-[100px] md:leading-normal md:text-[105px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px] bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-white`}>
            Marius Ollivier
          </motion.h1>
        </div>
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }} className="flex justify-center md:justify-end m-10">
          <div className="flex flex-wrap space-x-5 md:space-x-10 items-center bg-red-500 bg-opacity-20 w-auto p-4 shadow-2xl shadow-red-500/40 border-2 border-red-400 rounded-xl">
            <div className="w-[50px] md:w-[70px]">
              <Image 
                src={imgCoverArtistes1} 
                width={340} 
                height={340} 
                alt='Image dernier projet'
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">Dernier projet</p>
              <p>Covers artistes</p>
              </div>
              <div>
                <Button
                  href="/projet/covers-artistes"
                ></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
