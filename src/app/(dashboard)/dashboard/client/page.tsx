import GoogleSearchConsole from "components/Views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsole";
import getGoogleSearchConsoleData from "configs/gsc";
import getGooglePageSpeedData from "configs/pagespeed";
import PageSpeedInsights from "components/Views/DashboardView/ClientView/PageSpeedInsights/PageSpeedInsights";
import styles from "app/(dashboard)/dashboard/client/_style/Client.module.scss";

export default async function ClientPage() {
	const site: string = "https://rad-web.pl";
	const site2: string = site;

	const gsc = {
		date: await getGoogleSearchConsoleData("date", site),
		page: await getGoogleSearchConsoleData("page", site),
		query: await getGoogleSearchConsoleData("query", site),
	};

	const psi = {
		desktop: await getGooglePageSpeedData(site2, "desktop"),
		mobile: await getGooglePageSpeedData(site2, "mobile"),
	};

	const psiData = {
		mobile: psi.mobile.lighthouseResult.categories,
		desktop: psi.desktop.lighthouseResult.categories,
		preview: {
			alt: psi.desktop.kind,
			src: psi.desktop.lighthouseResult.audits["final-screenshot"].details.data,
			title: psi.desktop.kind,
		},
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.gsc}>
				<GoogleSearchConsole
					pages={gsc.page}
					chart={gsc.date}
					queries={gsc.query}
				/>
			</div>
			<div className={styles.pagespeed}>
				<PageSpeedInsights
					preview={psiData.preview}
					statistics={{
						desktop: {
							accessibility: psiData.desktop.accessibility.score * 100,
							performance: psiData.desktop.performance.score * 100,
							seo: psiData.desktop.seo.score * 100,
							practices: psiData.desktop["best-practices"].score * 100,
						},
						mobile: {
							accessibility: psiData.mobile.accessibility.score * 100,
							performance: psiData.mobile.performance.score * 100,
							seo: psiData.mobile.seo.score * 100,
							practices: psiData.mobile["best-practices"].score * 100,
						},
					}}
				/>
			</div>
		</div>
	);
}
