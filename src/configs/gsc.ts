const searchConsole = require("@googleapis/searchconsole");

export default async function getGoogleSearchConsoleData(url: string) {
	const auth = new searchConsole.auth.GoogleAuth({
		credentials: {
			// private_key: `${process.env.GSC_PRIVATE_KEY.replaceAll("\\n", "\n")}`,
			private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDfT8pAqfv9bApT\nvuAO1Gh/tcOxrzy0LD7weuwFBfVJOTFH3MFkqUgh/cfhV+kmk66Rm5B8pyX4Ts+O\nfGIwBuhqP2BXYOYquAUZ/utnhrGryKtXOPxPtlbpghPEyLH1qd2eWBB4fIc3HhTR\nJ/AlkVAT5ogbdniMq3PJgBMxT5h+peWT98H23QVnQguE7YUFvnj7sUK4HqNn2QdF\nEwJn/EPAG4RX0yZlLtPsAsuiuyY8t1LqklGLlIBAbnYEbDMd51XZK18s79HLLDsi\nQoIUaNpnU1sDU/vZ92+g+VzzUcrD6IOJd9jEcf7gfTQuLJ2SX5QsYDVpvdwR3lM4\n+5RTdjbDAgMBAAECggEALGE+mEBQCKrOmJsgC0JybCMS+76QSVxbu84qFst61m0L\n2rTIKHmuELdPYHzopJaIBH8OpX9Qf/slq7MTjmjpCqiCvIrQ41+EAAkV/pKZv8KX\nLrPwDOV3e1uzExIxr9ls5lmpGFDjTHRpfbG6u7SX3gScOxz90zMFxV9zMQMZEt4F\nZYA3qm0aZ4LoYsYw9CCGi2ARtYlqg8Gsh7jQY7KsZSZC71+fudZSE02DMSg738Ap\n089ueosUlplN1kjVssW3/jxp0AJPSv091YFJMrr8kfkp/y+12A0kWLWJgNq1XBy1\nnb1IGwfvjunTsj9JJiuBk0mJCcME5JUNU6fYuc+6rQKBgQD0fydI66l7keTCDaHH\nD0W8PUw/1gGlEYC/xjiuFzZ/3bOaqzFvcCz/sZA05rUtmlTL+j4wV2MygseJ3kHt\non9AD53MsdzXXYNw1PZBAP+qNzv5pQuKLxL6WKi3HuIpwt8ftPwpd3MKjMdMN2qX\nkd3+aVorWhHfRE7uwOObmUqu5QKBgQDp0Xkhoku/SKBm4ugsf2uLk/ntfwnWo9yL\nMzt2py0DMAqHaj6wgsobqbbfDXxsTkyFgSS+uL8dI8Dg5Qs57DMwBKX+Lu1fLOUB\n83OIAGQK34URMAUu37JRzsJjfFE82CcBhnQo6+DhTbzVGmw4ba2ltM+HYx38KYSz\np/Xr0ghMhwKBgAm/jBxvMPm5TmqiSoH6TOh9dS3SZYxkT0LWL2pZiJW+jCutibIM\nwe6L8Nj7HdwsnBbp6lLZGR5pcnU/xFcqNHKkbME9kjWQB+6Wvx7GYGsz+pMwjm47\nBEGxCUEL3S6XE3hbKfapSY/xHv0d9IUIjtZW8v5pf+7r9U21qR2KFh01AoGAQrEJ\n8Or+2geYIOCVwqNxhHVnszMqFjvU2yt4yYYzk5YvWqKWUPhtN2i4DXUmSSooL2g/\nl9rQQDqDeGI8SoAxtX+N7Strb1s50s2i5WbfIi7RIK7mu5D4ptbnoULDVSx+K7Qz\nC70D/p+SveH0fj/iaMJi80X1NoiNHkVJIsNctJ8CgYAuzDzPTii012+y+xyjsy12\npTkuPjQhvRAJi6M5BCsADnolW0On+Y1q0jAuj+w2IFP4wD4S+u9aiA8NEds+Asdp\nxpG4mzFuASvKKKDstk1OEfjlpwLAlF6NsaZtxFovbmURzxQzhHKVqJ1EGXkvfJNz\nQUVV4nSgb0dWz8ZlzT0LbQ==\n-----END PRIVATE KEY-----\n`,
			// client_email: process.env.CLIENT_EMAIL,
			client_email: "radweb-cms@radweb-cms-385017.iam.gserviceaccount.com",
		},
		scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
	});
	const client = searchConsole.searchconsole({
		version: "v1",
		auth,
	});
	const data = client.searchanalytics
		.query({
			startDate: "2020-01-01",
			siteUrl: url,
			endDate: new Date().toLocaleDateString("pl-PL"),
			dimensions: ["page"],
			rowLimit: 10,
		})
		.then((res) => {
			console.log("res", res);
			return res.data;
		});
	// .catch((err) => console.log(err));

	return data;
}
