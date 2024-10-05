'use client'
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Title2 from '@/app/components/Title2';
import ButtonBack from '@/app/components/ButtonBack';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Page({ params }: { params: { slug: string } }) {
  const project = projectsData.find((proj) => proj.href === `/projet/${params.slug}`);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

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
      className='mx-10 mt-24 md:mt-40 lg:mt-52'
    >
      <ButtonBack href="/projets" />
      <Title2>{project.title}</Title2>
      <div className="bg-[#462525] absolute top-[15rem] -z-10 right-[5rem] h-[35rem] rounded-full blur-[10rem] w-[60rem]"></div>

      {/* Affiche toutes les images du projet avec lazy loading */}
      <div className="flex flex-wrap gap-20 justify-center ">
        {project.images.map((image, index) => (
          <div key={index} className="relative w-[300px] h-[400px] cursor-pointer transition-transform duration-1000 hover:scale-105">
            <Image
              src={image}
              alt={`${project.title} image ${index + 1}`}
              fill // Utilisation de fill pour occuper tout l'espace du conteneur
              className="object-cover" // Maintenir les proportions tout en remplissant le conteneur
              onClick={() => handleImageClick(image.src)}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal pour afficher l'image en grand avec animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} // Animation d'apparition
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Animation de disparition
            onClick={handleOutsideClick}
          >
            <motion.div
              className="relative"
              initial={{ scale: 1 }} // Effet de zoom au début
              animate={{ scale: 1 }}
              exit={{ scale: 1 }}
            >
              <Image
                src={selectedImage}
                alt="Image en grand"
                width={800}
                height={600}
                className="rounded-lg"
                priority // Charger l'image modale en priorité
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
