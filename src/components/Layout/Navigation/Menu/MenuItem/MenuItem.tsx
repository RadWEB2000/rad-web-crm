import Link from "next/link";
import styles from "nav/Menu/MenuItem/MenuItem.module.scss";
type tMenuItem = {
	icon: JSX.Element | React.ReactNode;
	label: string;
	uri: string;
};

export default function MenuItem(props: tMenuItem) {
	const { icon, label, uri } = props;

	return (
		<li className={styles.wrapper}>
			<Link href={uri}>
				<span>{icon}</span>
				<p>{label}</p>
			</Link>
		</li>
	);
}
