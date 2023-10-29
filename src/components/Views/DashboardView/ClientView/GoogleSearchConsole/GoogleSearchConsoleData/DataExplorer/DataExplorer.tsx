'use client';
import { useState } from 'react';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/DataExplorer/DataExplorer.module.scss';

export default function DataExplorer() {
	const [isOpenSort, setIsOpenSort] = useState<boolean>(false);

	return (
		<div className={styles.wrapper}>
			<button>Strony</button>
			<button>Zapytania</button>
		</div>
	);
}
