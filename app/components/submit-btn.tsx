import React from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import arrowTopRight from "../../public/svg/arrowTopRight.svg";


export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="p-3 w-32 flex flex-wrap bg-gradient-radial from-[#8A1D1D] to-[#884F4F] rounded-sm items-center" disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <p className="text-black font-semibold">Envoyer</p>
        </>
      )}
      <Image
        priority
        src={arrowTopRight}
        alt="Arrow icon"
      />
    </button>
  );
}