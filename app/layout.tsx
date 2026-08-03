import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rohan Shrestha",
  "jobTitle": "Flutter & Node.js Full Stack Mobile App Developer",
  "description": "Software developer based in Nepal specializing in Flutter app development, Node.js backend services, REST APIs, and full stack mobile app development.",
  "knowsAbout": [
    "Flutter App Development",
    "Node.js Backend Development",
    "Full Stack Mobile App Development",
    "REST API Development",
    "Cross-Platform Mobile App Development",
    "Mobile Application Engineering"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/-rohan-shrestha/",
    "https://github.com/RohanshresthaGit",
    "https://medium.com/@shrestharohan495"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rohan-shrestha.vercel.app"),
  title: "Rohan Shrestha | Flutter & Node.js Full Stack Mobile App Developer",
  description: "Flutter and Node.js developer based in Nepal building cross-platform mobile apps, REST APIs, and full stack product experiences for startups and growing teams.",
  keywords: [
    "Flutter Developer",
    "Flutter App Developer",
    "Node.js Developer",
    "Full Stack Mobile App Developer",
    "Mobile App Developer",
    "REST API Developer",
    "Software Developer Nepal"
  ],
  openGraph: {
    title: "Rohan Shrestha | Flutter & Node.js Full Stack Mobile App Developer",
    description: "Rohan Shrestha builds scalable mobile apps, backend services, and production-ready product experiences with Flutter and Node.js.",
    type: "website",
    locale: "en_US",
    siteName: "Rohan Shrestha Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Shrestha | Flutter & Node.js Full Stack Mobile App Developer",
    description: "Rohan Shrestha builds scalable mobile apps, backend services, and production-ready product experiences with Flutter and Node.js."
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CustomCursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
