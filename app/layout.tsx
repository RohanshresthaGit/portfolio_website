import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CustomCursor from "@/components/CustomCursor";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://rohan-shrestha.info.np/#person",
  "name": "Rohan Shrestha",
  "url": "https://rohan-shrestha.info.np",
  "jobTitle": "Flutter & Node.js Developer",
  "description": "Rohan Shrestha is a Flutter and Node.js developer in Nepal building mobile apps, APIs, and full stack products for startups and growing teams.",
  "image": "https://rohan-shrestha.info.np/my_image.jpeg",
  "email": "shrestharohan495@gmail.com",
  "telephone": "+9779818044672",
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
    "Flutter Development",
    "Mobile App Development",
    "Node.js Development",
    "REST API Development",
    "Full Stack Development",
    "Product Development",
    "Mobile App Architecture",
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
  "alternateName": "Rohan Shrestha | Flutter & Node.js Developer",
  "url": "https://rohan-shrestha.info.np",
  "description": "Rohan Shrestha is a Flutter and Node.js developer in Nepal building mobile apps, APIs, and full stack products for startups and growing teams.",
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
  "description": "The official portfolio of Rohan Shrestha, a Flutter and Node.js developer in Nepal building mobile applications, APIs, and product-focused software.",
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
  title: "Rohan Shrestha | Flutter Developer & Full Stack Software Developer in Nepal",
  description: "Rohan Shrestha is a Flutter developer and full stack software developer in Nepal building mobile apps, Node.js APIs, and reliable product experiences for startups and growing teams.",
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
    "Rohan Shrestha developer",
    "Rohan Shrestha software developer",
    "Flutter developer Nepal",
    "Node.js developer Nepal",
    "Full stack developer Nepal",
    "Mobile app developer Nepal",
    "Software developer Nepal",
    "Flutter developer Kathmandu",
    "Freelance Flutter developer",
    "Rohan Shrestha portfolio"
  ],
  verification: {
    google: "cwoiSs1wZ4y_Wu_YLLZuMSpjRnwbUwF0AF2CEnQc-0k",
  },
  openGraph: {
    title: "Rohan Shrestha | Flutter Developer & Full Stack Software Developer in Nepal",
    description: "Rohan Shrestha builds mobile apps, Node.js APIs, and full stack products as a Flutter developer and software developer in Nepal.",
    type: "website",
    locale: "en_US",
    siteName: "Rohan Shrestha Portfolio",
    url: "https://rohan-shrestha.info.np",
    images: [
      {
        url: "/my_image.jpeg",
        alt: "Rohan Shrestha, Flutter developer and software developer in Nepal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Shrestha | Flutter Developer & Full Stack Software Developer in Nepal",
    description: "Rohan Shrestha builds mobile apps, Node.js APIs, and full stack products as a Flutter developer and software developer in Nepal.",
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
        <MotionProvider>
          <CustomCursor />
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
