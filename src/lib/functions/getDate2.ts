export default function getDate(
	time: string,
	type: "long" | "short" | "numeric"
) {
	const day =
		new Date(time).getDate() < 10
			? `0${new Date(time).getDate()}`
			: new Date(time).getDate();
	const month = new Date(time).getMonth();
	const year = new Date(time).getFullYear();

	const monthsName = [
		"Styczeń",
		"Luty",
		"Marzec",
		"Kwiecień",
		"Maj",
		"Czerwiec",
		"Lipiec",
		"Sierpień",
		"Wrzesień",
		"Październik",
		"Listopad",
		"Grudzień",
	];

	if (type === "long") {
		return {
			day,
			month: monthsName[month],
			year,
		};
	} else if (type === "short") {
		return {
			day,
			month: monthsName[month].slice(0, 3),
			year,
		};
	} else {
		return {
			day,
			month: month + 1 < 10 ? `0${month + 1}` : month + 1,
			year,
		};
	}
}
