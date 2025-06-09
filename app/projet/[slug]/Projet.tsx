"use client";

// import { useState } from "react";
import Image from "next/image";
import Title2 from "@/app/components/Title2";
import ButtonBack from "@/app/components/ButtonBack";
import { motion,
  //  AnimatePresence
   } from "framer-motion";
import { StaticImageData } from "next/image"; // Importer le type StaticImageData

// Définir le type Project en cohérence avec projectsData
type Project = {
  title: string;
  href: string;
  images: StaticImageData[]; // Changer de string[] à StaticImageData[]
};

type Props = {
  project: Project;
};

export default function ProjectClient({ project }: Props) {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const handleImageClick = (image: StaticImageData) => {
  //   setSelectedImage(image.src); // Utiliser image.src pour obtenir l'URL sous forme de string
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

  // const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0,
        duration: 1.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="mx-10 mt-24 md:mt-40 lg:mt-52"
    >
      <ButtonBack href="/projets" />
      <Title2>{project.title}</Title2>
      <div className="dark:bg-[#462525] absolute top-[15rem] -z-10 right-[5rem] h-[35rem] rounded-full blur-[10rem] w-[60rem]"></div>

      {/* Affiche toutes les images du projet avec lazy loading */}
      <div className="flex flex-wrap gap-20 justify-center">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[400px] transition-transform duration-1000 hover:scale-105"
          >
            <Image
              src={image}
              alt={`${project.title} image ${index + 1}`}
              fill
              className="object-cover"
              // onClick={() => handleImageClick(image)}
              placeholder="blur"
              blurDataURL={image.blurDataURL} // StaticImageData inclut blurDataURL
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal pour afficher l'image en grand avec animation */}
      {/* <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed top-0 inset-0 bg-black bg-opacity-80 flex justify-center items-center w-screen h-screen z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOutsideClick}
    >
      <motion.div
        className="relative"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1 }}
      >
        <Image
          src={selectedImage}
          alt="Image en grand"
          width={800}
          height={600}
          className="rounded-lg"
          priority
        />
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence> */}
      {/* <p className="absolute top-0 bg-red-500">test</p> */}
    </motion.div>
  );
}