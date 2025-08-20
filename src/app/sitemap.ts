import { MetadataRoute } from "next";
import { projects } from "@/lib/projectData";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain
  const baseUrl = "https://emirozdis.com";

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
    ...projectUrls,
  ];
}