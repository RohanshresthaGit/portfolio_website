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
  "@id": "https://rohan-shrestha.info.np/#person",
  "name": "Rohan Shrestha",
  "url": "https://rohan-shrestha.info.np",
  "jobTitle": "Flutter Developer and Full Stack Software Developer",
  "description": "Rohan Shrestha is a software developer in Nepal specializing in Flutter mobile application development, Node.js backend development, REST APIs, and full stack product development.",
  "image": "https://rohan-shrestha.info.np/my_image.jpeg",
  "email": "mailto:shrestharohan495@gmail.com",
  "availableLanguage": ["en", "ne"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "professional inquiries",
    "telephone": "+9779818044672",
    "email": "shrestharohan495@gmail.com",
    "availableLanguage": ["English", "Nepali"]
  },
  "nationality": {
    "@type": "Country",
    "name": "Nepal"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NP"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  },
  "knowsAbout": [
    "Flutter App Development",
    "Mobile Application Development",
    "Node.js Backend Development",
    "Full Stack Development",
    "REST API Development",
    "Cross-Platform Mobile App Development",
    "Mobile Application Engineering",
    "Software Development"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/-rohan-shrestha/",
    "https://github.com/RohanshresthaGit",
    "https://medium.com/@shrestharohan495"
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rohan-shrestha.info.np/#website",
  "name": "Rohan Shrestha Portfolio",
  "alternateName": "Rohan Shrestha - Flutter and Node.js Developer",
  "url": "https://rohan-shrestha.info.np",
  "description": "Rohan Shrestha is a Flutter and Node.js developer in Nepal building mobile apps, web apps, and scalable APIs. View projects, experience, skills, featured and contact details of Rohan Shrestha, a software developer in Nepal.",
  "inLanguage": "en-US",
  "author": {
    "@type": "Person",
    "@id": "https://rohan-shrestha.info.np/#person",
    "name": "Rohan Shrestha"
  }
};

const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://rohan-shrestha.info.np/#profile",
  "url": "https://rohan-shrestha.info.np",
  "name": "Rohan Shrestha | Portfolio",
  "description": "The official portfolio of Rohan Shrestha, a Flutter developer, software developer, and full stack developer in Nepal specializing in mobile applications and Node.js.",
  "isPartOf": {
    "@id": "https://rohan-shrestha.info.np/#website"
  },
  "mainEntity": {
    "@id": "https://rohan-shrestha.info.np/#person"
  },
  "inLanguage": "en-US"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rohan-shrestha.info.np"),
  applicationName: "Rohan Shrestha Portfolio",
  manifest: "/manifest.json",
  title: "Rohan Shrestha | Flutter Developer & Software Developer in Nepal",
  description: "Rohan Shrestha is a Flutter developer and software developer in Nepal building mobile applications, Node.js APIs, and full stack software for startups and growing teams.",
  authors: [{ name: "Rohan Shrestha", url: "https://rohan-shrestha.info.np" }],
  creator: "Rohan Shrestha",
  publisher: "Rohan Shrestha",
  themeColor: "#030014",
  other: {
    "geo.region": "NP",
    "geo.placename": "Nepal",
    bingbot: "index, follow"
  },
  keywords: [
    "Rohan Shrestha",
    "Flutter Developer",
    "Node.js Developer Nepal",
    "Mobile app Developer",
    "Mobile app Developer Nepal",
    "Software Developer",
    "Node.js Developer Nepal",
    "Full Stack Developer",
    "Full Stack Developer Nepal",
    "Rohan Shrestha Portfolio",
    "Rohan Shrestha website",
  ],
  verification: {
    google: "cwoiSs1wZ4y_Wu_YLLZuMSpjRnwbUwF0AF2CEnQc-0k",
  },
  openGraph: {
    title: "Rohan Shrestha | Flutter Developer & Software Developer in Nepal",
    description: "Rohan Shrestha builds mobile applications, Node.js backend services, and full stack software as a Flutter developer in Nepal.",
    type: "website",
    locale: "en_US",
    siteName: "Rohan Shrestha Portfolio",
    url: "https://rohan-shrestha.info.np",
    images: [
      {
        url: "/my_image.jpeg",
        alt: "Rohan Shrestha, Flutter and Node.js developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Shrestha | Flutter Developer & Software Developer in Nepal",
    description: "Rohan Shrestha builds mobile applications, Node.js backend services, and full stack software as a Flutter developer in Nepal.",
    images: ["/my_image.jpeg"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology",
  icons: {
    icon: "/web-app-manifest-192x192.png",
    apple: "/web-app-manifest-192x192.png"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageStructuredData)
          }}
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
