import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanemiliodev.vercel.app"
  ),
  title: {
    default: "Juan Elgueda | Full-Stack Developer",
    template: "%s | Juan Elgueda",
  },
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript and PostgreSQL. Founder of Agendex, a SaaS booking platform for beauty salons. Available for new opportunities.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "SaaS",
    "Agendex",
  ],
  authors: [{ name: "Juan Elgueda" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Juan Elgueda",
    title: "Juan Elgueda | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript and PostgreSQL. Founder of Agendex, a SaaS booking platform for beauty salons.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juan Elgueda — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Elgueda | Full-Stack Developer",
    description: "Full-Stack Developer — Next.js · TypeScript · SaaS",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
