'use client';
import { iGoogleSearchConsoleResponseCharts } from 'ts/interface';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	ResponsiveContainer,
	YAxis,
	Tooltip,
} from 'recharts';
import { useState } from 'react';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleChart/GoogleSearchConsoleChart.module.scss';

type tGoogleSearchConsoleChart = {
	chart: iGoogleSearchConsoleResponseCharts[];
};

type tButton = {
	action: any;
	isActive: boolean;
	name: string;
	theme: 'clicks' | 'views' | 'ctr' | 'position';
};

function Button(props: tButton) {
	const { action, isActive, name, theme } = props;
	return (
		<button
			className={styles.button}
			data-active={isActive}
			data-theme={theme}
			onClick={action}
		>
			{name}
		</button>
	);
}

export default function GoogleSearchConsoleChart(
	props: tGoogleSearchConsoleChart
) {
	const { chart } = props;
	const data = chart.map(({ clicks, ctr, impressions, keys, position }) => {
		const day =
			new Date(keys[0]).getDate() < 10
				? `0${new Date(keys[0]).getDate()}`
				: new Date(keys[0]).getDate();
		const month =
			new Date(keys[0]).getMonth() + 1 < 10
				? `0${new Date(keys[0]).getMonth() + 1}`
				: new Date(keys[0]).getMonth() + 1;
		const year = new Date(keys[0]).getFullYear();

		return {
			time: `${day}-${month}-${year}`,
			ctr: Math.round(ctr * 1000) / 1000,
			clicks,
			views: impressions,
			position: Math.round(position * 100) / 100,
		};
	});

	const [isClicks, setClicks] = useState(false);
	const [isViews, setViews] = useState(true);
	const [isCtr, setCtr] = useState(false);
	const [isPosition, setPosition] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<Button
					action={() => setClicks(!isClicks)}
					isActive={isClicks}
					name="Kliknięcia"
					theme="clicks"
				/>
				<Button
					action={() => setViews(!isViews)}
					isActive={isViews}
					name="Wyświetlenia"
					theme="views"
				/>
				<Button
					action={() => setCtr(!isCtr)}
					isActive={isCtr}
					name="CTR"
					theme="ctr"
				/>
				<Button
					action={() => setPosition(!isPosition)}
					isActive={isPosition}
					name="Pozycja"
					theme="position"
				/>
			</div>
			<div className={styles.chart_box}>
				<ResponsiveContainer
					width={750}
					height={450}
				>
					<LineChart
						className={styles.chart}
						data={data}
					>
						{isClicks && (
							<Line
								type="monotone"
								name="Kliknięcia"
								dataKey="clicks"
								stroke="hsl(194, 89%, 52%)"
								strokeWidth={3}
							/>
						)}
						{isViews && (
							<Line
								type="monotone"
								name="Wyświetlenia"
								dataKey="views"
								stroke="hsl(307, 100%, 50%)"
								strokeWidth={3}
							/>
						)}
						{isCtr && (
							<Line
								type="monotone"
								name="CTR"
								dataKey="ctr"
								stroke="hsl(135, 78%, 49%)"
								strokeWidth={3}
							/>
						)}
						{isPosition && (
							<Line
								type="monotone"
								name="Pozycja"
								dataKey="position"
								stroke="hsl(66, 100%, 55%)"
								strokeWidth={3}
							/>
						)}
						<CartesianGrid stroke="hsla(0, 0%, 64%,.5)" />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip
							wrapperStyle={{
								background: 'red',
							}}
							contentStyle={{
								backgroundColor: '#292d3e',
								boxShadow: '0 0 1rem hsla(0, 100%, 0%, 0.5)',
								border: 'unset',
							}}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
