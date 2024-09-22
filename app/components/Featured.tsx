import Title2 from './Title2';
import featured1 from '@/public/featured1.png';
import featured2 from '@/public/featured2.png';
import Image from 'next/image';
import Button from './Button';

export default function Featured() {
    return (
      <>
        <div className="flex flex-wrap">

            <div className="w-1/2 space-y-11 my-28">
                <Image src={featured1} width={640} height={640} alt="image projet 1" />
                <div className='flex flex-col space-y-8'>
                    <p className='text-5xl italic'>Gabriel Sanchez - 2024</p>
                    <div className='flex flex-wrap items-center space-x-4'>
                        <p className='italic font-bold text-4xl'>Projet</p>
                        <Button href="/projet/sanchez" />

                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 space-y-16">
                <div className='flex flex-col -space-y-12 w-[620px]'>
                    <Title2 text="Featured"></Title2>
                    <p className='text-right italic text-5xl font-semibold'>en vedette</p>
                </div>
                <Image src={featured2} width={800} height={800} alt="image projet 2" />
            </div>
        </div>
      </>
    );
  }
  