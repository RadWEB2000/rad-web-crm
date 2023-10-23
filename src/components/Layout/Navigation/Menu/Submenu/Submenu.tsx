import MenuItem from "nav/Menu/MenuItem";

type tSubmenu = {
	icon: JSX.Element | React.ReactNode;
	label: string;
	submenu: {
		label: string;
		uri: string;
	}[];
	uri: string;
};

export default function Submenu(props: tSubmenu) {
	const { icon, label, submenu, uri } = props;
	return (
		<li>
			<MenuItem icon={icon} label={label} uri={uri} variant="expand" />
			<ul>
				{submenu.map(({ label, uri }, index) => {
					return (
						<MenuItem key={index} label={label} uri={uri} variant="submenu" />
					);
				})}
			</ul>
		</li>
	);
}
