import { bodoni_moda } from '../fonts/fonts'

interface ButtonProps {
  children: string;  // Le texte est maintenant optionnel
}

export default function Title2({ children }: ButtonProps) {
  return (
        <h2 className={`${bodoni_moda.className} text-[120px]`}>
          {children}
        </h2>
    )
}
