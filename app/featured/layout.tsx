import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Featured Work and Achievements | Rohan Shrestha",
    description:
        "Explore Rohan Shrestha's software development achievements, awards, certifications, and community experience in Nepal.",
    alternates: {
        canonical: "/featured",
    },
};

export default function FeaturedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}