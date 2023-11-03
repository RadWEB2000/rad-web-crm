import { cms } from "data/cms";
import { seo } from "data/seo";
import { technologies } from "data/technologies";

export default function getTechnology(
	query: string,
	type: "stack" | "seo" | "cms"
) {
	if (type === "cms") {
		const data = cms.filter(
			(item) => item.value.toLocaleLowerCase() === query.toLowerCase()
		);
		if (data === undefined || data === null) {
			return cms.pop();
		} else {
			return data;
		}
	} else if (type === "seo") {
		const data = seo.filter(
			(item) => item.value.toLocaleLowerCase() === query.toLowerCase()
		);
		return [...data];
	} else if (type === "stack") {
		const data = technologies.filter(
			(item) => item.value.toLocaleLowerCase() === query.toLowerCase()
		);
		return [...data];
	}
}
