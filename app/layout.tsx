import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Maris Ollivier",
  description: "Explorez l'univers de Marius Ollivier. Découvrez comment Marius Ollivier peut transformer vos visions en réalité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body>
        <Header  />
        <div className="flex justify-center ">  
          <div className=" flex flex-col w-10/12">
          

            {children}
            <Footer />
            <Toaster position="top-right" />
          </div>
        </div>
      </body>
    </html>
  );
}
