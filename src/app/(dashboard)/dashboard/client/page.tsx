import GoogleSearchConsole from "components/Views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsole";
import Tile from "components/Views/DashboardView/ClientView/PageSpeedInsights/Statistics/Tile/Tile";
import getGoogleSearchConsoleData from "configs/gsc";
import getGooglePageSpeedData from "configs/pagespeed";

export default async function ClientPage() {
	const gsc = {
		date: await getGoogleSearchConsoleData("date", "https://rad-web.pl"),
		page: await getGoogleSearchConsoleData("page", "https://rad-web.pl"),
		query: await getGoogleSearchConsoleData("query", "https://rad-web.pl"),
	};

	const psi = {
		desktop: await getGooglePageSpeedData(
			"https://rad-web.pl/o-nas/radoslaw-adamczyk",
			"desktop"
		),
		mobile: await getGooglePageSpeedData("https://rad-web.pl", "mobile"),
	};
	console.log(psi.desktop.lighthouseResult.categories.seo.score * 100);
	return (
		<div>
			<div>
				<h1>klient</h1>
				<h2>dane</h2>
				<figure>
					<img
						src={
							psi.desktop.lighthouseResult.audits["final-screenshot"].details
								.data
						}
						alt=""
					/>
				</figure>
				<Tile
					name="SEO"
					value={psi.desktop.lighthouseResult.categories.seo.score}
				/>

				<GoogleSearchConsole
					pages={gsc.page}
					chart={gsc.date}
					queries={gsc.query}
				/>
			</div>
		</div>
	);
}
