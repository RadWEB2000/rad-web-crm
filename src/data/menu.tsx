import { iMenu } from "ts/interface";
import {
	LuClipboardList,
	LuContact2,
	LuHammer,
	LuHome,
	LuNewspaper,
	LuPackage2,
	LuSettings,
} from "react-icons/lu";

export const menu: iMenu[] = [
	{
		label: "Start",
		icon: <LuHome />,
		uri: "/dashboard",
	},
	{
		label: "Zadania",
		icon: <LuClipboardList />,
		uri: "/dashboard",
		submenu: [
			{
				label: "Do zrobienia",
				uri: "/dashboard",
			},
			{
				label: "Zbliżające się",
				uri: "/dashboard",
			},
			{
				label: "Przekroczone",
				uri: "/dashboard",
			},
			{
				label: "Wykonane",
				uri: "/dashboard",
			},
		],
	},
	{
		label: "Klienci",
		icon: <LuContact2 />,
		uri: "/dashboard",
	},
	{
		label: "Narzędzia",
		icon: <LuHammer />,
		uri: "/dashboard",
	},
	{
		label: "Bazy danych",
		icon: <LuNewspaper />,
		uri: "/dashboard",
	},
	{
		label: "Pakiety",
		icon: <LuPackage2 />,
		uri: "/dashboard",
	},
	{
		label: "Ustawienia",
		icon: <LuSettings />,
		uri: "/dashboard",
	},
];
