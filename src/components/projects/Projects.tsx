"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const projectsData = [
	{
		id: 1,
		title: "Canvora",
		description:
			"A comprehensive canvas-based drawing application with real-time collaboration features. Built with modern web technologies for seamless user experience.",
		longDescription:
			"Canvora is a feature-rich digital canvas application that enables users to create, collaborate, and share their artistic visions in real-time. It includes advanced drawing tools, layer management, and collaborative editing capabilities.",
		image: "/canvora-landing.png",
		liveUrl: "https://canvora.asxcode.com/",
		githubUrl: "https://github.com/whoisasx/Canvora",
		videoUrl:
			"https://drive.google.com/drive/folders/1aFfZyy-HZGu6Qnbx_6TjjPZOdW1Wtul4?usp=sharing",
		tech: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"WebSocket",
			"PostgreSQL",
		],
		category: "Full Stack",
		featured: true,
	},
	{
		id: 2,
		title: "Orbix",
		description: `Your world of crypto, in one wallet.`,
		longDescription: `Orbix is a next-generation Web3 wallet designed for simplicity, security, and control. Manage your crypto, NFTs, and digital identity — all in one beautifully unified experience. With Orbix, your assets truly revolve around you.`,
		image: "/orbapp.png",
		liveUrl: "https://orbixwallet.vercel.app/",
		githubUrl: "https://github.com/whoisasx/Orbix",
		videoUrl: "#",
		tech: ["React", "Node.js", "Web3.js", "Tailwind"],
		category: "AI Application",
		featured: true,
	},
	{
		id: 3,
		title: "Memora",
		description:
			"An intelligent note-taking and memory management application with AI-powered organization and search capabilities.",
		longDescription:
			"Memora revolutionizes how you capture and organize thoughts with smart categorization, AI-powered search, and intuitive note management.",
		image: "/memora-landing.png",
		liveUrl: "https://memora.asxcode.com/",
		githubUrl: "https://github.com/whoisasx/Memora",
		videoUrl:
			"https://drive.google.com/drive/folders/1UxzVuCUG1splLlnwQIaum76nqmF184hL?usp=sharing",
		tech: [
			"React",
			"Node.js",
			"PostgreSQL",
			"OpenAI API",
			"Fastapi",
			"Opensearch",
		],
		category: "AI Application",
		featured: true,
	},
	{
		id: 4,
		title: "OrbApp",
		description: `Your world of crypto, in one DAPP.`,
		longDescription: `Orbix is a next-generation Web3 wallet designed for simplicity, security, and control. Manage your crypto, NFTs, and digital identity — all in one beautifully unified experience. With Orbix, your assets truly revolve around you.`,
		image: "/orbix-landing.png",
		liveUrl: "https://orbapp.vercel.app/",
		githubUrl: "https://github.com/whoisasx/Orbapp",
		videoUrl: "#",
		tech: ["React", "Node.js", "Web3.js", "Tailwind"],
		category: "AI Application",
		featured: true,
	},
	// Add more projects as needed
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function Projects() {
	// Ref for the section and state to control the continuous line animation
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [lineActive, setLineActive] = useState(false);
	const lastScrollY = useRef<number>(0);
	const isScrollingDown = useRef<boolean>(true);

	useEffect(() => {
		// Track scroll direction
		const onScroll = () => {
			const currentY = window.scrollY || window.pageYOffset;
			isScrollingDown.current = currentY > lastScrollY.current;
			lastScrollY.current = currentY;
		};

		window.addEventListener("scroll", onScroll, { passive: true });

		// IntersectionObserver to detect when the section enters the viewport
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Only trigger the animation when the user is scrolling down into the section
					if (entry.isIntersecting && isScrollingDown.current) {
						setLineActive(true);
					} else if (!entry.isIntersecting) {
						// Reset so it can replay next time
						setLineActive(false);
					}
				});
			},
			{ threshold: 0.12 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="py-20 px-4 sm:px-6 lg:px-8 relative"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvora-950/5 to-transparent"></div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
						Featured{" "}
						<span className="bg-gradient-to-r from-canvora-400 to-canvora-600 bg-clip-text text-transparent">
							Projects
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-canvora-600 to-canvora-400 mx-auto rounded-full mb-6"></div>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						A collection of projects that showcase my skills in
						full-stack development, DevOps, and modern web
						technologies.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-16"
				>
					{projectsData.map((project, index) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							className={`grid lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-dense" : ""
							}`}
						>
							{/* Project Info */}
							<motion.div
								className={`space-y-6 ${
									index % 2 === 1 ? "lg:col-start-2" : ""
								}`}
								initial={{
									x: index % 2 === 1 ? 100 : -100,
									opacity: 0,
								}}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{
									type: "spring",
									stiffness: 80,
									damping: 12,
									duration: 0.8,
									delay: index * 0.12,
								}}
							>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<span className="text-canvora-400 font-semibold">
											{project.category}
										</span>
										{project.featured && (
											<span className="bg-canvora-600/20 text-canvora-300 px-3 py-1 rounded-full text-sm">
												Featured
											</span>
										)}
									</div>

									<h3 className="text-3xl md:text-4xl font-bold text-white">
										{project.title}
									</h3>

									<p className="text-gray-300 text-lg leading-relaxed">
										{project.longDescription}
									</p>
								</div>

								{/* Tech Stack */}
								<div className="space-y-3">
									<h4 className="text-lg font-semibold text-canvora-400">
										Technologies Used
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700/50"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-wrap gap-4">
									<motion.a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-2 bg-canvora-600 hover:bg-canvora-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
									>
										<FaExternalLinkAlt className="size-4" />
										Live Demo
									</motion.a>

									<motion.a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-2 border-2 border-canvora-600 text-canvora-400 hover:bg-canvora-600/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
									>
										<FaGithub className="size-4" />
										Source Code
									</motion.a>

									<motion.a
										href={project.videoUrl}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-2 text-gray-400 hover:text-canvora-400 px-4 py-3 rounded-lg font-semibold transition-colors duration-300"
									>
										<FaPlay className="size-4" />
										Demo Video
									</motion.a>
								</div>
							</motion.div>

							{/* Project Image */}
							<motion.div
								className={`relative group ${
									index % 2 === 1
										? "lg:col-start-1 lg:row-start-1"
										: ""
								}`}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-canvora-600/20 to-canvora-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								<div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 group-hover:border-canvora-600/50 transition-all duration-500">
									<div className="relative overflow-hidden rounded-xl">
										<Image
											src={project.image}
											alt={`${project.title} screenshot`}
											width={600}
											height={400}
											className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
										/>

										{/* Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
											<motion.a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												initial={{ scale: 0 }}
												whileHover={{ scale: 1 }}
												className="bg-canvora-600 text-white p-4 rounded-full shadow-lg"
											>
												<FaExternalLinkAlt className="size-6" />
											</motion.a>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}

					{/* Continuous Decorative Line - Full section height (controlled by scroll + direction) */}
					<motion.div
						initial={{ scaleY: 0 }}
						animate={lineActive ? { scaleY: 1.12 } : { scaleY: 0 }}
						transition={{
							duration: 2.0,
							delay: lineActive ? 0.3 : 0,
							ease: [0.25, 0.1, 0.25, 1],
						}}
						className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent from-10% via-canvora-400/60 via-50% to-transparent to-90% origin-top hidden lg:block z-10"
					>
						{/* Animated dots along the line (play when lineActive) */}
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={
								lineActive
									? { scale: 1, opacity: 1 }
									: { scale: 0, opacity: 0 }
							}
							transition={{
								duration: 0.6,
								delay: 0.9,
								ease: "backOut",
							}}
							className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-canvora-400 rounded-full shadow-lg shadow-canvora-400/50"
						/>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={
								lineActive
									? { scale: 1, opacity: 1 }
									: { scale: 0, opacity: 0 }
							}
							transition={{
								duration: 0.6,
								delay: 1.2,
								ease: "backOut",
							}}
							className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-canvora-300 rounded-full shadow-md shadow-canvora-300/50"
						/>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={
								lineActive
									? { scale: 1, opacity: 1 }
									: { scale: 0, opacity: 0 }
							}
							transition={{
								duration: 0.6,
								delay: 1.6,
								ease: "backOut",
							}}
							className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-canvora-400 rounded-full shadow-xl shadow-canvora-400/60"
						/>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={
								lineActive
									? { scale: 1, opacity: 1 }
									: { scale: 0, opacity: 0 }
							}
							transition={{
								duration: 0.6,
								delay: 2.0,
								ease: "backOut",
							}}
							className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-canvora-300 rounded-full shadow-md shadow-canvora-300/50"
						/>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={
								lineActive
									? { scale: 1, opacity: 1 }
									: { scale: 0, opacity: 0 }
							}
							transition={{
								duration: 0.6,
								delay: 2.4,
								ease: "backOut",
							}}
							className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-canvora-400 rounded-full shadow-lg shadow-canvora-400/50"
						/>
					</motion.div>
				</motion.div>

				{/* View More Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="text-center mt-16"
				>
					<motion.a
						href="#"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 text-canvora-400 hover:text-canvora-300 font-semibold text-lg transition-colors duration-300"
					>
						More to add
						{/* <FaExternalLinkAlt className="size-4" /> */}
						<FaCirclePlus className="size-4" />
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
