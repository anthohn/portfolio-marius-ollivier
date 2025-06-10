'use client'
import { bodoni_moda } from '../fonts/fonts'
import Image from 'next/image'
import Instagram from "../../public/svg/instagram.svg";
import { links } from "@/lib/data";
import Link from 'next/link';
import swissBerry from '@/public/svg/logo.svg';
import { ThemeToggle } from "../theme-toggle";

export default function About() {
    return (
        <>
            <footer className="flex flex-col space-y-20 p-4 mt-96 shadow-[0px_-20px_50px_0px_#D96161] dark:shadow-[0px_-20px_50px_0px_#462525] pt-32 rounded-t-[50px]">
                <div className=' w-full flex flex-col space-y-10 md:space-y-0 lg:flex-row items-center '>
                    <h2 className={`${bodoni_moda.className} text-[40px] md:w-3/4 text-center border-primary-light dark:border-primary-dark lg:border-r-[3px] px-4`}>MARIUS OLLIVIER</h2>
                    <div className="w-3/4 flex flex-col md:flex-row justify-center text-md items-center">
                        <div className='flex md:w-1/2 flex-col space-y-4 '>
                            <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row items-center md:justify-center md:space-x-4 list-none font-semibold p-6 lg:p-0'>
                                {links.map(link => (
                                    <li key={link.href} className="relative">
                                        <Link href={link.href} >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                            <ThemeToggle />
                        </div>
                        <div className='flex md:w-1/2 justify-center flex-row space-x-5 items-center'>
                            <a className='underline decoration-[#8A1D1D] underline-offset-4 decoration-2' href="mailto:contact@marius-ollivier.ch">contact@marius-ollivier.ch</a>
                            <a className='bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-md p-1' href="https://www.instagram.com/p/C27u1PPMJKm/" target="_blank">
                                <Image
                                priority
                                src={Instagram}
                                alt="instagram"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <a className="flex w-full justify-center space-x-4 items-center" href="https://www.swiss-berry.com" target="_blank">
                    <p>Website made by </p>

                    <Image
                    priority
                    src={swissBerry}
                    alt="Swiss Berry icon"
                    width={30}
                    />
                    <span className="text-2xl font-bold text-primary-light dark:text-primary-dark">Swissberry</span>
                </a>

            </footer>
        </>
    )
}
