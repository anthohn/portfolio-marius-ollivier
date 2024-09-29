'use client'
import { bodoni_moda } from '../fonts/fonts'
import Image from 'next/image'
import Instagram from "../../public/svg/instagram.svg";
import { links } from "@/lib/data";
import Link from 'next/link';
import swissBerry from '@/public/svg/swiss-berry.svg';


export default function About() {
    return (
        <>
            <footer className="w-full flex flex-wrap h-64 border-t-2 items-center mt-96">
                <h2 className={`${bodoni_moda.className} text-[40px] w-1/2 text-center border-r-[3px] px-4`}>MARIUS OLIVIER</h2>
                <div className="w-1/2 flex flex-wrap space-x-14 px-4 justify-center text-sm" >
                    <div className='flex flex-col space-y-2'>
                        <div className='flex flex-wrap space-x-4 list-none'>
                        {links.map(link => (
                            <li key={link.href} className="relative">
                                <Link href={link.href} >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        </div>
                        <p>2024 - Tous droits réservé</p>
                    </div>
                    <div className='flex flex-wrap  space-x-5 items-center '>
                        <a className='und underline decoration-[#8A1D1D] underline-offset-4 decoration-2' href="mailto:contact@marius-ollivier.ch">contact@marius-ollivier.ch</a>
                        <a className='bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-md p-1' href="https://www.instagram.com/p/C27u1PPMJKm/" target="_blank">
                            <Image
                            priority
                            src={Instagram}
                            alt="Arrow icon"
                            />
                        </a>
                    </div>
                </div>
                <a className="flex w-full justify-center space-x-4 items-center" href="https://www.swiss-berry.com" target="_blank">
                    <p className="text-gray-50">Website made by</p>
                    <Image
                    priority
                    src={swissBerry}
                    alt="Arrow icon"
                    width={100}
                    />
                </a>
            </footer>
        </>
    )
}