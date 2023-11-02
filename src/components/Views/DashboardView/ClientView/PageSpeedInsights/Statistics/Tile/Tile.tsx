import styles from "views/DashboardView/ClientView/PageSpeedInsights/Statistics/Tile/Tile.module.scss";

type tTile = {
	name: string;
	value: number;
};

type tGetColor = {
	background: string;
	border: string;
	font: string;
};

function getColor(value: number): tGetColor {
	if (value === 0 && value <= 49) {
		return {
			background: "rgba(255, 234, 234,  0.857)",
			border: "#ff3333",
			font: "#f32626",
		};
	} else if (value >= 50 && value <= 89) {
		return {
			background: "rgba(255, 246, 234, 0.857)",
			border: "#ffaa33",
			font: "#f9642e",
		};
	} else {
		return {
			background: "rgba(229, 250, 239, 0.857)",
			border: "#00cc66",
			font: "#19d419",
		};
	}
}

export default function Tile(props: tTile) {
	const { name, value } = props;
	return (
		<li className={styles.wrapper} title={`${name} : ${value}%`}>
			<div
				className={styles.box}
				style={{
					backgroundColor: getColor(value).background,
				}}
			>
				<span
					className={styles.line}
					style={{
						backgroundColor: getColor(value).border,
						width: `${value}%`,
					}}
				/>
			</div>
			<section
				className={styles.details}
				style={{
					color: getColor(value).font,
				}}
			>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.score}>{value}%</p>
			</section>
		</li>
	);
}
