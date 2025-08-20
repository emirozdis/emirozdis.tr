import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | Emir Özdiş`,
    description: project.introduction,
    openGraph: {
      title: `${project.title} | Project by Emir Özdiş`,
      description: project.introduction,
      images: [project.images[0]],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Project by Emir Özdiş`,
      description: project.introduction,
      images: [project.images[0]],
    },
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "DeveloperApplication",
    description: project.introduction,
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Emir Özdiş",
    },
    image: project.images[0],
    keywords: project.techStack.join(", "),
  };

  return (
    <div className="bg-white py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-grotesk font-bold text-[120px] text-[#222222] text-center">
          {project.title}
        </h1>
        <p className="font-sans text-3xl text-[#666666] text-center mt-4 max-w-5xl mx-auto">
          {project.description}
        </p>

        <div className="flex justify-center gap-12 mt-12">
          <div>
            <p className="font-geist text-xl font-light text-[#666666]">Year</p>
            <p className="font-geist text-xl font-semibold text-[#222222]">
              {project.year}
            </p>
          </div>
          <div>
            <p className="font-geist text-xl font-light text-[#666666]">Role</p>
            <p className="font-geist text-xl font-semibold text-[#222222]">
              {project.role}
            </p>
          </div>
          <div>
            <p className="font-geist text-xl font-light text-[#666666]">
              Duration
            </p>
            <p className="font-geist text-xl font-semibold text-[#222222]">
              {project.duration}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <Image
            src={project.images[0]}
            alt={`${project.title} main image`}
            width={1920}
            height={1080}
            className="rounded-2xl"
          />
        </div>

        <div className="mt-20 max-w-5xl mx-auto space-y-16">
          {project.ideaOrigin && (
            <div>
              <h2 className="font-geist text-4xl font-semibold text-[#222222]">
                Idea Origin
              </h2>
              <p className="font-geist text-3xl text-[#666666] mt-4 leading-[120%]">
                {project.ideaOrigin}
              </p>
            </div>
          )}

          <div>
            <h2 className="font-geist text-4xl font-semibold text-[#222222]">
              Introduction
            </h2>
            <p className="font-geist text-3xl text-[#666666] mt-4 leading-[120%]">
              {project.introduction}
            </p>
          </div>

          <div>
            <h2 className="font-geist text-4xl font-semibold text-[#222222]">
              Challenges
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="font-geist text-3xl text-[#666666] leading-[120%]"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {project.developmentProcess && (
            <div>
              <h2 className="font-geist text-4xl font-semibold text-[#222222]">
                Development Process
              </h2>
              <p className="font-geist text-3xl text-[#666666] mt-4 leading-[120%]">
                {project.developmentProcess}
              </p>
            </div>
          )}

          {project.images[1] && (
            <Image
              src={project.images[1]}
              alt={`${project.title} secondary image`}
              width={1920}
              height={1080}
              className="rounded-2xl"
            />
          )}

          <div>
            <h2 className="font-geist text-4xl font-semibold text-[#222222]">
              Features
            </h2>
            <p className="font-geist text-3xl text-[#666666] mt-4 leading-[120%]">
              {project.features}
            </p>
          </div>

          {project.images[2] && (
            <Image
              src={project.images[2]}
              alt={`${project.title} tertiary image`}
              width={1920}
              height={1080}
              className="rounded-2xl"
            />
          )}

          <div>
            <h2 className="font-geist text-4xl font-semibold text-[#222222]">
              Tech Stack
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="font-geist text-3xl text-[#666666] leading-[120%]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-geist text-4xl font-semibold text-[#222222]">
              Overall
            </h2>
            <p className="font-geist text-3xl text-[#666666] mt-4 leading-[120%]">
              {project.overall}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}