import { bodoni_moda } from '../fonts/fonts'

interface LandingProps {
    firstName: string;
    lastName: string;
  }
  
  export default function Landing({ firstName, lastName }: LandingProps) {
    return (
      <div className="pt-48 h-screen w-full relative">
        <div className={`${bodoni_moda.className}  flex flex-col items-center -space-y-32`}>
          <h1 className="text-[60px] md:text-[180px]">{firstName}</h1>
          <h1 className="text-[60px] md:text-[280px]">{lastName}</h1>
        </div>
      </div>
    );
  }
  