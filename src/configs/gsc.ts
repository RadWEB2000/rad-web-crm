import getDate from "lib/functions/getDate";

const searchConsole = require("@googleapis/searchconsole");

export default async function getGoogleSearchConsoleData(
	dimension: "date" | "page" | "query",
	url: string
) {
	const auth = new searchConsole.auth.GoogleAuth({
		credentials: {
			private_key: `${process.env.GSC_PRIVATE_KEY!.replaceAll("\\n", "\n")}`,
			client_email: process.env.GSC_CLIENT_EMAIL,
		},
		scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
	});
	const client = searchConsole.searchconsole({
		version: "v1",
		auth,
	});
	const data = client.searchanalytics
		.query({
			startDate: "2020-01-01",
			siteUrl: url,
			endDate: `${getDate().year}-${getDate().month}-${getDate().day}`,
			dimensions: [dimension],
			rowLimit: 300,
		})
		.then((res: any) => {
			return res.data.rows;
		})
		.catch((err: any) => console.log(err));

	return data;
}
