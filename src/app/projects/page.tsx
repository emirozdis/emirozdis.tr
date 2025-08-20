import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectData";
import { Metadata } from "next";

// SEO Enhancement: Added specific metadata for the main projects page.
export const metadata: Metadata = {
  title: "My Work | Emir Özdiş Portfolio",
  description:
    "A collection of my projects as a fullstack developer. Explore my work with Next.js, TypeScript, and various modern technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-grotesk font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[120px] text-primary mb-8 leading-none">
          My Work
        </h1>
        <p className="font-sans text-secondary text-xl md:text-2xl lg:text-[40px] max-w-5xl mx-auto leading-tight">
          Every project introduced me to new skills and perspectives, helping me
          grow as a developer during my journey.
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-20 space-y-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              title: project.title,
              description: project.description,
              imageUrl: project.imageUrl,
              techStack: project.techStack,
              detailsLink: project.detailsLink,
            }}
          />
        ))}
      </div>
    </div>
  );
}