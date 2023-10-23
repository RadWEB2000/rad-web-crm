import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import styles from "nav/Menu/MenuItem/MenuItem.module.scss";
type tMenuItem = {
	label: string;
	uri: string;
} & (
	| {
			variant: "expand";
			icon: JSX.Element | React.ReactNode;
	  }
	| {
			variant: "regural";
			icon: JSX.Element | React.ReactNode;
	  }
	| {
			variant: "submenu";
	  }
);

export default function MenuItem(props: tMenuItem) {
	const { label, uri, variant } = props;

	if (variant === "expand") {
		const { icon } = props;
		return (
			<div className={styles.expand}>
				<Link href={uri}>
					<span>{icon}</span>
					<p>{label}</p>
				</Link>
				<button>
					<LuChevronDown />
				</button>
			</div>
		);
	} else if (variant === "regural") {
		const { icon } = props;
		return (
			<li className={styles.regural}>
				<Link href={uri}>
					<span>{icon}</span>
					<p>{label}</p>
				</Link>
			</li>
		);
	} else {
		return (
			<li
				className={styles.submenu}
				style={{
					display: "none",
				}}
			>
				<Link href={uri}>
					<p>{label}</p>
				</Link>
			</li>
		);
	}
}
