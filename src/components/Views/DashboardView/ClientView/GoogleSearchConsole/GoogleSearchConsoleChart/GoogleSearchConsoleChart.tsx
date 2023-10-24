"use client";
import { Chart, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";
export default function GoogleSearchConsoleChart() {
	const data = {
		labels: ["2023-10-20", "2023-10-21", "2023-10-22"], // daty
		datasets: [
			{
				label: "Kliknięcia",
				data: [1, 1, 2], // liczba kliknięć
				borderColor: ["rgba(255, 206, 86, 0.2)"],
				backgroundColor: ["rgba(255, 206, 86, 0.2)"],
				pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
				pointBorderColor: "rgba(255, 206, 86, 0.2)",
			},
		],
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: "Wykres Kliknięć",
			},
		},
		scales: {
			y: {
				type: "linear", // upewnij się, że używasz właściwej skali
				beginAtZero: true,
			},
		},
	};

	return <Line data={data} options={options} />;
}
