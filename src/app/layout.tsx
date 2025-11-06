import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {HomeProps} from "@/utils/datas.type";
import {getData} from "@/utils/actions/get-data";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada.",
  description: "Sua oficina especializada mais perto de ti.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { object }: HomeProps = await getData();

    return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <Header />
        { children }
        <Footer object={object} />
      </body>
    </html>
  );
}
