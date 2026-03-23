import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';
import Problem from '@/components/Problem';
import Uom from '@/components/Uom';
import Setup from '@/components/Setup';
import Timeline from '@/components/Timeline';
import Grid from '@/components/Grid';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Workflow from '@/components/Workflow';
import AOSInit from "@/components/AOSInit";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
   variable: "--font-inter",
  weight: ["400", "500", "600", "700"], // optional
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bMobile Route Software | Smart Route Planning",
  description: "Optimize your delivery routes, manage inventory, and streamline field operations with bMobile route software.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        
        <HeaderTop />
        <Navbar />
        <Hero />
        <Slider />
        <Problem />
        <Uom />
        <Setup />
        <Timeline />
        <Workflow />
        <Grid />
        <Features />
        <Footer />
        <AOSInit />
        {children}
       
        </body>
    </html>
  );
}
