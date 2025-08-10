// src/app/page.tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // Ya no necesitamos un <main> tag si solo hay un componente de sección
    <Hero />
  );
}
