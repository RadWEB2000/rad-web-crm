import Link from "next/link";
import styles from "nav/Brand/Brand.module.scss";
export default function Brand() {
	return (
		<div className={styles.wrapper}>
			<Link href="/dashboard">RadWEB</Link>
		</div>
	);
}
