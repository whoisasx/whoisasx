"use client";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
	FaEthereum,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaReact,
} from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { IoLogoPython } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
	SiCss3,
	SiExpress,
	SiFastapi,
	SiKubernetes,
	SiMongodb,
	SiNextdotjs,
	SiRedis,
	SiSolana,
	SiWeb3Dotjs,
	SiWebstorm,
} from "react-icons/si";
import { TbBrandCpp, TbBrandRust } from "react-icons/tb";

const icons = {
	ts: <BiLogoTypescript color="#3178C6" size={60} className="rounded-xl" />,
	js: <RiJavascriptFill color="#F7DF1E" size={60} className="rounded-xl" />,
	py: <IoLogoPython color="#3776AB" size={60} className="rounded-xl" />,
	cpp: <TbBrandCpp color="#00599C" size={60} className="rounded-xl" />,
	rust: <TbBrandRust color="#CE412B" size={60} className="rounded-xl" />,
	html: <FaHtml5 color="#E34F26" size={60} className="rounded-xl" />,
	css: <SiCss3 color="#1572B6" size={60} className="rounded-xl" />,
	tl: <RiTailwindCssFill color="#06B6D4" size={60} className="rounded-xl" />,
	react: <FaReact color="#61DAFB" size={60} className="rounded-xl" />,
	next: <SiNextdotjs color="#ffffff" size={60} className="rounded-xl" />,
	exp: <SiExpress color="#ffffff" size={60} className="rounded-xl" />,
	fast: <SiFastapi color="#009688" size={60} className="rounded-xl" />,
	ws: (
		<SiWebstorm
			color="#000000"
			size={60}
			className="rounded-xl bg-white p-1"
		/>
	),
	mongo: <SiMongodb color="#47A248" size={60} className="rounded-xl" />,
	pg: <BiLogoPostgresql color="#4169E1" size={60} className="rounded-xl" />,
	git: <FaGitAlt color="#F05032" size={60} className="rounded-xl" />,
	dock: <GrDocker color="#2496ED" size={60} className="rounded-xl" />,
	redis: <SiRedis color="#DC382D" size={60} className="rounded-xl" />,
	k8s: <SiKubernetes color="#326CE5" size={60} className="rounded-xl" />,
	w3: <SiWeb3Dotjs color="#ffffff" size={60} className="rounded-xl" />,
	github: <FaGithub color="#ffffff" size={60} className="rounded-xl" />,
	ether: <FaEthereum color="#627EEA" size={60} className="rounded-xl" />,
	sol: <SiSolana color="#9945FF" size={60} className="rounded-xl" />,
	mern: (
		<div className="grid grid-cols-2 gap-2 items-center justify-center w-[60px] h-[60px]">
			<SiMongodb color="#47A248" size={24} />
			<SiExpress color="#ffffff" size={24} />
			<FaReact color="#61DAFB" size={24} />
			<IoLogoPython color="#68A063" size={24} />
		</div>
	),
	web3: (
		<div className="flex gap-2 items-center justify-center">
			<SiSolana color="#9945FF" size={28} />
			<FaEthereum color="#627EEA" size={28} />
		</div>
	),
	languages: (
		<div className="flex gap-2 items-center justify-center flex-wrap">
			<TbBrandRust color="#CE412B" size={28} />
			<TbBrandCpp color="#00599C" size={28} />
			<BiLogoTypescript color="#3178C6" size={28} />
		</div>
	),
	devops: (
		<div className="flex gap-2 items-center justify-center">
			<GrDocker color="#2496ED" size={28} />
			<SiKubernetes color="#326CE5" size={28} />
		</div>
	),
};

type IconKey = keyof typeof icons;

export type { IconKey };

export const SkillIcon = ({
	icon,
	name,
	isBelow,
}: {
	icon: IconKey;
	name: string;
	isBelow?: boolean;
}) => {
	return (
		<div className="flex flex-col items-center justify-center p-2 rounded-xl min-h-[100px] w-full">
			{!isBelow && (
				<p className="text-sm font-semibold text-center text-gray-300 mb-2 min-h-[20px]">
					{name}
				</p>
			)}
			<div className="flex items-center justify-center">
				{icons[icon]}
			</div>
			{isBelow && (
				<p className="text-sm font-semibold text-center text-gray-300 mt-2 min-h-[20px]">
					{name}
				</p>
			)}
		</div>
	);
};
