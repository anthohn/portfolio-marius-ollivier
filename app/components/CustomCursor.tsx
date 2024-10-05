'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Fonction pour détecter si l'utilisateur est sur un mobile via le user-agent
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    const mobileRegex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/;
    setIsMobile(mobileRegex.test(userAgent)); // Tester si le user-agent correspond à un appareil mobile
  }, []);

  return isMobile;
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile(); // Utiliser le hook pour détecter le mobile

  // Fonction pour mettre à jour la position du curseur
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true); // Une fois que la souris bouge, rendre le curseur visible
  };

  useEffect(() => {
    if (isMobile) return; // Ne pas activer le custom cursor en mode mobile

    // Initialiser à la position courante du curseur
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]); // Dépend de `isMobile`

  // Ne rien rendre si on est sur mobile ou que le curseur n'est pas visible
  if (isMobile || !visible) return null;

  return (
    <motion.div
      className="fixed -top-10 -left-5 w-20 h-20 bg-[#462525] z-10 blur-md rounded-full pointer-events-none"
      style={{
        x: position.x - 8, // Ajuster la position pour centrer la boule
        y: position.y - 8,
      }}
      animate={{ x: position.x - 20, y: position.y - 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  );
};

export default CustomCursor;
