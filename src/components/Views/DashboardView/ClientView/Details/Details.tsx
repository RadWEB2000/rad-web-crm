import Managment from "views/DashboardView/ClientView/Details/Managment/Managment";

type tDetails = {
	managment: {
		cooperation: {
			start: Date;
			end?: Date;
		};
		specialists: {
			label: string;
			uri: string;
		}[];
	};
};

export default function Details(props: tDetails) {
	const {
		managment: { cooperation, specialists },
	} = props;
	return (
		<div>
			<Managment cooperation={cooperation} specialists={specialists} />
		</div>
	);
}
