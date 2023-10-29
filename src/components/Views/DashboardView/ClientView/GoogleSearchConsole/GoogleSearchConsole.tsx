import {
	iGoogleSearchConsoleResponseCharts,
	iGoogleSearchConsoleData,
} from 'ts/interface';
import GoogleSearchConsoleChart from './GoogleSearchConsoleChart';
import GoogleSearchConsoleData from './GoogleSearchConsoleData/GoogleSearchConsoleData';

type tGoogleSearchConsole = {
	chart: iGoogleSearchConsoleResponseCharts[];
	statistics: iGoogleSearchConsoleData[];
	queries: iGoogleSearchConsoleData[];
};

export default function GoogleSearchConsole(props: tGoogleSearchConsole) {
	const { chart, statistics, queries } = props;

	return (
		<div>
			<GoogleSearchConsoleChart chart={chart} />
			<GoogleSearchConsoleData data={queries} />
		</div>
	);
}
