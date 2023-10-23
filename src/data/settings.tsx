import { GoGear, GoSignOut } from "react-icons/go";

export interface iSettings {
	icon: React.ReactNode | JSX.Element;
	title: string;
	uri: string;
}

export const settings: iSettings[] = [
	{
		icon: <GoGear />,
		title: "Ustawienia",
		uri: "/dashbord/",
	},
	{
		icon: <GoSignOut />,
		title: "Wyloguj",
		uri: "/dashbord/",
	},
];
