'use client'
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import Title2 from './Title2';
import arrowRight from "../../public/svg/arrowRight.svg";
import a from '@/public/coverProjet1.png';
import b from '@/public/coverProjet2.png';
import c from '@/public/coverProjet3.png';
import d from '@/public/coverProjet4.png';
import e from '@/public/coverProjet5.png';



export default function Projects() {

  const projectsContent = [
    { href: "/projets/GRECE-2023", label: "GRECE 2023", image: a },
    { href: "/projets/TOURNAGES-CLIPS", label: "TOURNAGE CLIPS", image: b },
    { href: "/projets/COVERS-ARTISTS", label: "COVERS ARTISTES", image: c },
    { href: "/projets/sanchez", label: "SANCHEZ", image: d },
    { href: "/projets/celia", label: "CELIA", image: e },


  ];
  const controls = useAnimation();

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(element.scrollLeft);
        e.preventDefault();
        element.classList.add('grabbing'); // Ajouter la classe "grabbing" au composant
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.clientX - startX;
      element.scrollLeft = scrollLeft - x;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      element.classList.remove('grabbing'); // Retirer la classe "grabbing" lorsque le glissement est terminé
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth; // Largeur de défilement souhaitée
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const newScrollLeft = currentScrollLeft - scrollAmount;
      animateScroll(carouselRef.current, currentScrollLeft, newScrollLeft);
    }
  };
  
  const handleNextClick = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth; // Largeur de défilement souhaitée
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const newScrollLeft = currentScrollLeft + scrollAmount;
      animateScroll(carouselRef.current, currentScrollLeft, newScrollLeft);
    }
  };
  
  const animateScroll = (element: HTMLElement, start: number, end: number) => {
    const duration = 300; // Durée de l'animation en millisecondes
    const startTime = performance.now();
  
    const scrollStep = (timestamp: number) => {
      const currentTime = timestamp - startTime;
  
      if (currentTime < duration) {
        const scrollLeft = easeInOutQuad(currentTime, start, end - start, duration);
        element.scrollLeft = scrollLeft;
        requestAnimationFrame(scrollStep);
      } else {
        element.scrollLeft = end;
      }
    };
  
    requestAnimationFrame(scrollStep);
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
      

  return (
    <>
      <section className='flex flex-col my-80'>
        <div className='flex justify-between'>
          <div className='flex flex-col -space-y-16  w-[600px]'>
            <Title2 text="Projets"></Title2>
            <p className='text-right italic text-5xl font-semibold'>(works)</p>
          </div>
          <div className='flex space-x-4 items-end'>
            <button
                type="button"
                onClick={handlePrevClick}
                className='border-[4px] h-16 w-16 rounded-full flex justify-center items-center hover:bg-neutral-100 transition fill-neutral-100 hover:fill-neutral-900'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </button>
            <button
                type="button"
                onClick={handleNextClick}
                className='border-[4px] h-16 w-16 rounded-full flex justify-center items-center hover:bg-neutral-100 transition fill-neutral-100 hover:fill-neutral-900'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </button>
            </div>
        </div>

        <motion.div
          className="w-full flex py-8 space-x-8 overflow-x-auto scroll-snap-type-x-mandatory mt-10"
          ref={carouselRef}
          animate={controls} 
          style={{ overflowX: 'hidden', whiteSpace: 'nowrap', cursor: 'grab' }}
        >
          {projectsContent.map((project, index) => (
            <div key={index} className='flex flex-col min-w-max' data-carousel-item>
              <Image src={project.image} width={340} height={340} className="shadow-2xl" alt={project.label} />
              <div className='flex flex-wrap justify-between pt-10 items-center'>
                <p className='text-2xl font-semibold'>{project.label}</p>
                <Button href={project.href} />
              </div>
            </div>
          ))}
        </motion.div>
        <a href="/projets" className="px-8 py-3 flex flex-wrap bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm mt-32 space-x-16">
          <p className="text-5xl italic text-black font-bold">TOUS LES PROJETS</p>
          <Image
            priority
            src={arrowRight}
            alt="Arrow icon"
          />
      </a>
      </section>
    </>
  )
}