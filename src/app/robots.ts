import { siteConfig } from "@/config/siteConfig";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", `${siteConfig.baseUrl}/terms`],
      // disallow: ["/dashboard/*", "/blog/edit/:id", "/auth/*"],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
