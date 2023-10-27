import { iMenu } from "ts/interface";
import MenuItem from "nav/Menu/MenuItem";
import styles from "nav/Menu/Menu.module.scss";

type tMenu = {
	menu: iMenu[];
};

export default function Menu(props: tMenu) {
	const { menu } = props;
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ icon, label, uri }, index) => {
				return <MenuItem icon={icon} key={index} label={label} uri={uri} />;
			})}
		</menu>
	);
}
