import { bodoni_moda } from '../fonts/fonts';
import Image from 'next/image';

interface AboutProps {
  title: string;
  introText: string;
  imageSrc: string;
  sideText: string;
}

export default function About({ title, introText, imageSrc, sideText }: AboutProps) {
  return (
    <div className="h-screen opacity-90 w-full relative">
      <div className={`${bodoni_moda.className} text-neutral-50 flex flex-wrap`}>
        <div className='w-5/12'>
          <Image src={imageSrc} width={1000} height={1000} priority className="w-[600px] h-auto -z-10" alt="About image" />
        </div>
        <div className='w-4/12 flex flex-col pt-28'>
          <h2 className='text-[120px]'>{title}</h2>
          <p className='w-5/6 text-2xl'>{introText}</p>
        </div>
        <div className='w-3/12'>
          <p className='w-5/6 text-2xl pt-40 text-right'>{sideText}</p>
        </div>
      </div>
    </div>
  );
}
