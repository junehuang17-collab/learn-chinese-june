import type { Metadata } from "next";
import "./globals.css";
import "./site-overrides.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${siteConfig.brand} | Practical Mandarin`,
  description: siteConfig.description,
  metadataBase: new URL("https://learn-chinese-june.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
