"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  navLinks: { href: string; label: string }[];
  bgColor?: string;
}

export default function Header({ navLinks, bgColor = "bg-transparent" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <nav className={`md:bg-transparent absolute w-full ${isMenuOpen ? bgColor : 'bg-transparent'} transition-colors duration-200 p-10`}>
      <button 
        type="button" 
        className="inline-flex items-center w-16 h-16 justify-center text-sm rounded-lg md:hidden" 
        aria-controls="navbar-default" 
        aria-expanded={isMenuOpen} 
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <HamburgerIcon isActive={isMenuOpen} />
      </button>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex`} id="navbar-default">
      <ul className="flex flex-col justify-center text-[#FF8A00] text-5xl space-y-8 md:space-y-0 h-screen md:h-0 md:text-base text md:font-medium md:text-gray-50 md:p-0 md:flex-row md:w-full md:justify-between md:space-x-8">
        {navLinks.map(link => (
          <li key={link.href} className="relative">
            <Link 
              className={`link ${pathname === link.href ? '' : ''}`} 
              href={link.href} 
              onClick={closeMenu}
            >
              {link.label}
            </Link>

            {/* Ajouter le drapeau suisse sous PROJETS */}
            {link.href === "/projets" && (
              <div className="flex justify-center mt-2">
                <Image 
                  src="/swiss-flag.svg"  // Assure-toi que l'image est dans ton dossier public
                  alt="Swiss flag"
                  width={16}  // Taille du drapeau (tu peux ajuster)
                  height={16} 
                  className="object-contain"  // Pour s'assurer que l'image garde ses proportions
                  priority  // Charger en priorité si nécessaire
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

function HamburgerIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg className={`ham hamRotate ham1 ${isActive ? 'active' : ''}`} viewBox="0 0 100 100" width="80">
      <path
        className={`line top ${isActive ? 'active-line' : ''}`}
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
      <path
        className={`line middle ${isActive ? 'active-line' : ''}`}
        d="m 30,50 h 40" />
      <path
        className={`line bottom ${isActive ? 'active-line' : ''}`}
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
    </svg>
  );
}
