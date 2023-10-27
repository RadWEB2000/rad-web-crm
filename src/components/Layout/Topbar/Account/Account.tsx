"use client";
import Link from "next/link";
import { useState } from "react";
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
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const { menu, user } = props;
	return (
		<div className={styles.wrapper} onMouseLeave={() => setIsOpenMenu(false)}>
			<button
				className={styles.button}
				onClick={() => setIsOpenMenu(!isOpenMenu)}
			>
				<p>{`Witaj, ${user}`}</p>
				<span>
					<FaRegUser />
				</span>
			</button>
			{isOpenMenu && (
				<ul className={styles.list}>
					{menu.map(({ icon, title, uri }) => {
						return (
							<li
								className={styles.item}
								key={title}
								onClick={() => setIsOpenMenu(false)}
							>
								<Link href="#">
									<span>{icon}</span>
									<p>{title}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
