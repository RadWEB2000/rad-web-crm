import { iGoogleSearchConsoleResponseCharts } from "ts/interface";
import GoogleSearchConsoleChart from "./GoogleSearchConsoleChart";
import GoogleSearchConsoleDataTile, {
	tGoogleSearchConsoleDataTile,
} from "./GoogleSearchConsoleDataTile/GoogleSearchConsoleDataTile";

type tGoogleSearchConsole = {
	chart: iGoogleSearchConsoleResponseCharts[];
	statistics: tGoogleSearchConsoleDataTile[];
};

export default function GoogleSearchConsole(props: tGoogleSearchConsole) {
	const { chart, statistics } = props;
	return (
		<div>
			<GoogleSearchConsoleChart chart={chart} />
			<ul>
				{statistics
					.reverse()
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
