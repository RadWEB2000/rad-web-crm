import Managment from "views/DashboardView/ClientView/Details/Managment";
import Domain from "views/DashboardView/ClientView/Details/Domain";
import TrackedKeywords from "views/DashboardView/ClientView/Details/TrackedKeywords";
import { exampleClient } from "data/exampleClient";
import Notes from "views/DashboardView/ClientView/Details/Notes";
import styles from "views/DashboardView/ClientView/Details/Details.module.scss";

type tDetails = {
	domain: {
		url: string;
		website: {
			cms: string;
			seo: string[];
			technologies: string[];
			services: string[];
		};
	};
	managment: {
		cooperation: {
			start: string;
			end?: string;
		};
		specialists: {
			label: string;
			uri: string;
		}[];
	};
};

export default function Details(props: tDetails) {
	const {
		domain: { url, website },
		managment: { cooperation, specialists },
	} = props;
	return (
		<div className={styles.wrapper}>
			<Managment cooperation={cooperation} specialists={specialists} />
			<Domain
				url={url}
				website={{
					cms: website.cms,
					seo: website.seo,
					services: website.services,
					technologies: website.technologies,
				}}
			/>
			<div className={styles.box}>
				<Notes />
				<TrackedKeywords
					keywords={exampleClient.trackedKeywords}
					title="Śledzone słowa kluczowe"
				/>
			</div>
		</div>
	);
}
