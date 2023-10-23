import getGoogleSearchConsoleData from "configs/gsc";

export default async function ClientPage() {
	const data2 = getGoogleSearchConsoleData("https://rad-web.pl");
	console.log("data2", data2);

	return (
		<div>
			<div>
				<h1>klient</h1>
			</div>
		</div>
	);
}
