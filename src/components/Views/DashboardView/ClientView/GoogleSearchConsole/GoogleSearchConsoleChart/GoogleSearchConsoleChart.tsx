'use client';
import { Line } from 'react-chartjs-2';

import { iGoogleSearchConsoleChart } from 'ts/interface';

type tGoogleSearchConsoleChart = {
	data: iGoogleSearchConsoleChart[];
	type: 'views' | 'clicks' | 'ctr' | 'position';
};

export default function GoogleSearchConsoleChart(
	props: tGoogleSearchConsoleChart
) {
	const { data: da, type } = props;

	const labels = da.map(({ keys }) => {
		return keys[0];
	});
	const datas = da.map(({ impressions }) => {
		return impressions;
	});

	const data = {
		labels: labels, // daty
		datasets: [
			{
				label: 'Kliknięcia',
				data: datas, // liczba kliknięć
				borderColor: ['rgba(255, 206, 86, 0.2)'],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
				pointBorderColor: 'rgba(255, 206, 86, 0.2)',
			},
		],
	};
	console.log('datas', datas);
	return (
		<Line
			options={{
				scales: {
					y: {
						beginAtZero: true,
						labels: labels,
						axis: 'x',
					},
				},
			}}
			data={data}
		/>
	);
}
