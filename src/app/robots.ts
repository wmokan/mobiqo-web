import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://mobiqo.app/sitemap.xml",
    host: "https://mobiqo.app",
  };
}
