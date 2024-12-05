import type { Metadata } from "next";
import "./style.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurav Patil | Crafting Full-Stack Experiences with MERN & Beyond",
  description:
    "I'm Saurav Patil, a passionate full-stack developer specializing in the MERN stack, with expertise in Next.js, .NET, and modern web technologies. I love building dynamic, scalable web applications that push the boundaries of innovation. From frontend finesse to backend efficiency, I craft seamless digital experiences, always eager to learn and integrate the latest tech trends into my work",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
