import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center bg-white">
      <div className="mb-12">
        <Image
          src="/hero.png"
          alt="Portrait of Emir"
          width={400}
          height={250}
          priority
          className="w-[300px] h-auto md:w-[400px]"
        />
      </div>

      <h1 className="font-grotesk font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[120px] text-primary mb-8 leading-none">
        Hey, I&apos;m Emir
      </h1>

      <p className="font-sans text-secondary text-xl md:text-2xl lg:text-[40px] max-w-5xl mx-auto leading-tight">
        Jr. web developer passionate about building clean, minimal, and
        interactive web experiences.
      </p>
    </section>
  );
}