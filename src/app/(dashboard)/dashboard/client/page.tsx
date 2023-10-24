import GoogleSearchConsole from "components/Views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsole";
import getGoogleSearchConsoleData from "configs/gsc";

export default async function ClientPage() {
	// const { data: gsc_data } = await getGoogleSearchConsoleData(
	// 	"https://rad-web.pl"
	// );

	const date = await getGoogleSearchConsoleData("date", "https://rad-web.pl");
	const page = await getGoogleSearchConsoleData("page", "https://rad-web.pl");
	const query = await getGoogleSearchConsoleData("query", "https://rad-web.pl");

	console.log(date.rows);

	return (
		<div>
			<div>
				<h1>klient</h1>
				<h2>dane</h2>
				<GoogleSearchConsole statistics={page.rows} />
			</div>
		</div>
	);
}
