import Link from "next/link";
import { iSettings } from "data/settings";
import styles from "nav/Settings/Settings.module.scss";
type tSettings = {
	settings: iSettings[];
};

export default function Settings(props: tSettings) {
	const { settings } = props;
	return (
		<div className={styles.wrapper}>
			<ul>
				{settings.map(({ icon, title, uri }, index) => {
					return (
						<li key={index} title={title}>
							<Link aria-label={title} href={uri}>
								{icon}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
