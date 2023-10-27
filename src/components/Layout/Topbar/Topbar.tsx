import styles from "topbar/Topbar.module.scss";
import Search from "topbar/Search";
import Account from "topbar/Account";

type tTopbar = {
	account: {
		user: string;
		menu: {
			title: string;
			uri: string;
			icon: JSX.Element | React.ReactNode;
		}[];
	};
};

export default function Topbar(props: tTopbar) {
	const {
		account: { menu, user },
	} = props;
	return (
		<nav className={styles.wrapper}>
			<div className={styles.search}>
				<Search />
			</div>
			<div className={styles.account}>
				<Account menu={menu} user={user} />
			</div>
		</nav>
	);
}
