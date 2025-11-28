"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { SkillIcon, IconKey } from "./SkillIcon";

const skillsData: Array<{ name: string; icon: IconKey; category: string }> = [
	{ name: "TypeScript", icon: "ts", category: "frontend" },
	{ name: "Next.js", icon: "next", category: "frontend" },
	{ name: "C++", icon: "cpp", category: "backend" },
	{ name: "Express", icon: "exp", category: "backend" },
	{ name: "WebSocket", icon: "ws", category: "backend" },
	{ name: "FastAPI", icon: "fast", category: "backend" },
	{ name: "PostgreSQL", icon: "pg", category: "database" },
	{ name: "Docker", icon: "dock", category: "devops" },
	{ name: "Kubernetes", icon: "k8s", category: "devops" },
	{ name: "Solana", icon: "sol", category: "blockchain" },
	{ name: "Ethereum", icon: "ether", category: "blockchain" },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Aboutme() {
	// generate stable default positions for SSR / initial render (centered)
	const [particlePositions, setParticlePositions] = useState(() =>
		skillsData.map(() =>
			Array.from({ length: 6 }).map(() => ({
				left: `50%`,
				top: `50%`,
				delay: 0,
			}))
		)
	);

	const [floatingPositions, setFloatingPositions] = useState(() =>
		Array.from({ length: 8 }).map(() => ({
			left: `50%`,
			top: `50%`,
			duration: 5,
			delay: 0,
		}))
	);

	// Populate random positions only on the client after mount to avoid SSR/client mismatches
	useEffect(() => {
		setParticlePositions(
			skillsData.map(() =>
				Array.from({ length: 6 }).map(() => ({
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
					delay: Math.random() * 0.5,
				}))
			)
		);

		setFloatingPositions(
			Array.from({ length: 8 }).map(() => ({
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				duration: 4 + Math.random() * 6,
				delay: Math.random() * 4,
			}))
		);
	}, []);

	return (
		<section id="aboutme" className="py-20 px-4 sm:px-6 lg:px-8 relative">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvora-950/10 to-transparent"></div>

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
						About{" "}
						<span className="bg-gradient-to-r from-canvora-400 to-canvora-600 bg-clip-text text-transparent">
							Me
						</span>
					</h2>

					{/* Animated decorative line */}
					<motion.div
						initial={{ scaleX: 0, y: 50, opacity: 0 }}
						whileInView={{ scaleX: 1, y: 0, opacity: 1 }}
						exit={{ scaleX: 0, y: 50, opacity: 0 }}
						viewport={{ once: false, margin: "-100px" }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							type: "spring",
							stiffness: 100,
						}}
						className="w-24 h-1 bg-gradient-to-r from-canvora-600 to-canvora-400 mx-auto rounded-full origin-left"
					></motion.div>
				</motion.div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: false, margin: "-50px" }}
							transition={{
								staggerChildren: 0.2,
								delayChildren: 0.1,
							}}
							className="space-y-4 text-gray-300 text-lg leading-relaxed"
						>
							<motion.p
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								viewport={{ once: false, margin: "-50px" }}
								transition={{ duration: 0.6, delay: 0 }}
							>
								Hey! I'm{" "}
								<span className="text-canvora-400 font-semibold">
									Adil Shaikh
								</span>
								, a
								<span className="text-white font-semibold">
									{" "}
									FullStack Developer
								</span>{" "}
								and
								<span className="text-white font-semibold">
									{" "}
									DevOps Enthusiast
								</span>{" "}
								who loves building scalable, real-world
								products.
							</motion.p>

							<motion.p
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								viewport={{ once: false, margin: "-50px" }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								I've explored everything from frontend craft to
								backend architecture and cloud-native
								deployments. I work mostly with{" "}
								<span className="text-canvora-400">
									TypeScript, Next.js, Express, PostgreSQL,
									WebSockets
								</span>
								, and I enjoy setting up infra with{" "}
								<span className="text-canvora-400">
									Docker, AWS, and Kubernetes
								</span>
								.
							</motion.p>

							<motion.p
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								viewport={{ once: false, margin: "-50px" }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								My focus leans towards{" "}
								<span className="text-white font-semibold">
									Backend + DevOps
								</span>
								, but I like experimenting with frontend design
								and I'm also diving into{" "}
								<span className="text-canvora-400">Web3</span>.
							</motion.p>

							<motion.p
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								viewport={{ once: false, margin: "-50px" }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								Outside academics, I've solved{" "}
								<span className="text-white font-semibold">
									1000+ DSA problems
								</span>
								, which shaped my problem-solving mindset. I'm
								also building indie projects like
								<span className="text-canvora-400">
									{" "}
									FinGenius (AI finance tracker)
								</span>{" "}
								— because I love turning ideas into products.
							</motion.p>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="grid grid-cols-3 gap-6 pt-8"
						>
							{[
								{ number: "1000+", label: "Problems Solved" },
								{ number: "4+", label: "Projects Built" },
								{ number: "0+", label: "Fresher" },
							].map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-2xl md:text-3xl font-bold text-canvora-400">
										{stat.number}
									</div>
									<div className="text-sm text-gray-400">
										{stat.label}
									</div>
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* Image with falling/rising animation */}
					<motion.div
						initial={{ opacity: 0, y: 100, scale: 0.8 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 100, scale: 0.8 }}
						viewport={{ once: false, margin: "-50px" }}
						transition={{
							duration: 1,
							ease: "easeOut",
							type: "spring",
							stiffness: 80,
							damping: 15,
						}}
						className="flex justify-center lg:justify-end"
					>
						<motion.div
							className="relative"
							whileHover={{
								y: -10,
								transition: { duration: 0.3 },
							}}
						>
							{/* Animated glow effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-canvora-600 to-canvora-400 rounded-2xl blur-2xl opacity-20"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.2, 0.3, 0.2],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							></motion.div>

							<div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl border border-gray-700">
								<Image
									src="/techphoto.png"
									width={400}
									height={400}
									className="w-full h-auto rounded-xl"
									alt="Adil Shaikh"
								/>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Skills Section */}
				<motion.div
					id="skills"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="relative"
				>
					{/* Enhanced Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-center mb-16 relative"
					>
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative">
							<span className="relative inline-block">
								Skills &{" "}
								<span className="bg-gradient-to-r from-canvora-400 via-canvora-500 to-canvora-600 bg-clip-text text-transparent">
									Technologies
								</span>
								{/* Animated underline */}
								<motion.div
									initial={{ scaleX: 0, opacity: 0 }}
									whileInView={{ scaleX: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.8 }}
									className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-canvora-600 to-canvora-400 rounded-full origin-left"
								></motion.div>
							</span>
						</h3>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="text-gray-400 text-lg max-w-2xl mx-auto"
						>
							Technologies I've mastered and tools I use to build
							amazing experiences
						</motion.p>
					</motion.div>

					{/* Enhanced Skills Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative"
					>
						{skillsData.map((skill, index) => (
							<motion.div
								key={skill.name}
								variants={itemVariants}
								whileHover={{
									scale: 1.1,
									y: -8,
									transition: {
										duration: 0.3,
										type: "spring",
										stiffness: 300,
										damping: 20,
									},
								}}
								whileTap={{ scale: 0.95 }}
								className="group relative cursor-pointer"
							>
								{/* Animated background glow */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-canvora-600/20 to-canvora-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
									whileHover={{
										scale: 1.2,
										transition: { duration: 0.3 },
									}}
								></motion.div>

								{/* Main skill card */}
								<motion.div
									className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-canvora-500/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-canvora-600/20"
									whileHover={{
										background:
											"linear-gradient(135deg, rgba(75, 85, 99, 0.9), rgba(31, 41, 55, 0.9))",
									}}
								>
									{/* Animated corner accent */}
									<motion.div
										initial={{ scale: 0, rotate: 45 }}
										whileInView={{ scale: 1, rotate: 45 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1,
										}}
										className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-canvora-400 to-canvora-600 rounded-sm opacity-60"
									></motion.div>

									{/* Skill icon with enhanced animation */}
									<motion.div
										whileHover={{ rotate: [0, -20, 20, 0] }}
										transition={{ duration: 1.5 }}
									>
										<SkillIcon
											name={skill.name}
											icon={skill.icon}
										/>
									</motion.div>

									{/* Animated skill name */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1 + 0.2,
										}}
										className="mt-3 text-center"
									>
										<p className="text-white font-medium text-sm group-hover:text-canvora-300 transition-colors duration-300">
											{skill.name}
										</p>
									</motion.div>

									{/* Floating particles effect */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
										{particlePositions[index].map(
											(pos, i) => (
												<motion.div
													key={i}
													initial={{
														opacity: 0,
														scale: 0,
													}}
													whileHover={{
														opacity: [0, 1, 0],
														scale: [0, 1, 0],
														x:
															(Math.random() *
																100 -
																50) *
															0.6,
														y:
															(Math.random() *
																100 -
																50) *
															0.6,
													}}
													transition={{
														duration: 2,
														delay:
															pos.delay ||
															i * 0.1,
														repeat: Infinity,
														repeatDelay: 3,
													}}
													className="absolute w-1 h-1 bg-canvora-400 rounded-full"
													style={{
														left: pos.left,
														top: pos.top,
													}}
												></motion.div>
											)
										)}
									</div>
								</motion.div>

								{/* Enhanced category tag */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8, y: -10 }}
									whileHover={{
										opacity: 1,
										scale: 1,
										y: -8,
										transition: { duration: 0.2 },
									}}
									className="absolute -top-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
								>
									<span className="bg-gradient-to-r from-canvora-600 to-canvora-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-canvora-400/30 backdrop-blur-sm">
										{skill.category}
									</span>
								</motion.div>

								{/* Skill level indicator */}
								<motion.div
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.8,
										delay: index * 0.05,
									}}
									className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-canvora-600 to-canvora-400 rounded-b-2xl origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								></motion.div>
							</motion.div>
						))}
					</motion.div>

					{/* Decorative floating elements */}
					<div className="absolute inset-0 pointer-events-none overflow-hidden">
						{floatingPositions.map((pos, i) => (
							<motion.div
								key={i}
								animate={{
									y: [0, -30, 0],
									opacity: [0.1, 0.3, 0.1],
									scale: [1, 1.2, 1],
								}}
								transition={{
									duration: pos.duration || 5,
									repeat: Infinity,
									delay: pos.delay || i * 0.5,
									ease: "easeInOut",
								}}
								className="absolute w-2 h-2 bg-canvora-400/20 rounded-full"
								style={{ left: pos.left, top: pos.top }}
							></motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
