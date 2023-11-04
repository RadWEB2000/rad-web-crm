import styles from "views/DashboardView/ClientView/Details/Domain/Service/Service.module.scss";
type tService = {
	service: string;
};

export default function Service(props: tService) {
	const { service } = props;
	return (
		<li className={styles.wrapper} data-service={service}>
			{service}
		</li>
	);
}
