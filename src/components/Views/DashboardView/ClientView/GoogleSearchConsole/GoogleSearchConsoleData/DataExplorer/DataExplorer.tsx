"use client";
import styles from "views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/DataExplorer/DataExplorer.module.scss";
import { DataExplorerContext } from "context/DataExplorerContext";
import { useContext } from "react";

export default function DataExplorer() {
	const {
		filter: { pages, queries },
	} = useContext(DataExplorerContext);

	return (
		<div className={styles.wrapper}>
			<button onClick={pages}>Strony</button>
			<button onClick={queries}>Zapytania</button>
		</div>
	);
}
