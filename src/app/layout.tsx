import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.brand.url),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.openGraphDescription,
    url: siteContent.brand.url,
    siteName: siteContent.brand.name,
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
