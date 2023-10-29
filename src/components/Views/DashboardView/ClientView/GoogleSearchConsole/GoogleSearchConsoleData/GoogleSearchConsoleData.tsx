import { iGoogleSearchConsoleData } from 'ts/interface';
import DataExplorer from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/DataExplorer';
import Tile from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/Tile';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/GoogleSearchConsoleData.module.scss';
type tGoogleSearchConsoleData = {
	data: iGoogleSearchConsoleData[];
};

export default function GoogleSearchConsoleData(
	props: tGoogleSearchConsoleData
) {
	const { data } = props;
	return (
		<div className={styles.wrapper}>
			<DataExplorer />
			<table className={styles.results}>
				<thead className={styles.head}>
					<tr className={styles.box}>
						<th className={styles.item}>Strona / Zapytanie</th>
						<th className={styles.item}>Kliknięcia</th>
						<th className={styles.item}>Wyświetlenia</th>
						<th className={styles.item}>CTR</th>
						<th className={styles.item}>Pozycja</th>
					</tr>
				</thead>
				<tbody>
					{data
						.slice(0, 25)
						.map(({ clicks, ctr, impressions, keys, position }) => {
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
				</tbody>
			</table>
		</div>
	);
}
