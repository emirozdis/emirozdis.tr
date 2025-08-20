import About, { Experience } from "@/components/About";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { projects } from "@/lib/projectData";
import { Metadata } from "next";

// Data for the About component's experience section
const experiences: Experience[] = [
  {
    date: "Present",
    duration: "4 months",
    role: "Web Developer",
    company: "Kod-net",
    description:
      "Developing and maintaining commercial applications while collaborating with the team to deliver user-friendly and scalable software solutions.",
    isPresent: true,
  },
  {
    date: "2025",
    duration: "1.5 years",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Built custom web projects for clients and companies handling both frontend and backend development. Managed projects from planning to deployment.",
  },
  {
    date: "2024",
    duration: "9 months",
    role: "Founder",
    company: "Preroute App",
    description:
      "Created an real-time ambulance alert system for mobile, achieving Global 12th place at Teknofest KKTC.",
  },
  {
    date: "2023",
    duration: "9 months",
    role: "Founder",
    company: "VitalBoost App",
    description:
      "Developed a health-focused desktop application that became a Teknofest semifinalist.",
  },
];

// SEO Enhancement: Specific metadata for the homepage.
export const metadata: Metadata = {
  title: "Emir Özdiş - Fullstack Developer",
  description:
    "Hey, I'm Emir. A junior web developer passionate about building clean, minimal, and interactive web experiences with Next.js and TypeScript.",
};

export default function Home() {
  const homepageProjects = projects.filter((p) => p.showOnHomepage);

  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 bg-white">
        <Hero />
      </div>

      {/* SEO Fix: Wrapped projects in a single section with a unique ID for navigation */}
      <section id="projects">
        {homepageProjects.map((project, index) => (
          <Project
            key={project.id}
            project={{
              name: project.title,
              year: project.year,
              description: project.description,
              detailsLink: project.detailsLink,
              imageUrl: project.imageUrl,
            }}
            isLastProject={index === homepageProjects.length - 1}
          />
        ))}
      </section>

      <About experiences={experiences} />
    </>
  );
}