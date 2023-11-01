import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

type tTile = {
	name: string;
	value: number;
};

type tGetColor = {
	background: string;
	border: string;
	font: string;
};

export default function Tile(props: tTile) {
	const { name, value } = props;

	function getColor(score: number): tGetColor {
		const value: number = score * 100;
		if (value === 0 && value <= 49) {
			return {
				background: "#ffeaea",
				border: "#ff3333",
				font: "#cc0000",
			};
		} else if (value >= 50 && value <= 89) {
			return {
				background: "#fff6ea",
				border: "#ffaa33",
				font: "#c53907",
			};
		} else {
			return {
				background: "#e5faef",
				border: "#00cc66",
				font: "#008800",
			};
		}
	}

	return (
		<li
			style={{
				border: `2px solid ${getColor(value).background}`,
			}}
		>
			<div>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={400}>
						<Pie
							data={{ 1: value }}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							fill={getColor(value).background}
							dataKey="value"
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<section>
				<header>
					<h3>{name}</h3>
				</header>
			</section>
		</li>
	);
}
