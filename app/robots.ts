import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://rohan-shrestha.info.np/sitemap.xml",
    host: "https://rohan-shrestha.info.np"
  };
}