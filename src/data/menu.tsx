import { iMenu } from "ts/interface";
import { GoSignOut } from "react-icons/go";

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
		label: "Baza wiedzy",
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
	// {
	// 	icon: <GoSignOut />,
	// 	label: "Wyloguj",
	// 	uri: "/dashbord/",
	// },
];
