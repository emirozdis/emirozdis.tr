export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  detailsLink: string;
  imageUrl: string;
  showOnHomepage?: boolean;
  role: string;
  duration: string;
  introduction: string;
  challenges: string[];
  features: string;
  overall: string;
  images: string[];
  techStack: string[];
  ideaOrigin?: string;
  developmentProcess?: string;
}

export const projects: Project[] = [
  {
    id: "mystra",
    title: "Mystra",
    year: 2025,
    description: "Create effortless backends that scales with you",
    detailsLink: "/projects/mystra",
    imageUrl: "/projects/mystra/dashboard.png",
    showOnHomepage: true,
    role: "Web Developer",
    duration: "3 months",
    introduction:
      "Mystra is an open-source, self-hosted Backend-as-a-Service (BaaS) designed to replace traditional backend development entirely. Unlike other platforms, it provides both SQL and NoSQL databases within a single, easy-to-install solution. Mystra is built for startups and developers who need to move fast, allowing them to focus on building products without worrying about backend complexity.",
    challenges: [
      "Building a platform that supports both SQL and NoSQL databases seamlessly.",
      "Competing in a highly competitive BaaS market as a solo developer with limited resources.",
      "Designing a simple installation process while keeping the system secure and reliable.",
      "Scaling performance efficiently to support production-ready applications.",
    ],
    features:
      "Mystra delivers a complete backend solution with support for both SQL and NoSQL databases, user authentication, file storage, and real-time APIs. It also includes serverless functions and integrates effortlessly with web, mobile, and IoT applications. With its self-hosted, open-source nature, Mystra offers developers and startups full control over their infrastructure while enabling rapid product development.",
    overall:
      "Mystra stands out as a powerful alternative to traditional backend setups, combining flexibility, control, and simplicity. Its unique ability to provide both SQL and NoSQL in one platform makes it especially attractive to fast-moving teams and startups. Despite being built by a solo developer in a highly competitive space, Mystra shows how an open-source project can deliver enterprise-grade solutions while remaining developer-friendly and easy to adopt.",
    images: [
      "/projects/mystra/hero.png",
      "/projects/mystra/sql.png",
      "/projects/mystra/log.png",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Docker", "PostgreSQL"],
    ideaOrigin:
      "The idea for Mystra stemmed from the common pain points developers face with existing Backend-as-a-Service (BaaS) solutions: vendor lock-in, limited database choices, and lack of control over the infrastructure. I envisioned a self-hosted, open-source alternative that offers the flexibility of both SQL and NoSQL databases, giving developers full ownership and adaptability.",
    developmentProcess:
      "The development of Mystra involved extensive research into database technologies, API design, and containerization with Docker. I adopted an iterative approach, starting with core database functionalities and gradually adding features like authentication and real-time APIs. Challenges included optimizing performance for diverse workloads and ensuring a seamless, secure installation process for self-hosting.",
  },
  {
    id: "tema-event",
    title: "Tema v2",
    year: 2024,
    description: "Take the stress out of event planning",
    detailsLink: "/projects/tema-event",
    imageUrl: "/projects/tema/dashboard.png",
    showOnHomepage: true,
    role: "Web Developer",
    duration: "1 months",
    introduction:
      "Tema v2 is an all-in-one event management platform that was originally born out of a very real need: my school’s event planning process was stuck on paper and painfully inefficient. The second version of Tema marked a complete transformation, featuring a refined UI/UX and a stronger, cleaner codebase. It was built to provide a smoother experience for organizers and attendees alike, making event management both faster and more enjoyable.",
    challenges: [
      "Turning an amateur first version into a reliable, production-ready platform.",
      "Designing a user-friendly interface that organizers could adopt quickly.",
      "Integrating Supabase to handle authentication, data, and real-time functionality.",
      "Balancing limited resources and time while still aiming for professional quality.",
    ],
    features:
      "Tema v2 offers customizable event pages, digital attendee registration, ticketing, and real-time analytics. Organizers get a modern dashboard with actionable insights, while participants enjoy a seamless registration experience. By leveraging Supabase and Next.js, the platform combines reliability with scalability, ensuring that events of all sizes can be managed effortlessly.",
    overall:
      "Tema v2 became a milestone in my journey as a developer and project manager. What started as a simple school project evolved into a functional and polished event management solution. It taught me the importance of good UX, maintainable code, and iterative improvement. With real-world use by my school and friends, Tema v2 proved itself as a practical, user-focused tool that significantly improved the event experience.",
    images: ["/projects/tema/dashboard.png"],
    techStack: ["TypeScript", "Next.js", "React", "TailwindCSS", "Supabase"],
    ideaOrigin:
      "The idea for Tema was sparked during school events where the old paper-based system caused delays, confusion, and frustration for both organizers and attendees. I wanted to digitize and simplify the process, starting with a simple prototype that eventually evolved into a more robust second version.",
    developmentProcess:
      "The first version of Tema was built with limited experience and had many flaws in both design and implementation. After nearly a year, I revisited the project with more knowledge and rebuilt it from the ground up as Tema v2. This version focused heavily on user experience, a cleaner interface, and better code quality. I introduced Supabase for real-time data and authentication, significantly improving the platform’s reliability and usability.",
  },
  {
    id: "pratix-ai",
    title: "Pratix AI",
    year: 2024,
    description:
      "An AI-powered platform designed to summarize YouTube videos, providing users with concise and accurate summaries to save time and enhance learning.",
    detailsLink: "/projects/pratix-ai",
    imageUrl: "/projects/pratix/hero.png",
    role: "Backend Developer",
    duration: "6 months",
    introduction:
      "Pratix AI is a freelance project where I built both the backend service and later a Chrome extension for summarizing YouTube videos. The platform leverages AI to generate fast, accurate summaries, with an impressive first-response time of under three seconds — significantly faster than most alternatives. Originally created as the backend for a mobile app, Pratix AI quickly expanded into a browser extension, making it accessible to a wider range of users.",
    challenges: [
      "Working with third-party services like YouTube, which required handling API limitations and diverse video formats.",
      "Ensuring that summarization remained accurate across different video lengths and topics.",
      "Designing a backend architecture that was fast and scalable enough to outperform existing tools.",
      "Developing a Chrome extension for the first time while ensuring smooth integration with the backend.",
    ],
    features:
      "Pratix AI includes fast and customizable video summarization with options to adjust summary length and highlight keywords. It supports exporting summaries in multiple formats and provides a smooth Chrome extension for quick access. Its multilingual support and sub-three-second response times set it apart from competing solutions.",
    overall:
      "Pratix AI became a valuable freelance project that not only showcased my ability to deliver production-ready AI-powered services but also introduced me to freelance work dynamics, backend architecture, and Chrome extension development. The project received positive feedback from testers, particularly for its speed and usability, making it stand out as a practical and competitive solution in the AI tools market.",
    images: ["/projects/pratix/hero.png"],
    techStack: ["React", "TailwindCSS", "Next.js", "Vite", "TypeScript", "linux"],
    ideaOrigin:
      "The idea for Pratix AI came from a client who wanted a summarization tool for long-form YouTube videos. The initial focus was on building a backend that could serve a mobile app, but the project later expanded to include a Chrome extension for broader accessibility.",
    developmentProcess:
      "The development process began with creating a backend summarization service optimized for speed and accuracy. Special attention was given to API handling for YouTube integration and efficient data processing. After successfully delivering the backend for the mobile app, I extended the platform by developing a Chrome extension, which gave me hands-on experience with browser extension development for the first time.",
  },
  {
    id: "audax",
    title: "Audax",
    year: 2023,
    description:
      "A security-focused application that helps users manage their online accounts, monitor for compromised passwords, and enforce two-factor authentication.",
    detailsLink: "/projects/audax",
    imageUrl: "/projects/audax/home.png",
    role: "Security Analyst",
    duration: "2 weeks",
    introduction:
      "Audax is a personal project I developed as a secure password manager and digital safety companion. It was born from the frustration that most password managers required subscriptions, which limited accessibility. With Audax, I focused on building a tool that could securely store passwords, monitor breaches, and encourage good security practices — all without a paywall.",
    challenges: [
      "Handling sensitive, encrypted user data securely without compromising performance.",
      "Designing a vault system that balanced usability with strong cryptography.",
      "Integrating breach monitoring and account alerts while avoiding false positives.",
      "Learning and applying advanced security practices throughout the development process.",
    ],
    features:
      "Audax includes a password vault with encryption, real-time alerts for compromised accounts, and streamlined two-factor authentication support. It also provides users with recommendations for stronger security hygiene, encouraging safer online behavior through proactive notifications.",
    overall:
      "Although Audax was never released publicly, it became an important project for me to explore sensitive data management and security-first design. It taught me practical lessons in encryption, authentication workflows, and the complexity of securing user data. As a learning project, it shaped the way I approach security in all future applications.",
    images: ["/projects/audax/home.png"],
    techStack: ["React", "TailwindCSS", "Next.js"],
    ideaOrigin:
      "The idea for Audax came from noticing that many popular password managers required ongoing subscriptions. I wanted to explore how a free, secure, and user-friendly alternative could work while also deepening my knowledge of application security.",
    developmentProcess:
      "The development of Audax focused on building a secure vault for sensitive data while experimenting with best practices in encryption and authentication. I studied different password storage strategies, implemented breach monitoring concepts, and prototyped a UI for managing credentials. While the project wasn’t launched publicly, it served as a hands-on learning journey into the complexities of digital security.",
  },
  {
    id: "taiga-ai",
    title: "Taiga AI",
    year: 2023,
    description:
      "An AI-powered UI builder designed specifically for React applications, focusing on fast, dynamic, and clean component generation.",
    detailsLink: "/projects/taiga-ai",
    imageUrl: "/projects/taiga/home.png",
    role: "UI/UX Designer & Developer",
    duration: "2 weeks",
    introduction:
      "Taiga AI is a personal-use AI UI builder for React. It generates clean, responsive components and layouts dynamically, allowing developers to quickly prototype and build user interfaces without relying on expensive third-party tools.",
    challenges: [
      "Handling dynamic AI-generated UI components reliably within React.",
      "Ensuring generated code is clean, maintainable, and integrates seamlessly.",
      "Refining prompt engineering for effective component generation.",
      "Working with AI responses in real-time while maintaining app performance."
    ],
    features:
      "Taiga AI can generate React components and layouts on demand, adapt to custom design inputs, and help rapidly prototype interfaces. It was designed for personal use but demonstrates how AI can streamline React development workflows.",
    overall:
      "Taiga AI allowed me to explore AI-assisted UI generation, prompt engineering, and dynamic component creation. It showed that a personal project could be a sandbox for experimenting with advanced React and AI integration concepts.",
    images: ["/projects/taiga/home.png"],
    techStack: ["React", "TailwindCSS", "Next.js", "TypeScript"],
    ideaOrigin:
      "The idea came from using existing AI UI tools for React, which were either expensive or unsatisfactory. I wanted a personal tool that could generate React components efficiently while giving me full control over the output.",
    developmentProcess:
      "Development focused on integrating AI responses into React components seamlessly, managing state and props dynamically, and refining prompts to produce consistent, high-quality code. The project was entirely personal, allowing iterative testing and optimization for AI-driven UI generation in React."
  }
];