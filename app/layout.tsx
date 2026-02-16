import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Relix — Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of John Relix, a full-stack developer specializing in React, Next.js, and modern web technologies. Check out projects, skills, and get in touch.",
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js", "typescript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
