import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FooterComp from "./components/FooterComp";
import NavMenu from "./components/NavMenu";
import PrelineScript from "./components/PrelineScript";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CompTech",
  description: "35 Years of Execellence "
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavMenu></NavMenu>

        {children}

        <FooterComp></FooterComp>
      </body>

      <PrelineScript />
    </html>
  );
}
