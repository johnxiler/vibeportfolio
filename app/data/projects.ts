export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    //githubUrl: string;
    liveUrl?: string;
    liveUrlLabel?: string;
    image: string;
    color: string; // accent gradient
}

const projects: Project[] = [
    {
        id: "CyberFix",
        title: "CyberFix",
        description:
            "bash script to fix common tech support issues",
        techStack: ["bash", "exe"],
        //githubUrl: "https://github.com/johnxiler/ai-chat",
        liveUrl: "/projects/cyberfix",
        liveUrlLabel: "See Images",
        image: "/projects/cyberfix.webp",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: "club-connect",
        title: "Club Connect",
        description:
            "Full-stack teachers reservation platform with user authentication, booking system, and an admin dashboard for managing reservations.",
        techStack: ["React", "Node.js", "Supabase", "Tailwind CSS", "TypeScript"],
        //githubUrl: "https://github.com/johnxiler/club-connect",
        liveUrl: "https://club-connect-uk.vercel.app/",
        image: "/projects/club-connect.webp",
        color: "from-violet-400 to-purple-600",
    },
    {
        id: "fitness-tracker",
        title: "Fitness Tracker",
        description:
            "A cross-platform fitness app with workout logging, progress charts, calorie tracking, and personalized exercise recommendations.",
        techStack: ["React Native", "Firebase", "Chart.js", "TypeScript"],
        //githubUrl: "https://github.com/johnxiler/fitness-tracker",
        liveUrl: "#",
        image: "/projects/fitness.webp",
        color: "from-pink-400 to-rose-600",
    },
];

export default projects;
