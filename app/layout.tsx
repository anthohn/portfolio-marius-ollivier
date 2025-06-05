import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Toaster } from "react-hot-toast";
import CustomCursor from '@/app/components/CustomCursor';
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

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
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <div className="max-w-screen-2xl mx-auto">
          {children}

        </div>
        <ThemeToggle />          
        <Footer />
        <CustomCursor />
        <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
