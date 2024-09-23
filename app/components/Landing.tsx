import { bodoni_moda } from '../fonts/fonts'

interface LandingProps {
    firstName: string;
    lastName: string;
}

export default function Landing({ firstName, lastName }: LandingProps) {
    return (
        <div className="h-screen w-full relative">
            <div className={`${bodoni_moda.className} flex flex-col items-center -space-y-32`}>
                {/* Titres en arrière-plan (plus petits) */}
                <h1 className="absolute text-[60px] md:text-[180px] z-10 mt-52">
                    {firstName}
                </h1>
                <h1 className="absolute text-[60px] md:text-[280px] z-10 mt-52">
                    {lastName}
                </h1>
                
                <h1 className="absolute text-[70px] md:text-[275px] blur-sm opacity-30 z-10 mt-52">
                    {lastName}
                </h1>
                <h1 className="absolute text-[70px] md:text-[270px] blur-sm opacity-30 z-10 mt-52">
                    {lastName}
                </h1>
                <h1 className="absolute text-[70px] md:text-[265px] blur-sm opacity-30 z-10 mt-52">
                    {lastName}
                </h1>
                <h1 className="absolute text-[70px] md:text-[260px] blur-sm opacity-30 z-10 mt-52">
                    {lastName}
                </h1>
                <h1 className="absolute text-[70px] md:text-[255px] blur-sm opacity-30 z-10 mt-52">
                    {lastName}
                </h1>
                <h1 className="absolute text-[70px] md:text-[250px] blur-md opacity-30 z-10 mt-52">
                    {lastName}
                </h1>

                {/* Titres principaux (plus grands) */}
                {/* <h1 className="relative text-[60px] md:text-[180px] z-10">
                    {firstName}
                </h1>
                <h1 className="relative text-[60px] md:text-[280px] z-10">
                    {lastName}
                </h1> */}
            </div>
        </div>
    );
}
