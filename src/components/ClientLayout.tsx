"use client";

import { usePathname } from "next/navigation";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <StyledComponentsRegistry>
      {!isHomePage && <BackgroundPattern />}
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </StyledComponentsRegistry>
  );
}
