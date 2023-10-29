import { iGoogleSearchConsoleData } from 'ts/interface';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleData/Tile/Tile.module.scss';

type tTile = iGoogleSearchConsoleData;

export default function Tile(props: tTile) {
	const { clicks, ctr, impressions: views, keys, position } = props;
	return (
		<tr className={styles.wrapper}>
			<td className={styles.name}>{keys[0]}</td>
			<td className={styles.item}>{clicks}</td>
			<td className={styles.item}>{views}</td>
			<td className={styles.item}>{Math.round(ctr * 100) / 100}%</td>
			<td className={styles.item}>{Math.round(position * 100) / 100}</td>
		</tr>
	);
}
