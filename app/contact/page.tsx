"use client";

import ButtonBack from "../components/ButtonBack";
import Title2 from "../components/Title2";
import toast from "react-hot-toast";
import SubmitBtn from "../components/submit-btn";

export default function Projets() {
    const handleSubmit = async (formData: FormData) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.error) {
            toast.error(data.error);
            return;
        }

        toast.success("Message envoyé avec succès !");
    };

    return (
        <>
            <div className="mt-40">
                <ButtonBack href="/" />
                <div className="text-center">
                    <Title2>CONTACT</Title2>
                </div>
                <div className="bg-[#462525] absolute top-[10rem] -z-10 h-[45rem] rounded-full blur-[10rem] w-[80rem]"></div>

                <section className="flex justify-center text-xl">
                    <form 
                        className="mt-10 flex flex-col space-y-10 w-2/3"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            await handleSubmit(formData);
                        }}
                    >
                        <div className="flex flex-wrap justify-between">
                            <input
                                className="h-14 w-5/12 border-b-2 bg-transparent focus:outline-none"
                                name="senderFirstName"
                                type="text"
                                required
                                maxLength={500}
                                placeholder="Prénom"
                                autoComplete="off"
                            />
                            <input
                                className="h-14 w-5/12 border-b-2 bg-transparent focus:outline-none"
                                name="senderLastName"
                                type="text"
                                required
                                maxLength={500}
                                placeholder="Nom"
                                autoComplete="off"
                            />
                        </div>
                        <input
                            className="h-14 border-b-2 bg-transparent focus:outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="E-mail"
                            autoComplete="off"
                        />
                        <textarea
                            className="h-52 my-3 w-full border-b-2 bg-transparent focus:outline-none resize-none"
                            name="message"
                            placeholder="Message"
                            required
                            maxLength={5000}
                            autoComplete="off"
                        />
                        <SubmitBtn />
                    </form>
                </section>
            </div>
        </>
    );
}
