import Image from "next/image";
import Link from "next/link";
import {
    FaReact,
    FaNodeJs,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaWordpress,
    FaShopify,
    FaAws,
    FaPython,
    FaGitAlt,
    FaFigma,
    FaBootstrap,
    FaSass,
    FaDatabase,
    FaJava,
    FaVuejs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiMongodb, SiPostgresql, SiFirebase, SiDocker, SiGraphql, SiRedux } from "react-icons/si";

const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
        case "react":
            return <FaReact />;
        case "next.js":
            return <SiNextdotjs />;
        case "tailwind css":
            return <SiTailwindcss />;
        case "typescript":
            return <SiTypescript />;
        case "node.js":
            return <FaNodeJs />;
        case "javascript":
            return <FaJsSquare />;
        case "html":
            return <FaHtml5 />;
        case "css":
            return <FaCss3Alt />;
        case "wordpress":
            return <FaWordpress />;
        case "shopify":
            return <FaShopify />;
        case "aws":
            return <FaAws />;
        case "python":
            return <FaPython />;
        case "git":
            return <FaGitAlt />;
        case "figma":
            return <FaFigma />;
        case "bootstrap":
            return <FaBootstrap />;
        case "sass/scss":
            return <FaSass />;
        case "prisma":
            return <SiPrisma />;
        case "mongodb":
            return <SiMongodb />;
        case "postgresql":
            return <SiPostgresql />;
        case "firebase":
            return <SiFirebase />;
        case "docker":
            return <SiDocker />;
        case "graphql":
            return <SiGraphql />;
        case "redux":
            return <SiRedux />;
        case "sql":
            return <FaDatabase />;
        case "java":
            return <FaJava />;
        case "vue.js":
            return <FaVuejs />;
        default:
            return null;
    }
};

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    detailsLink: string;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-[#FBFBFB] border border-[#D1D5DB] rounded-2xl flex flex-col md:flex-row items-center md:items-stretch p-8 gap-8">
            <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-gray-200 h-full">
                    <Image
                        src={project.imageUrl}
                        alt={`${project.title} project screenshot`}
                        width={500}
                        height={350}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex-grow">
                    <h3 className="font-sans font-semibold text-[40px] text-primary leading-tight">
                        {project.title}
                    </h3>
                    <p className="font-sans font-normal text-secondary text-[20px] mt-4 leading-[120%]">
                        {project.description}
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="bg-white border border-black/10 rounded-md px-3 py-1 text-sm text-secondary flex items-center gap-2"
                            >
                                {getTechIcon(tech)}
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="bg-white border border-black/10 rounded-md px-3 py-1 text-sm text-secondary">
                                +{project.techStack.length - 3} more
                            </span>
                        )}
                    </div>
                    <Link
                        href={project.detailsLink}
                        className="mt-8 w-full text-center inline-block rounded-xl bg-[#222222] border border-[#AAAAAA]/40 px-6 py-3 font-sans text-[20px] font-medium text-white transition-colors hover:bg-neutral-700"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}