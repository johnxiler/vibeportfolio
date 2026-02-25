export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    //githubUrl: string;
    liveUrl?: string;
    liveUrlLabel?: string;
    image: string;
    color: string;
}

const projects: Project[] = [
    {
        id: "CyberFix",
        title: "CyberFix",
        description:
            "bash script to fix common tech support issues",
        techStack: ["bash", "exe"],
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
        liveUrl: "https://club-connect-uk.vercel.app/",
        image: "/projects/club-connect.webp",
        color: "from-violet-400 to-purple-600",
    },
    {
        id: "chemicalbalancercalc",
        title:"Chemical Equation Balancer",
        description:
            "This is my simple project when i was in college a chemical equation calculator that calculates math equations or a chemical compositions.",
        techStack: ["HTML","Tailwindcss","Javascript"],
        liveUrl: "https://chemicalbalancercalculater.vercel.app/",
        image: "/projects/chem-bal.webp",
        color: "from-pink-400 to-rose-600",
    },
    {
        id: "shopeeaffiliate",
        title:"Shopee Affiliate Landing Page",
        description:
            "This is an affiliate landing page that helps users find the best deals on Shopee,Tiktok and Lazada products.",
        techStack: ["HTML","Tailwindcss","Javascript"],
        liveUrl: "https://limited-stocks-essentials.vercel.app/",
        image: "/projects/shopeeaffiliate.webp",
        color: "from-orange-400 to-orange-600",
    },
];

export default projects;
