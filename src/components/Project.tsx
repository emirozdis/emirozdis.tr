import Image from "next/image";
import Link from "next/link";

export interface ProjectData {
  name: string;
  year: number;
  description: string;
  detailsLink: string;
  imageUrl: string;
}

interface ProjectProps {
  project: ProjectData;
  isLastProject?: boolean;
}

export default function Project({
  project,
  isLastProject = false,
}: ProjectProps) {
  return (
    // SEO Fix: Removed id="projects" to avoid duplicate IDs. The parent now has the ID.
    <div className="py-20 px-4 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-sans font-light text-lg md:text-xl text-secondary">
          {project.name} • {project.year}
        </p>

        <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-[60px] text-primary mt-4 max-w-4xl mx-auto leading-tight">
          {project.description}
        </h2>

        <Link
          href={project.detailsLink}
          className="font-sans text-lg md:text-xl text-accent mt-6 inline-block hover:underline"
        >
          View Details
        </Link>

        <div className="mt-16">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F072B6] via-[#9F2BFF] to-[#DD4470] border border-[#AEAEAE]">
            <Image
              src={project.imageUrl}
              alt={`${project.name} project dashboard`}
              width={1060}
              height={650}
              className="rounded-[14px] border border-[#AEAEAE] w-full h-auto"
            />
          </div>
        </div>

        {isLastProject && (
          <Link
            href="/projects"
            className="mt-12 inline-block rounded-2xl bg-[#222222] px-8 py-4 font-sans text-xl font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Discover More
          </Link>
        )}
      </div>
    </div>
  );
}