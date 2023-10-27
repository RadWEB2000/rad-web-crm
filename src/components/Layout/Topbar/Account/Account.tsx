import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import styles from "topbar/Account/Account.module.scss";

type tAccount = {
	user: string;
	menu: {
		title: string;
		uri: string;
		icon: JSX.Element | React.ReactNode;
	}[];
};

export default function Account(props: tAccount) {
	const { menu, user } = props;
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<p>{`Witaj, ${user}`}</p>
				<span>
					<FaRegUser />
				</span>
			</button>
			<ul className={styles.list}>
				{menu.map(({ icon, title, uri }) => {
					return (
						<li className={styles.item} key={title}>
							<Link href="#">
								<span>{icon}</span>
								<p>{title}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
