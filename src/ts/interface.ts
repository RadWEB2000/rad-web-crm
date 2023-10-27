export interface iMenu {
	icon: JSX.Element | React.ReactNode;
	label: string;
	uri: string;
}

export interface iGoogleSearchConsoleResponseData {
	config: {
		url: string;
		method: string;
		userAgentDirectives: any[]; // Jeśli znasz dokładny typ obiektu wewnątrz tej tablicy, zastąp 'any' odpowiednim typem
		paramsSerializer: Function;
		headers: {
			"x-goog-api-client": string;
			"Accept-Encoding": string;
			"User-Agent": string;
			Authorization: string;
		};
		params: {
			startDate: string;
			endDate: string;
			dimensions: any[]; // Jeśli znasz dokładny typ obiektu wewnątrz tej tablicy, zastąp 'any' odpowiednim typem
			rowLimit: number;
		};
		validateStatus: Function;
		retry: boolean;
		responseType: string;
		errorRedactor: Function;
	};
	data: {
		rows: {
			keys: string[];
			clicks: number;
			impressions: number;
			ctr: number;
			position: number;
		}[]; // Jeśli znasz dokładny typ obiektu wewnątrz tej tablicy, zastąp 'any' odpowiednim typem
		responseAggregationType: string;
	};
	headers: {
		"alt-svc": string;
		"cache-control": string;
		connection: string;
		"content-encoding": string;
		"content-type": string;
		date: string;
		server: string;
		"transfer-encoding": string;
		vary: string;
		"x-content-type-options": string;
		"x-frame-options": string;
		"x-xss-protection": string;
	};
	status: 200 | 300 | 301 | 302 | 400 | 402 | 404;
	statusText: string;
	request: {
		responseURL: string;
	};
}

export interface iGoogleSearchConsoleResponseCharts {
	keys: Date[];
	clicks: number;
	impressions: number;
	ctr: number;
	position: number;
}
