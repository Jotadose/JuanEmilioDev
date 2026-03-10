// Este archivo es un Server Component por defecto.
import Technologies from "@/components/Technologies";

export const metadata = {
  title: "Technologies",
  description:
    "Technologies and tools used by Juan Elgueda: Next.js, TypeScript, React, Supabase, PostgreSQL, TailwindCSS.",
};

export default function TechnologiesPage() {
  // Simplemente importa y renderiza el componente correspondiente.
  return <Technologies />;
}
