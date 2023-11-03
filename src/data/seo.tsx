import {
	SiGoogle,
	SiGoogleanalytics,
	SiGoogleclassroom,
	SiMicrosoftbing,
	SiHubspot,
} from "react-icons/si";

type tTech = {
	icon: JSX.Element;
	name: string;
	value: string;
};
export const seo: tTech[] = [
	{
		icon: <SiGoogle />,
		name: "Google Search Console",
		value: "gsc",
	},
	{
		icon: <SiGoogleanalytics />,
		name: "Google Analytics",
		value: "ga",
	},
	{
		icon: <SiMicrosoftbing />,
		name: "Bing Webmaster Tools",
		value: "bing",
	},
	{
		icon: <SiGoogleclassroom />,
		name: "Google Moja Firma",
		value: "gmf",
	},
	{
		icon: <SiHubspot />,
		name: "HubSpot",
		value: "hubspot",
	},
];
