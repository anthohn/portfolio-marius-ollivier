'use client'
import ContactForm from '@/app/contact/ContactForm'
import Title2 from './Title2'
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <>
            <motion.div className='mt-24'
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeInOut",
                }}>
                <div className='text-center'>
                    <Title2>Contact</Title2>
                </div>
                <div className='flex justify-center'>
                    <div className='w-2/3'>
                        <ContactForm />
                    </div>
                </div>
            </motion.div>
        </>
    )
}
