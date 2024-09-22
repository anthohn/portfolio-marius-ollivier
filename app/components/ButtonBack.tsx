import arrowLeft from "../../public/svg/arrowLeft.svg";
import Image from "next/image";

interface ButtonProps {
  href?: string;
}

export default function ButtonBack({ href }: ButtonProps) {
  return (
    <a href={href} className="relative inline-flex items-center py-1 px-4 space-x-6 bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm">
      <div className="relative z-10">
        <Image
          priority
          src={arrowLeft}
          alt="Arrow icon"
        />
      </div>
    </a>
  );
}
