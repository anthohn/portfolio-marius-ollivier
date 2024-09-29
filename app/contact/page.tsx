'use client'
import ButtonBack from "../components/ButtonBack";
import Title2 from "../components/Title2";
import ContactForm from "@/app/contact/ContactForm";
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0,
                duration: 1.5,
                ease: "easeInOut",
            }}
            className="mx-10"
        >
            <ButtonBack href="/" />
            <div className="text-center">
                <Title2>CONTACT</Title2>
            </div>
            <div className="bg-[#462525] absolute top-[20rem] -z-10 h-[35rem] blur-[10rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem]"></div>
            <div className="flex justify-center">
                <div className="w-full lg:mx-0 lg:w-2/3">
                    <ContactForm />
                </div>
            </div>
        </motion.div>
    );
}
