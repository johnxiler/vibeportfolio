import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import Navbar from "@/app/components/Navbar";
import Security from "@/app/components/Security";


const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Relix — Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of John Relix, a full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <Security />


        {/* Global Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
