import { exampleClient } from "data/exampleClient";
import getTechnology from "lib/functions/getTechnology";
import simplifyUrl from "lib/functions/simplifyUrl";

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
	const cms = getTechnology([website.cms], "cms") as tTech;
	const technologies = getTechnology(
		[...website.technologies],
		"stack"
	) as tTech[];
	const seo = getTechnology([...website.seo], "seo") as tTech[];

	return (
		<div>
			<h1>{simplifyUrl(url)}</h1>
			<div>
				<div>
					<b>CMS:</b>
					<ul>{cms.icon}</ul>
				</div>
				<div>
					<b>Technologie:</b>
					<ul>
						{technologies?.map(({ icon, name, value }) => {
							return (
								<li key={value} title={name}>
									{icon}
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<b>SEO:</b>
					<ul>
						{seo.map(({ icon, name, value }) => {
							return (
								<li key={value} title={name}>
									{icon}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
