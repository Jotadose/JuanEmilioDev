// src/app/portfolio/page.js
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Projects by Juan Elgueda — including Agendex, a production SaaS platform for beauty salons, and other full-stack builds.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
