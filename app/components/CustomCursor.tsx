// components/CustomCursor.tsx
'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false); // Pour gérer la visibilité initiale

  // Fonction pour mettre à jour la position du curseur
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true); // Une fois que la souris bouge, rendre le curseur visible
  };

  useEffect(() => {
    // Initialiser à la position courante du curseur
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    visible && (
      // <motion.div
      //   className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none"
      //   style={{
      //     x: position.x - 8, // Ajuster la position pour centrer la boule
      //     y: position.y - 8,
      //   }}
      //   animate={{ x: position.x - 8, y: position.y - 8 }}
      //   transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      // />
      <motion.div
        className="fixed -top-10 -left-5 w-20 h-20 bg-[#462525] z-10 blur-md rounded-full pointer-events-none"
        style={{
              x: position.x - 8, // Ajuster la position pour centrer la boule
              y: position.y - 8,
            }}
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )
  );
};

export default CustomCursor;