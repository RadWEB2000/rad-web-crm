"use client";
import Chart from "react-apexcharts";

export default function GoogleSearchConsoleChart() {
	const data = {
		name: "Desktops",
		data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
	};

	const options = {
		chart: {
			height: 350,
			type: "line",
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "straight",
		},
		title: {
			text: "Product Trends by Month",
			align: "left",
		},
		grid: {
			row: {
				colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
			],
		},
	};

	return <Chart options={options} series={data} type="line" height={350} />;
}
