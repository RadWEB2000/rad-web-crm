import { iMenu } from "ts/interface";
import Submenu from "nav/Menu/Submenu";
import MenuItem from "nav/Menu/MenuItem";

type tMenu = {
	menu: iMenu[];
};

export default function Menu(props: tMenu) {
	const { menu } = props;
	return (
		<menu>
			{menu.map(({ icon, label, uri, submenu }, index) => {
				if (submenu) {
					return (
						<Submenu
							icon={icon}
							key={index}
							label={label}
							submenu={submenu}
							uri={uri}
						/>
					);
				} else {
					return (
						<MenuItem
							icon={icon}
							key={index}
							label={label}
							variant="regural"
							uri={uri}
						/>
					);
				}
			})}
		</menu>
	);
}
