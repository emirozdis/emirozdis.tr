import { MetadataRoute } from "next";
import { projects } from "@/lib/projectData";
import { SITE_URL } from "@/lib/site";
import { gorensesPrivacy } from "@/content/gorenses-privacy";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: gorensesPrivacy.url,
      lastModified: new Date(`${gorensesPrivacy.updatedISO}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projectUrls,
  ];
}
