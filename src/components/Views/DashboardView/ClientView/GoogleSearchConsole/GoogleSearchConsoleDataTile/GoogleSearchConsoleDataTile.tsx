import Link from "next/link";
import { PiCursorClick, PiEye } from "react-icons/pi";
import { IoIosStats } from "react-icons/io";
import { GiFlatPlatform } from "react-icons/gi";

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
		<li>
			<h3>
				<Link href={`${keys[0]}`} target="_blank">
					{keys[0]}
				</Link>
			</h3>
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
					<p>{Math.round(ctr * 100) / 100}%</p>
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
