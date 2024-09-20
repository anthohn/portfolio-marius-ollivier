import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: "Maris Ollivier",
  description: "Explorez l'univers de Marius Ollivier. Découvrez comment Marius Ollivier peut transformer vos visions en réalité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navLinks = [
    { href: "/", label: "OLLIVIER" },
    { href: "/projets", label: "PROJETS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <html lang="fr">
      <body>
        <Header navLinks={navLinks} />
        <div className="flex justify-center ">  
          <div className=" flex flex-col w-10/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
