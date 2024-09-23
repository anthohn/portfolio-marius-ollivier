// contact/page.tsx
import ButtonBack from "../components/ButtonBack";
import Title2 from "../components/Title2";
import ContactForm from "@/app/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <>
            <div>
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
            </div>
        </>
    );
}
