import arrowTopRight from "../../public/svg/arrowTopRight.svg";
import Image from "next/image";
import { inter } from '../fonts/fonts'

interface ButtonProps {
  text?: string;  // Le texte est maintenant optionnel
  href?: string;  

}

export default function Button({ text, href  }: ButtonProps) {
  return (
    <a href={href} className="p-3 flex flex-wrap space-x-6 bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm">
      {/* Affiche le texte seulement s'il est fourni */}
      {text && (
        <p className={`${inter.className} button-text`}>
          {text}
        </p>
      )}
      <Image
        priority
        src={arrowTopRight}
        alt="Arrow icon"
      />
    </a>
  );
}
