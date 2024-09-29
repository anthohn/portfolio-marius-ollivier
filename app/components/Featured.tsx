'use client'
import Title2 from './Title2';
import featured1 from '@/public/featured1.png';
import featured2 from '@/public/featured2.png';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Featured() {
    return (
        <>
            <motion.section 
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="flex flex-col lg:flex-row items-center justify-between mt-52 px-4 md:px-8 gap-16">
                
                {/* Deuxième colonne */}
                <div className="w-full lg:w-1/2 space-y-16 flex flex-col items-center lg:items-center">
                    <div className="flex flex-col -space-y-6 w-full max-w-[620px] text-center">
                        <Title2>Featured</Title2>
                        <p className="italic text-4xl lg:text-5xl font-semibold">en vedette</p>
                    </div>
                    <Image 
                        src={featured2} 
                        width={800} 
                        height={800} 
                        alt="image projet 2" 
                        className="w-full h-auto max-w-lg"
                    />
                </div>

                {/* Première colonne */}
                <div className="w-full lg:w-1/2 space-y-11 my-10 lg:my-28 flex flex-col items-center lg:items-center">
                    <Image 
                        src={featured1} 
                        width={640} 
                        height={640} 
                        alt="image projet 1" 
                        className="w-full h-auto max-w-md"
                    />
                    <div className="flex flex-col space-y-8 text-center">
                        <p className="text-3xl sm:text-4xl lg:text-5xl italic">Gabriel Sanchez - 2024</p>
                        <div className="flex justify-center items-center space-x-4">
                            <p className="italic font-bold text-2xl sm:text-3xl lg:text-4xl">Projet</p>
                            <Button href="/projet/sanchez" />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
