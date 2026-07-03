import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Dubai’de Şirket Kurmak | UAE Market Entry ve Şirket Kuruluşu Danışmanlığı",
  description:
    "Dubai’de şirket kurmak isteyen Türk girişimciler için free zone, mainland, banka hesabı, vergi uyumu, pazar araştırması ve B2B iş geliştirme danışmanlığı.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Dubai’de Şirket Kurmak | UAE Market Entry ve Şirket Kuruluşu Danışmanlığı",
    description:
      "26 yıllık dış ticaret tecrübesiyle Dubai ve UAE şirket kuruluşu, pazar araştırması, market entry ve B2B iş geliştirme danışmanlığı.",
    url: site.url,
    siteName: site.name,
    locale: "tr_TR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
