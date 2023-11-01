import { iGetGooglePageSpeedData } from "ts/interface";

export default async function getGooglePageSpeedData(
	url: string,
	device: "desktop" | "mobile"
) {
	const data: iGetGooglePageSpeedData = await fetch(
		`${process.env.PSI_API_URL}url=${url}&key=${process.env.GOOGLE_API_KEY}&strategy=${device}&category=performance&category=accessibility&category=best-practices&category=seo`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});

	return data;
}
