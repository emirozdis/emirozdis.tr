import Image from "next/image";

export interface Experience {
  date: string;
  duration: string;
  role: string;
  company: string;
  description: string;
  isPresent?: boolean;
}

interface AboutProps {
  experiences: Experience[];
}

export default function About({ experiences }: AboutProps) {
  return (
    <section id="about" className="relative bg-[#111111] text-white py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[450px] z-0">
        <Image
          src="/about.png"
          alt="About background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="font-sans font-light text-xl text-[#AAAAAA]">
          About & Experience
        </p>
        <h2 className="font-sans font-medium text-[60px] mt-4 max-w-4xl mx-auto leading-tight">
          A look into my journey and the experiences that shaped me
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* About Card */}
          <div className="bg-[#222222] border border-white/10 rounded-2xl p-8">
            <h3 className="font-sans font-medium text-xl text-secondary mb-8 text-center">
              ABOUT
            </h3>
            <div className="flex items-center gap-6 mb-8">
              <Image
                src="/profile.png"
                alt="Portrait of Emir Özdiş"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h4 className="font-sans font-medium text-[40px] text-white leading-tight">
                  Emir Özdiş
                </h4>
                <p className="font-sans font-medium text-xl text-secondary">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="font-sans font-light text-xl text-[#AAAAAA] leading-[120%]">
                I am a passionate web developer with hands-on experience in
                building both commercial and personal projects. Over the past
                few years, I have worked on multiple web applications using
                Next.js, TypeScript, and Tailwind CSS, developing scalable,
                user-friendly solutions for clients and end-users. My freelance
                experience allowed me to take projects from concept to
                deployment independently, managing both frontend and backend
                development.
              </p>
              <p className="font-sans font-light text-xl text-[#AAAAAA] leading-[120%]">
                Beyond commercial work, I am deeply interested in innovative
                technology and social impact projects. I founded Preroute, an
                ambulance alert system app that won Global 12th place at
                Teknofest KKTC, and VitalBoost, a health app that reached the
                Teknofest semifinals. These projects reflect my ability to
                combine technical skills with problem-solving and creativity,
                delivering solutions that have real-world impact.
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-[#222222] border border-white/10 rounded-2xl p-8">
            <h3 className="font-sans font-medium text-xl text-secondary mb-8 text-center">
              EXPERIENCE
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-24">
                    {exp.isPresent ? (
                      <span className="inline-block bg-[#26C94E] text-[#222222] text-sm font-medium px-3 py-1 rounded-full">
                        Present
                      </span>
                    ) : (
                      <p className="font-sans font-light text-xl text-secondary">
                        {exp.date}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-sans font-normal text-xl text-white">
                      {exp.role}{" "}
                      <span className="font-semibold">{exp.company}</span>
                    </p>
                    <p className="font-sans font-light text-xs text-[#AAAAAA] mt-2 leading-[120%]">
                      {exp.description}
                    </p>
                  </div>
                  <div className="w-24 text-right">
                    <p className="font-sans font-light text-xl text-secondary">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}