import GoogleSearchConsoleChart from "./GoogleSearchConsoleChart";
import GoogleSearchConsoleDataTile, {
	tGoogleSearchConsoleDataTile,
} from "./GoogleSearchConsoleDataTile/GoogleSearchConsoleDataTile";

type tGoogleSearchConsole = {
	statistics: tGoogleSearchConsoleDataTile[];
};

export default function GoogleSearchConsole(props: tGoogleSearchConsole) {
	const { statistics } = props;
	return (
		<div>
			<GoogleSearchConsoleChart />
			<ul>
				{statistics
					.reverse()
					.slice(0, 4)
					.map(({ clicks, impressions, ctr, keys, position }) => {
						return (
							<GoogleSearchConsoleDataTile
								clicks={clicks}
								ctr={ctr}
								impressions={impressions}
								keys={keys}
								key={keys[0]}
								position={position}
							/>
						);
					})}
			</ul>
		</div>
	);
}
