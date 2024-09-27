// import { bodoni_moda } from '../fonts/fonts'
// import Image from 'next/image';
// import CouronneLaurier from '@/public/couronne-laurier.png'
import { Lamp } from '@/app/components/lamp'


interface LandingProps {
    firstName: string;
    lastName: string;
}

export default function Landing({ firstName, lastName }: LandingProps) {
    return (
        <div className="w-full relative">
            <Lamp/>
            {/* <div className={`${bodoni_moda.className} flex flex-col items-center -space-y-20 md:-space-y-24 xl:-space-y-32 mt-72`}> */}
                {/* <Image 
                src={CouronneLaurier}
                alt='Couronne Laurrier'
                    className="absolute -z-10 right-[0rem] top-[0rem] w-[47rem] blur-[3px]"/> */}
                {/* Titres en arrière-plan (plus petits) */}
                {/* <h1 className="text-[90px] md:text-[120px] lg:text-[150px] xl:text-[180px] -z-20">
                    {firstName}
                </h1>
                <h1 className="text-[140px] md:text-[200px] lg:text-[240px] xl:text-[280px] ">
                    {lastName}
                </h1> */}
            {/* </div> */}
        </div>
    );
}
