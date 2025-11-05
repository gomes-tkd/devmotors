import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada.",
  description: "Sua oficina especializada mais perto de ti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
          <Header />
        { children }
      </body>
    </html>
  );
}
