'use client'
import { projectsData } from '@/lib/data'; // Assure-toi que le chemin est correct
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Title2 from '@/app/components/Title2';
import ButtonBack from '@/app/components/ButtonBack';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ajout pour l'animation

export default function Page({ params }: { params: { slug: string } }) {
  const project = projectsData.find((proj) => proj.href === `/projet/${params.slug}`);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound(); // Affiche une page 404 si le projet n'existe pas
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Définit l'image sélectionnée
  };

  const closeModal = () => {
    setSelectedImage(null); // Réinitialise l'image sélectionnée pour fermer le modal
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <ButtonBack href="/projets" />
      <Title2>{project.title}</Title2>
      <div className="bg-[#462525] absolute top-[15rem] -z-10 right-[5rem] h-[35rem] rounded-full blur-[10rem] w-[60rem]"></div>

      {/* Affiche toutes les images du projet avec lazy loading */}
      <div className="flex flex-wrap gap-20 justify-center">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.title} image ${index + 1}`}
            width={300}
            height={200}
            className="cursor-pointer transition-transform duration-300 hover:scale-105" // Animation sur hover
            onClick={() => handleImageClick(image.src)} // Ouvre le modal avec l'image cliquée
            placeholder="blur" // Utilisation du blur pour un chargement progressif
            blurDataURL={image.blurDataURL} // Passer un blurDataURL pour précharger
            loading="lazy" // Lazy loading pour améliorer la performance
          />
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
    </div>
  );
}
