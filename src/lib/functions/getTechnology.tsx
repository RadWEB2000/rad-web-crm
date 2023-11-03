import { cms } from "data/cms";
import { seo } from "data/seo";
import { technologies } from "data/technologies";
type tTech = {
	icon: JSX.Element;
	name: string;
	value: string;
};
export default function getTechnology(
	query: string[],
	type: "stack" | "seo" | "cms"
) {
	if (type === "cms") {
		const data: tTech | undefined = cms.find(
			(item) => item.value.toLowerCase() === query[0].toLowerCase()
		);
		if (data !== null) {
			return data;
		} else {
			return cms[cms.length - 1];
		}
	} else {
		const source = type === "seo" ? seo : technologies;

		const data: tTech[] = source.filter((item) =>
			query.some((q) => item.value.toLowerCase() === q.toLowerCase())
		);
		return data;
	}
}
