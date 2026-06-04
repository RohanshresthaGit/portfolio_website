import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Rohan Shrestha | Flutter Developer | Node.js Developer",
  description: "Personal Portfolio website of Rohan Shrestha, Flutter Developer, Software Developer, Node.js developer & Mobile App Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
      >
        <CustomCursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
