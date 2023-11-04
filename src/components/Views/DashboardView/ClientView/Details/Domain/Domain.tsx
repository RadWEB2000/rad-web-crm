import getTechnology from "lib/functions/getTechnology";
import simplifyUrl from "lib/functions/simplifyUrl";
import Technology from "views/DashboardView/ClientView/Details/Domain/Technology";
import Service from "views/DashboardView/ClientView/Details/Domain/Service";
import styles from "views/DashboardView/ClientView/Details/Domain/Domain.module.scss";

type tDomain = {
	url: string;
	website: {
		cms: string;
		seo: string[];
		technologies: string[];
		services: string[];
	};
};

type tTech = {
	icon: JSX.Element;
	name: string;
	value: string;
};

export default function Domain(props: tDomain) {
	const { url, website } = props;
	const cms = getTechnology([website.cms], "cms") as tTech[];
	const technologies = getTechnology(
		[...website.technologies],
		"stack"
	) as tTech[];
	const seo = getTechnology([...website.seo], "seo") as tTech[];
	return (
		<div className={styles.wrapper}>
			<div className={styles.domain}>
				<h1 className={styles.site}>{simplifyUrl(url)}</h1>
				<ul className={styles.services}>
					{website.services.map((item, index) => {
						return <Service key={index} service={item} />;
					})}
				</ul>
			</div>
			<div className={styles.technologies}>
				<Technology data={cms} label="CMS" />
				<Technology data={technologies} label="Technologie" />
				<Technology data={seo} label="Narzędzia SEO" />
			</div>
		</div>
	);
}
