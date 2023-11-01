import {
	tCategoryAuditLighthouseResult,
	tCategoryNamesAuditLighthouseResult,
	uAuditLighthouseResult,
	uAuditNamesLighthouseResult,
	uCategoryGroupsLighthouseResult,
	uCategoryGroupsNamesLighthouseResult,
	uFullPageScreenshotLighthouseResult,
	uFullPageScreenshotNamesLighthouseResult,
	uScore,
} from "ts/union";

export interface iMenu {
	icon: JSX.Element | React.ReactNode;
	label: string;
	uri: string;
}

export interface iGoogleSearchConsoleResponseCharts {
	keys: Date[];
	clicks: number;
	impressions: number;
	ctr: number;
	position: number;
}

export interface iGoogleSearchConsoleData {
	keys: string[];
	clicks: number;
	impressions: number;
	ctr: number;
	position: number;
}

export interface iGetGooglePageSpeedData {
	captchaResult: string;
	kind: string;
	id: string;
	loadingExperience: { initial_url: string };
	lighthouseResult: {
		requestedUrl: string;
		finalUrl: string;
		mainDocumentUrl: string;
		finalDisplayedUrl: string;
		lighthouseVersion: string;
		userAgent: string;
		fetchTime: Date;
		environment: {
			networkUserAgent: string;
			hostUserAgent: string;
			benchmarkIndex: number;
		};
		runWarnings: any;
		configSettings: {
			emulatedFormFactor: string;
			formFactor: string;
			locale: string;
			onlyCategories: any[];
			channel: string;
		};
		audits: {
			[key in uAuditNamesLighthouseResult]: uAuditLighthouseResult;
		};
		categories: {
			[key in tCategoryNamesAuditLighthouseResult]: tCategoryAuditLighthouseResult;
		};
		categoryGroups: {
			[key in uCategoryGroupsNamesLighthouseResult]: uCategoryGroupsLighthouseResult;
		};
		timing: { total: number };
		i18n: {
			rendererFormattedStrings: {
				varianceDisclaimer: string;
				opportunityResourceColumnLabel: string;
				opportunitySavingsColumnLabel: string;
				errorMissingAuditInfo: string;
				errorLabel: string;
				warningHeader: string;
				passedAuditsGroupTitle: string;
				notApplicableAuditsGroupTitle: string;
				manualAuditsGroupTitle: string;
				toplevelWarningsMessage: string;
				crcLongestDurationLabel: string;
				crcInitialNavigation: string;
				lsPerformanceCategoryDescription: string;
				labDataTitle: string;
				warningAuditsGroupTitle: string;
				snippetExpandButtonLabel: string;
				snippetCollapseButtonLabel: string;
				thirdPartyResourcesLabel: string;
				runtimeDesktopEmulation: string;
				runtimeMobileEmulation: string;
				runtimeNoEmulation: string;
				runtimeSettingsBenchmark: string;
				runtimeSettingsCPUThrottling: string;
				runtimeSettingsDevice: string;
				runtimeSettingsNetworkThrottling: string;
				runtimeSettingsUANetwork: string;
				runtimeUnknown: string;
				dropdownCopyJSON: string;
				dropdownDarkTheme: string;
				dropdownPrintExpanded: string;
				dropdownPrintSummary: string;
				dropdownSaveGist: string;
				dropdownSaveHTML: string;
				dropdownSaveJSON: string;
				dropdownViewer: string;
				footerIssue: string;
				throttlingProvided: string;
				calculatorLink: string;
				runtimeSettingsAxeVersion: string;
				viewTreemapLabel: string;
				showRelevantAudits: string;
			};
		};
		entities: [
			{
				name: string;
				isFirstParty: boolean;
				isUnrecognized: boolean;
				origins: any;
			},
			{
				name: string;
				homepage: string;
				category: string;
				origins: any;
			},
			{ name: string; isUnrecognized: boolean; origins: any },
			{
				name: string;
				homepage: string;
				category: string;
				origins: any;
			},
			{
				name: string;
				homepage: string;
				category: string;
				origins: any;
			},
			{
				name: string;
				homepage: string;
				category: string;
				origins: any;
			}
		];
		fullPageScreenshot: {
			nodes: {
				[key in uFullPageScreenshotNamesLighthouseResult]: uFullPageScreenshotLighthouseResult;
			};
			screenshot: {
				data: string;
				width: number;
				height: number;
			};
		};
		analysisUTCTimestamp: Date;
	};
}
