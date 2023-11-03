import Managment from "views/DashboardView/ClientView/Details/Managment";
import Domain from "views/DashboardView/ClientView/Details/Domain";

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
		<div>
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
		</div>
	);
}
