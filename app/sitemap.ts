import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rohan-shrestha.info.np",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://rohan-shrestha.info.np/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: "https://rohan-shrestha.info.np/featured",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}