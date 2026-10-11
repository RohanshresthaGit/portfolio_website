import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rohan-shrestha",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://rohan-shrestha/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: "https://rohan-shrestha/featured",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}