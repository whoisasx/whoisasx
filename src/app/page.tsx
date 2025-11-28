import Aboutme from "@/components/aboutme/Aboutme";
import Footer from "@/components/Footer";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects/Projects";

export default function Home() {
	return (
		<div className="min-h-screen min-w-full relative bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-x-hidden">
			<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--canvora-900)_0%,_transparent_50%)] opacity-30 pointer-events-none"></div>
			<div className="relative z-10">
				<Navbar />
				<HeroSection />
				<Projects />
				<Aboutme />
				<Footer />
			</div>
		</div>
	);
}
