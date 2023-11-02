"use client";
import { useState } from "react";
import Tile from "./Tile";
import { BiDesktop, BiMobileAlt } from "react-icons/bi";
import styles from "views/DashboardView/ClientView/PageSpeedInsights/Statistics/Statistics.module.scss";

type tStatisticsDevice = {
	performance: number;
	accessibility: number;
	seo: number;
	practices: number;
};

type tStatistics = {
	desktop: tStatisticsDevice;
	mobile: tStatisticsDevice;
};

export default function Statistics(props: tStatistics) {
	const { desktop, mobile } = props;
	const [device, toggleDevice] = useState<"mobile" | "desktop">("mobile");

	function getDevice(device: "mobile" | "desktop") {
		if (device === "mobile") {
			return mobile;
		} else {
			return desktop;
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					data-active={device === "desktop" ? true : false}
					onClick={() => toggleDevice("mobile")}
				>
					<BiMobileAlt />
				</button>
				<button
					className={styles.button}
					data-active={device === "mobile" ? true : false}
					onClick={() => toggleDevice("desktop")}
				>
					<BiDesktop />
				</button>
			</div>
			<ul className={styles.tiles}>
				<Tile name="Dostępność" value={getDevice(device).accessibility} />
				<Tile name="Wydajność" value={getDevice(device).performance} />
				<Tile name="SEO" value={getDevice(device).seo} />
				<Tile name="Dobre praktyki" value={getDevice(device).practices} />
			</ul>
		</div>
	);
}
