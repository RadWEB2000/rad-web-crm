declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GSC_CLIENT_ID: string;
			GSC_CLIENT_KEY: string;
			GSC_PROJECT_ID: string;
			GSC_AUTH: string;
			GSC_AUTH_URI: string;
			GSC_TOKEN_URI: string;
			GSC_CLIENT_SECRET: string;
			GSC_CLIENT_EMAIL: string;
			GSC_PRIVATE_KEY: string;
			GSC_API_KEY: string;
			GSC_SECRET_KEY: string;
			GSC_AUTHORIZED_JAVASCRIPT_SOURCE: string;
			GSC_AUTHORIZED_URI_SOURCE: string;
		}
	}
}
