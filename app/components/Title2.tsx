import { bodoni_moda } from '../fonts/fonts'

interface ButtonProps {
  children: string;
}

export default function Title2({ children }: ButtonProps) {
  return (
        <h2 className={`${bodoni_moda.className} text-[70px] md:text-[100px] lg:text-[110px] xl:text-[120px]`}>
          {children}
        </h2>
    )
}
