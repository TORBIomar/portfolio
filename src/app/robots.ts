import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt metadata rules for search engine crawlers.
 * Discloses the canonical sitemap and host for Googlebot and Bingbot indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.omartorbi.engineer/sitemap.xml",
    host: "https://www.omartorbi.engineer",
  };
}
