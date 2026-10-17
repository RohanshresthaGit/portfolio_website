import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Rohan Shrestha",
    description:
        "Read the privacy policy for Rohan Shrestha's website and applications, including details about information use and contact options.",
    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}