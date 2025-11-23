import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gutnes Digital - Digitalización y Desarrollo Web en Sevilla",
  description: "Expertos en digitalización empresarial, desarrollo web, SEO y auditoría IT en Alcalá de Guadaíra, Sevilla. Transformamos tu negocio digitalmente.",
  keywords: ["digitalización", "desarrollo web", "SEO", "Sevilla", "Alcalá de Guadaíra", "auditoría IT", "transformación digital"],
  authors: [{ name: "Gutnes Digital" }],
  openGraph: {
    title: "Gutnes Digital - Digitalización y Desarrollo Web",
    description: "Transformamos tu negocio digitalmente con soluciones web profesionales y estrategias SEO efectivas",
    url: "https://www.gutnes.es",
    siteName: "Gutnes Digital",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
