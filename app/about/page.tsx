import AnimatedBackground from "../components/AnimatedBackground";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
    return (
        <>
            <AnimatedBackground />
            <div style={{ paddingTop: "8rem" }}>
                <AboutSection />
            </div>
        </>
    );
}
