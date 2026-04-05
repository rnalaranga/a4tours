import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#550000",
};

export const metadata: Metadata = {
  title: "A4 Tours | Unforgettable Travel Experiences",
  description:
    "A4 Tours offers premium tour packages, curated travel experiences, and exceptional service. Explore Sri Lanka and beyond with our expert guides.",
  keywords:
    "A4 Tours, travel, tour packages, Sri Lanka tours, travel agency, holiday packages",
  openGraph: {
    title: "A4 Tours | Unforgettable Travel Experiences",
    description:
      "Discover the world with A4 Tours – premium travel packages with expert guides.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
