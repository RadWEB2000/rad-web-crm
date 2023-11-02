"use client";

import {
	iGoogleSearchConsoleResponseCharts,
	iGoogleSearchConsoleData,
} from "ts/interface";
import GoogleSearchConsoleChart from "./GoogleSearchConsoleChart";
import GoogleSearchConsoleData from "./GoogleSearchConsoleData/GoogleSearchConsoleData";
import DataExplorerProvider from "context/DataExplorerContext";

type tGoogleSearchConsole = {
	chart: iGoogleSearchConsoleResponseCharts[];
	pages: iGoogleSearchConsoleData[];
	queries: iGoogleSearchConsoleData[];
};

export default function GoogleSearchConsole(props: tGoogleSearchConsole) {
	const { chart, pages, queries } = props;

	return (
		<div>
			<GoogleSearchConsoleChart chart={chart} />
			<DataExplorerProvider pages={pages} queries={queries}>
				<GoogleSearchConsoleData />
			</DataExplorerProvider>
		</div>
	);
}
