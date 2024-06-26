import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spartan.variable}`}>
        <Navbar />
        <main className=" bg-[#030E1A] font-spartan text-zinc-100">
          {children}
        </main>
      </body>
    </html>
  );
}
