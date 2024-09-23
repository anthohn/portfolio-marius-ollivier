import imgCoverGrece from "@/public/projets/grece/imgCoverGrece.png";
import imgCoverClips from "@/public/projets/clips/imgCoverClips.png";
import imgCoverArtists from "@/public/projets/coversArtists/imgCoversArtists.png";
import imgCoverSanchez from "@/public/projets/sanchez/imgCoverSanchez.png";
import imgCoverCelia from "@/public/projets/celia/imgCoverCelia.png";

import imgGrece1 from "@/public/projets/grece/imgGrece1.jpg";
import imgGrece2 from "@/public/projets/grece/imgGrece2.jpg";
import imgGrece3 from "@/public/projets/grece/imgGrece3.jpg";
import imgGrece4 from "@/public/projets/grece/imgGrece4.jpg";
import imgGrece5 from "@/public/projets/grece/imgGrece5.jpg";
import imgGrece6 from "@/public/projets/grece/imgGrece6.jpg";
import imgGrece7 from "@/public/projets/grece/imgGrece7.jpg";
import imgGrece8 from "@/public/projets/grece/imgGrece8.jpg";
import imgGrece9 from "@/public/projets/grece/imgGrece9.jpg";
import imgGrece10 from "@/public/projets/grece/imgGrece10.jpg";

import imgClips1 from "@/public/projets/clips/imgClips1.jpg";
import imgClips2 from "@/public/projets/clips/imgClips2.jpg";
import imgClips3 from "@/public/projets/clips/imgClips3.jpg";
import imgClips4 from "@/public/projets/clips/imgClips4.jpg";
import imgClips5 from "@/public/projets/clips/imgClips5.jpg";
import imgClips6 from "@/public/projets/clips/imgClips6.jpg";
import imgClips7 from "@/public/projets/clips/imgClips7.jpg";
import imgClips8 from "@/public/projets/clips/imgClips8.jpg";
import imgClips9 from "@/public/projets/clips/imgClips9.jpg";

import imgCoverArtistes1 from "@/public/projets/coversArtists/imgCoverArtistes1.jpg";
import imgCoverArtistes2 from "@/public/projets/coversArtists/imgCoverArtistes2.jpg";
import imgCoverArtistes3 from "@/public/projets/coversArtists/imgCoverArtistes3.jpg";
import imgCoverArtistes4 from "@/public/projets/coversArtists/imgCoverArtistes4.jpg";
import imgCoverArtistes5 from "@/public/projets/coversArtists/imgCoverArtistes5.jpg";

import imgSanchez1 from "@/public/projets/sanchez/imgSanchez1.jpg";
import imgSanchez2 from "@/public/projets/sanchez/imgSanchez2.jpg";
import imgSanchez3 from "@/public/projets/sanchez/imgSanchez3.jpg";
import imgSanchez4 from "@/public/projets/sanchez/imgSanchez4.jpg";
import imgSanchez5 from "@/public/projets/sanchez/imgSanchez5.jpg";
import imgSanchez6 from "@/public/projets/sanchez/imgSanchez6.jpg";
import imgSanchez7 from "@/public/projets/sanchez/imgSanchez7.jpg";

import imgCelia1 from "@/public/projets/celia/imgCelia1.jpg";
import imgCelia2 from "@/public/projets/celia/imgCelia2.jpg";
import imgCelia3 from "@/public/projets/celia/imgCelia3.jpg";
import imgCelia4 from "@/public/projets/celia/imgCelia4.jpg";
import imgCelia5 from "@/public/projets/celia/imgCelia5.jpg";

import { StaticImageData } from "next/image";

// Typage des liens
type Link = {
  label: string;
  href: string;
};

export const links: Link[] = [
  {
    label: "Ollivier",
    href: "/",
  },
  {
    label: "Projets",
    href: "/projets",
  },
  {
    label: "Contact",
    href: "/contact",
  }
] as const;

// Typage des projets
type Project = {
  title: string;
  date: string;
  coverProject: StaticImageData;
  images: StaticImageData[]; // Type fourni par Next.js pour les images importées
  href: string;
};

export const projectsData: Project[] = [
  {
    title: "GRECE",
    date: "2023",
    coverProject: imgCoverGrece,
    images: [imgGrece1, imgGrece2, imgGrece3, imgGrece4, imgGrece5, imgGrece6, imgGrece7, imgGrece8, imgGrece9, imgGrece10],
    href: "/projet/grece"
  },
  {
    title: "TOURNAGES CLIPS",
    date: "2024",
    coverProject: imgCoverClips,
    images: [imgClips1, imgClips2, imgClips3, imgClips4, imgClips5, imgClips6, imgClips7, imgClips8, imgClips9],
    href: "/projet/tournages-clips"

  },
  {
    title: "COVERS ARTISTES",
    date: "2023",
    coverProject: imgCoverArtists,

    images: [imgCoverArtistes1, imgCoverArtistes2, imgCoverArtistes3, imgCoverArtistes4, imgCoverArtistes5],
    href: "/projet/covers-artistes"

  },
  {
    title: "SANCHEZ",
    date: "2024",
    coverProject: imgCoverSanchez,
    images: [imgSanchez1, imgSanchez2, imgSanchez3, imgSanchez4, imgSanchez5, imgSanchez6, imgSanchez7],
    href: "/projet/sanchez"
  },
  {
    title: "CELIA",
    date: "2023",
    coverProject: imgCoverCelia,
    images: [imgCelia1, imgCelia2, imgCelia3, imgCelia4, imgCelia5],
    href: "/projet/celia"

  },

] as const;