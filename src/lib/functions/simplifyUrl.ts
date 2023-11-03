export default function simplifyUrl(url: string) {
	let removeProtocol = url.replace(/^https?:\/\//, "");
	let simplifiedUrl = removeProtocol.replace(/^www\./, "");
	return simplifiedUrl;
}
