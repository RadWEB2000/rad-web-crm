import styles from "views/DashboardView/ClientView/Details/Domain/Technology/Technology.module.scss";

type tTechnology = {
	label: string;
	data: {
		icon: JSX.Element;
		name: string;
		value: string;
	}[];
};

export default function Technology(props: tTechnology) {
	const { data, label } = props;
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.label}>{`${label}:`}</h2>
			<ul className={styles.items}>
				{data.map(({ icon, name, value }) => {
					return (
						<li className={styles.item} key={value} title={name}>
							{icon}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
