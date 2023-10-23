import styles from "topbar/Topbar.module.scss";

export default function Topbar() {
	return (
		<nav className={styles.wrapper}>
			<div className={styles.search}>
				<form>
					<input
						type="url"
						name="website"
						id="website"
						placeholder="Wpisz adres URL"
					/>
				</form>
			</div>
			<div className={styles.account}>Witaj Radosław</div>
			<div className={styles.button}>|||</div>
		</nav>
	);
}
