import {
	FaBootstrap,
	FaDatabase,
	FaGolang,
	FaPython,
	FaReact,
	FaRust,
	FaSass,
} from "react-icons/fa6";
import {
	SiAngular,
	SiFlutter,
	SiGatsby,
	SiJavascript,
	SiJquery,
	SiLaravel,
	SiNextdotjs,
	SiPhp,
	SiRemix,
	SiSymfony,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";
import { TbBrandSolidjs } from "react-icons/tb";
import { TfiAndroid, TfiApple, TfiCss3, TfiHtml5 } from "react-icons/tfi";

type tTech = {
	icon: JSX.Element;
	name: string;
	value: string;
};

export const technologies: tTech[] = [
	{
		icon: <TfiHtml5 />,
		name: "HTML",
		value: "html",
	},
	{
		icon: <TfiCss3 />,
		name: "CSS",
		value: "css",
	},
	{
		icon: <FaBootstrap />,
		name: "Bootstrap",
		value: "bootstrap",
	},
	{
		icon: <FaSass />,
		name: "Sass",
		value: "sass",
	},
	{
		icon: <SiTailwindcss />,
		name: "Tailwind CSS",
		value: "tailwind",
	},
	{
		icon: <SiJavascript />,
		name: "JavaScript",
		value: "javascript",
	},
	{
		icon: <SiJquery />,
		name: "jQuery",
		value: "jquery",
	},
	{
		icon: <SiTypescript />,
		name: "TypeScript",
		value: "typescript",
	},
	{
		icon: <FaReact />,
		name: "React",
		value: "react",
	},
	{
		icon: <SiNextdotjs />,
		name: "NextJS",
		value: "nextjs",
	},
	{
		icon: <SiGatsby />,
		name: "GatsbyJS",
		value: "gatsby-js",
	},
	{
		icon: <SiRemix />,
		name: "RemixJS",
		value: "remix-js",
	},
	{
		icon: <SiAngular />,
		name: "Angular",
		value: "angular",
	},
	{
		icon: <SiVuedotjs />,
		name: "Vue",
		value: "vue",
	},
	{
		icon: <TbBrandSolidjs />,
		name: "Solid.js",
		value: "solid-js",
	},
	{
		icon: <SiFlutter />,
		name: "Flutter",
		value: "flutter",
	},
	{
		icon: <TfiAndroid />,
		name: "Kotlin",
		value: "kotlin",
	},
	{
		icon: <TfiApple />,
		name: "Swift",
		value: "swift",
	},
	{
		icon: <SiPhp />,
		name: "PHP",
		value: "php",
	},
	{
		icon: <SiLaravel />,
		name: "Laravel",
		value: "laravel",
	},
	{
		icon: <SiSymfony />,
		name: "Symfony",
		value: "symfony",
	},
	{
		icon: <FaPython />,
		name: "Python",
		value: "python",
	},
	{
		icon: <FaRust />,
		name: "Rust",
		value: "rust",
	},
	{
		icon: <FaGolang />,
		name: "Go",
		value: "go",
	},
	{
		icon: <FaDatabase />,
		name: "SQL",
		value: "sql",
	},
];
