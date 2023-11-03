import { FaBloggerB, FaDrupal, FaGhost, FaKeyboard } from "react-icons/fa6";
import {
	SiContentful,
	SiDatocms,
	SiMagento,
	SiPrestashop,
	SiShopify,
	SiSquarespace,
	SiWebflow,
	SiWix,
} from "react-icons/si";
import { TfiJoomla, TfiWordpress } from "react-icons/tfi";

type tTech = {
	icon: JSX.Element;
	name: string;
	value: string;
};

export const cms: tTech[] = [
	{
		icon: <TfiWordpress />,
		name: "WordPress",
		value: "wordpress",
	},
	{
		icon: <TfiJoomla />,
		name: "Joomla",
		value: "joomla",
	},
	{
		icon: <FaDrupal />,
		name: "Drupal",
		value: "drupal",
	},
	{
		icon: <SiMagento />,
		name: "Magento",
		value: "magento",
	},
	{
		icon: <SiShopify />,
		name: "Shopify",
		value: "shopify",
	},
	{
		icon: <FaBloggerB />,
		name: "Blogger",
		value: "blogger",
	},
	{
		icon: <SiWix />,
		name: "Wix",
		value: "wix",
	},
	{
		icon: <SiSquarespace />,
		name: "Squarespace",
		value: "squarespace",
	},
	{
		icon: <SiPrestashop />,
		name: "PrestaShop",
		value: "prestashop",
	},

	{ icon: <FaGhost />, name: "Ghost", value: "Ghost" },
	{ icon: <SiWebflow />, name: "Webflow", value: "Webflow" },
	{ icon: <SiContentful />, name: "Contentful", value: "contentful" },
	{ icon: <SiDatocms />, name: "DatoCMS", value: "datocms" },
	{ icon: <FaKeyboard />, name: "Inny CMS", value: "other" },
];
