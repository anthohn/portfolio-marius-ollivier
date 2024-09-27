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
        >
            <ButtonBack href="/" />
            <div className="text-center">
                <Title2>CONTACT</Title2>
            </div>
            <div className="bg-[#462525] absolute top-[10rem] -z-10 h-[45rem] rounded-full blur-[10rem] w-[80rem]"></div>
            <div className="flex justify-center">
                <div className="w-2/3">
                    <ContactForm />
                </div>
            </div>
        </motion.div>
    );
}
