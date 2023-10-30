"use client";
import { iGoogleSearchConsoleData } from "ts/interface";
import DataExplorer from "views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/DataExplorer";
import Tile from "views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/Tile";
import styles from "views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/GoogleSearchConsoleData.module.scss";
import { useContext } from "react";
import { DataExplorerContext } from "context/DataExplorerContext";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { motion } from "framer-motion";

function toggleArrow(direction: "asc" | "des") {
	if (direction === "des") {
		return <BsCaretUpFill />;
	} else {
		return <BsCaretDownFill />;
	}
}

export default function GoogleSearchConsoleData() {
	const {
		data,
		filter: { filtered },
		sort: { clicks, ctr, name, position, sorted, views },
	} = useContext(DataExplorerContext);
	return (
		<div className={styles.wrapper}>
			<DataExplorer />
			<div className={styles.container}>
				<motion.table className={styles.results} data-sorted={sorted}>
					<thead className={styles.head}>
						<tr className={styles.box}>
							<th
								className={styles.item}
								onClick={() => name.handle()}
								style={{
									minWidth: "35rem",
									width: "calc(100% - 15rem * 3 - 19rem)",
								}}
							>
								<p>{filtered}</p>
								<span>{toggleArrow(name.direction)}</span>
							</th>
							<th
								className={styles.item}
								onClick={() => clicks.handle()}
								style={{
									width: "16rem",
								}}
							>
								<p>Kliknięcia</p>
								<span>{toggleArrow(clicks.direction)}</span>
							</th>
							<th
								className={styles.item}
								onClick={() => views.handle()}
								style={{
									width: "19rem",
								}}
							>
								<p>Wyświetlenia</p>
								<span>{toggleArrow(views.direction)}</span>
							</th>
							<th
								className={styles.item}
								onClick={() => ctr.handle()}
								style={{
									width: "15rem",
								}}
							>
								<p>CTR</p>
								<span>{toggleArrow(ctr.direction)}</span>
							</th>
							<th
								className={styles.item}
								onClick={() => position.handle()}
								style={{
									width: "15rem",
								}}
							>
								<p>Pozycja</p>
								<span>{toggleArrow(position.direction)}</span>
							</th>
						</tr>
					</thead>
					<motion.tbody>
						{data.map(({ clicks, ctr, impressions, keys, position }) => {
							return (
								<Tile
									clicks={clicks}
									ctr={ctr}
									impressions={impressions}
									keys={keys}
									position={position}
									key={keys[0]}
								/>
							);
						})}
					</motion.tbody>
				</motion.table>
			</div>
		</div>
	);
}
