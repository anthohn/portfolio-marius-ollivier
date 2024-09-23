import ContactForm from '@/app/contact/ContactForm'
import Title2 from './Title2'

export default function Contact() {
    return (
        <>
            <div className='mt-24'>
                <div className='text-center'>
                    <Title2>Contact</Title2>
                </div>
                <div className='flex justify-center'>
                    <div className='w-2/3'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}
