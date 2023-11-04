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
	function getSource() {
		if (type === "cms") return cms;
		else if (type === "seo") return seo;
		else if (type === "stack") return technologies;
		else return cms;
	}

	const data: tTech[] = getSource().filter((item) =>
		query.some((q) => item.value.toLowerCase() === q.toLowerCase())
	);
	return data;
}
