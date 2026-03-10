"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import BackgroundPattern from "@/components/BackgroundPattern";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Corregido: React.ReactNode en lugar de React.React-Node
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="es" className="!scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          {!isHomePage && <BackgroundPattern />}
          <Header />
          <main>{children}</main> {/* Main ya no tiene padding */}
          <Footer />
          <BackToTopButton />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
