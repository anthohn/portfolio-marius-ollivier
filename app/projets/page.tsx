import Title2 from "../components/Title2"
import { projectsData } from "@/lib/data";
import ButtonBack from '@/app/components/ButtonBack';
import Button from '@/app/components/Button';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projets"
}

export default function Projets() {

    return (
        <>
            <div>
                <ButtonBack href="/"  />
                <Title2>PROJETS</Title2>

                <div className="bg-[#462525] absolute top-[20rem] -z-10 left-[5rem] h-[35rem] rounded-full blur-[10rem] w-[80rem]"></div>
                {projectsData.map((project, index) => (
                    <div key={index} className='flex flex-col space-x-10'>
                        <div className="flex flex-col space-y-6 border-b-2 pt-16">
                            <div className='flex flex-wrap space-x-10 items-center'>
                                <p className='text-6xl font-semibold italic'>{project.title}</p>
                                <Button href={project.href} />

                            </div>
                            <p className="text-2xl">{project.date}</p>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}