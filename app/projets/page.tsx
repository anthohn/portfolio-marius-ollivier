'use client'
import Title2 from "../components/Title2"
import { projectsData } from "@/lib/data";
import ButtonBack from '@/app/components/ButtonBack';
import Button from '@/app/components/Button';
import { motion } from 'framer-motion';

export default function Projets() {

    return (
        <>
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
                <ButtonBack href="/"  />
                <Title2>PROJETS</Title2>

                <div className="bg-[#462525] absolute top-[20rem] -z-10 h-[35rem] blur-[10rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem]"></div>
                {projectsData.map((project, index) => (
                    <div key={index} className='flex flex-col space-x-10'>
                        <div className="flex flex-col space-y-6 border-b-2 pt-16">
                            <div className='flex flex-wrap space-x-2 md:space-x-10 items-center'>
                                <p className='text-2xl md:text-4xl lg:text-5xl xl:6xl font-semibold italic'>{project.title}</p>
                                <Button href={project.href} />
                            </div>
                            <p className="text-2xl">{project.date}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}