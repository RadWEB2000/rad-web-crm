import Link from "next/link";
import Preview from "./Preview/Preview";
import Statistics from "./Statistics";
import styles from "views/DashboardView/ClientView/PageSpeedInsights/PageSpeedInsights.module.scss";

type tPageSpeedInsights = {
	preview: {
		alt: string;
		src: string;
		title: string;
	};
	statistics: {
		desktop: {
			performance: number;
			accessibility: number;
			seo: number;
			practices: number;
		};
		mobile: {
			performance: number;
			accessibility: number;
			seo: number;
			practices: number;
		};
	};
};

export default function PageSpeedInsights(props: tPageSpeedInsights) {
	const {
		preview,
		statistics: { desktop, mobile },
	} = props;
	return (
		<div className={styles.wrapper}>
			<Preview alt={preview.alt} src={preview.src} title={preview.title} />
			<Statistics desktop={desktop} mobile={mobile} />
			<div>
				<button>Więcej</button>
			</div>
		</div>
	);
}
