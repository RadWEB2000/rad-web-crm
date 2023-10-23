import { iMenu } from "ts/interface";
import Menu from "nav/Menu";
import styles from "nav/Navigation.module.scss";
import Brand from "nav/Brand";
import Settings from "nav/Settings";
import { iSettings } from "data/settings";

type tNavigation = {
	menu: iMenu[];
	settings: iSettings[];
};

export default function Navigation(props: tNavigation) {
	const { menu, settings } = props;
	return (
		<nav className={styles.wrapper}>
			<div className={styles.brand}>
				<Brand />
			</div>
			<div className={styles.menu}>
				<Menu menu={menu} />
			</div>
			<div className={styles.settings}>
				<Settings settings={settings} />
			</div>
		</nav>
	);
}
