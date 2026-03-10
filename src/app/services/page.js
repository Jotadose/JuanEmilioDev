// Este archivo es un Server Component por defecto.
import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "Development services offered by Juan Elgueda: web applications, SaaS platforms, REST APIs, and database design.",
};

export default function ServicesPage() {
  // Simplemente importa y renderiza el componente correspondiente.
  return <Services />;
}
