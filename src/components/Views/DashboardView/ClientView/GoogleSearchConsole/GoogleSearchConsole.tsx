import { iGoogleSearchConsoleChart } from 'ts/interface';
import GoogleSearchConsoleChart from './GoogleSearchConsoleChart';
import GoogleSearchConsoleDataTile, {
	tGoogleSearchConsoleDataTile,
} from './GoogleSearchConsoleDataTile/GoogleSearchConsoleDataTile';

type tGoogleSearchConsole = {
	chart?: iGoogleSearchConsoleChart[];
	statistics: tGoogleSearchConsoleDataTile[];
};

export default function GoogleSearchConsole(props: tGoogleSearchConsole) {
	const { statistics, chart } = props;
	return (
		<div>
			{chart && (
				<GoogleSearchConsoleChart
					data={chart}
					type="views"
				/>
			)}
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
