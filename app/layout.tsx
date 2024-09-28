import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Toaster } from "react-hot-toast";
import CustomCursor from '@/app/components/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: "Marius Ollivier",
    template: "%s - Marius Ollivier"

  },
  description: "Explorez l'univers de Marius Ollivier. Découvrez comment Marius Ollivier peut transformer vos visions en réalité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="mt-32">
          {children}
          <Footer />
          <CustomCursor />
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
  
}
