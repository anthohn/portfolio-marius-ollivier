import { bodoni_moda } from '../fonts/fonts'

interface ButtonProps {
  text: string;  // Le texte est maintenant optionnel
}

export default function Title2({ text }: ButtonProps) {
  return (
        <h2 className={`${bodoni_moda.className} text-[120px]`}>{text}</h2>
    )
}
