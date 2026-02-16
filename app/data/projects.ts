export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
    color: string; // accent gradient
}

const projects: Project[] = [
    {
        id: "ai-chat-app",
        title: "AI Chat Application",
        description:
            "A real-time conversational AI chatbot powered by GPT, featuring streaming responses, conversation history, and a sleek dark-mode interface.",
        techStack: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
        githubUrl: "https://github.com/johnxiler/ai-chat",
        liveUrl: "#",
        image: "/projects/ai-chat.webp",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with product catalog, cart management, Stripe payments, and an admin dashboard for order tracking.",
        techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
        githubUrl: "https://github.com/johnxiler/ecommerce",
        liveUrl: "#",
        image: "/projects/ecommerce.webp",
        color: "from-violet-400 to-purple-600",
    },
    {
        id: "fitness-tracker",
        title: "Fitness Tracker",
        description:
            "A cross-platform fitness app with workout logging, progress charts, calorie tracking, and personalized exercise recommendations.",
        techStack: ["React Native", "Firebase", "Chart.js", "TypeScript"],
        githubUrl: "https://github.com/johnxiler/fitness-tracker",
        liveUrl: "#",
        image: "/projects/fitness.webp",
        color: "from-pink-400 to-rose-600",
    },
    {
        id: "task-board",
        title: "Collaborative Task Board",
        description:
            "A Kanban-style project management tool with drag-and-drop, real-time collaboration via WebSockets, and team assignment features.",
        techStack: ["Next.js", "Supabase", "WebSockets", "DnD Kit"],
        githubUrl: "https://github.com/johnxiler/taskboard",
        liveUrl: "#",
        image: "/projects/taskboard.webp",
        color: "from-emerald-400 to-teal-600",
    },
    {
        id: "weather-dashboard",
        title: "Weather Dashboard",
        description:
            "Beautiful weather dashboard with 7-day forecasts, interactive maps, location search, and stunning data visualizations with animated transitions.",
        techStack: ["Vue.js", "D3.js", "OpenWeather API", "CSS"],
        githubUrl: "https://github.com/johnxiler/weather-app",
        image: "/projects/weather.webp",
        color: "from-amber-400 to-orange-600",
    },
    {
        id: "portfolio-generator",
        title: "Portfolio Generator",
        description:
            "A CLI tool that scaffolds beautiful developer portfolios from a simple JSON config file, with multiple themes and deployment options.",
        techStack: ["Node.js", "CLI", "Handlebars", "GitHub API"],
        githubUrl: "https://github.com/johnxiler/portfolio-gen",
        image: "/projects/portfolio-gen.webp",
        color: "from-sky-400 to-indigo-600",
    },
];

export default projects;
