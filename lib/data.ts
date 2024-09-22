import imgGrece from "@/public/imgGrece.png";
import imgTournagesClips from "@/public/imgTournages-clips.png";
import imgCoverArtists from "@/public/imgCoversArtists.png";
import imgSanchez from "@/public/imgSanchez.png";
import imgCelia from "@/public/imgCelia.png";
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
  imageUrl: StaticImageData; // Type fourni par Next.js pour les images importées
  href: string;
};

export const projectsData: Project[] = [
  {
    title: "GRECE",
    date: "2023",
    imageUrl: imgGrece,
    href: "/projet/grece"
  },
  {
    title: "TOURNAGES CLIPS",
    date: "2024",
    imageUrl: imgTournagesClips,
    href: "/projet/tournages-clips"

  },
  {
    title: "COVERS ARTISTES",
    date: "2023",
    imageUrl: imgCoverArtists,
    href: "/projet/covers-artistes"

  },
  {
    title: "SANCHEZ",
    date: "2024",
    imageUrl: imgSanchez,
    href: "/projet/sanchez"
  },
  {
    title: "CELIA",
    date: "2023",
    imageUrl: imgCelia,
    href: "/projet/celia"

  },

] as const;