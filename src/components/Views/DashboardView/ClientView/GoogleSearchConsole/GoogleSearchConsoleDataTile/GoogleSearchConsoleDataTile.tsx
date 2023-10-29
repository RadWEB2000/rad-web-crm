import { PiCursorClick, PiEye } from 'react-icons/pi';
import { IoIosStats } from 'react-icons/io';
import { GiFlatPlatform } from 'react-icons/gi';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleDataTile/GoogleSearchConsoleTile.module.scss';

export type tGoogleSearchConsoleDataTile = {
	clicks: number;
	ctr: number;
	impressions: number;
	keys: string[];
	position: number;
};
export default function GoogleSearchConsoleDataTile(
	props: tGoogleSearchConsoleDataTile
) {
	const { clicks, ctr, impressions, keys, position } = props;
	return (
		<li className={styles.wrapper}>
			<h3>{keys[0]}</h3>
			<ul>
				<li title="Kliknięcia">
					<span>
						<PiCursorClick />
					</span>
					<p>{clicks}</p>
				</li>
				<li title="Wyświetlenia">
					<span>
						<PiEye />
					</span>
					<p>{impressions}</p>
				</li>
				<li title="CTR">
					<span>
						<IoIosStats />
					</span>
					<p>{Math.round(ctr * 1000) / 1000}%</p>
				</li>
				<li title="Średnia pozycja">
					<span>
						<GiFlatPlatform />
					</span>
					<p>{Math.round(position * 100) / 100}</p>
				</li>
			</ul>
		</li>
	);
}
