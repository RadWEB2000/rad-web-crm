export type uScore = null | number | string;
export type uAuditLighthouseResult = {
	id: string;
	title: string;
	description: string;
	score: uScore;
	scoreDisplayMode: string;
	displayValue?: string;
	details: any | any[];
	warnings?: any[];
	numericValue?: number;
	numericUnit?: string;
};

export type uAuditNamesLighthouseResult =
	| "unused-javascript"
	| "uses-rel-preconnect"
	| "total-blocking-time"
	| "uses-rel-preload"
	| "uses-text-compression"
	| "server-response-time"
	| "no-document-write"
	| "redirects"
	| "modern-image-formats"
	| "non-composited-animations"
	| "performance-budget"
	| "layout-shift-elements"
	| "largest-contentful-paint-element"
	| "uses-long-cache-ttl"
	| "font-display"
	| "script-treemap-data"
	| "render-blocking-resources"
	| "network-rtt"
	| "uses-responsive-images"
	| "unsized-images"
	| "duplicated-javascript"
	| "cumulative-layout-shift"
	| "uses-passive-event-listeners"
	| "offscreen-images"
	| "total-byte-weight"
	| "unused-css-rules"
	| "user-timings"
	| "screenshot-thumbnails"
	| "third-party-summary"
	| "mainthread-work-breakdown"
	| "dom-size"
	| "largest-contentful-paint"
	| "efficient-animated-content"
	| "final-screenshot"
	| "bootup-time"
	| "diagnostics"
	| "first-meaningful-paint"
	| "first-contentful-paint"
	| "third-party-facades"
	| "critical-request-chains"
	| "legacy-javascript"
	| "long-tasks"
	| "timing-budget"
	| "prioritize-lcp-image"
	| "viewport"
	| "main-thread-tasks"
	| "speed-index"
	| "network-requests"
	| "lcp-lazy-loaded"
	| "unminified-javascript"
	| "unminified-css"
	| "max-potential-fid"
	| "interactive"
	| "network-server-latency"
	| "metrics"
	| "uses-optimized-images";

export type uCategoryGroupsNamesLighthouseResult =
	| "a11y-navigation"
	| "diagnostics"
	| "best-practices-ux"
	| "best-practices-trust-safety"
	| "a11y-language"
	| "seo-crawl"
	| "a11y-tables-lists"
	| "pwa-optimized"
	| "a11y-aria"
	| "best-practices-browser-compat"
	| "best-practices-general"
	| "seo-mobile"
	| "budgets"
	| "a11y-color-contrast"
	| "seo-content"
	| "metrics"
	| "pwa-installable"
	| "a11y-names-labels"
	| "a11y-best-practices"
	| "a11y-audio-video"
	| "load-opportunities";

export type uCategoryGroupsLighthouseResult = {
	title: string;
	description?: string;
};

export type uFullPageScreenshotNamesLighthouseResult =
	| "1-39-META"
	| "1-30-META"
	| "1-18-IMG"
	| "1-21-LINK"
	| "1-16-IMG"
	| "1-22-LINK"
	| "1-9-IMG"
	| "1-41-META"
	| "1-8-IMG"
	| "1-28-META"
	| "1-11-IMG"
	| "page-0-IMG"
	| "1-32-META"
	| "1-7-IMG"
	| "1-46-META"
	| "1-2-IMG"
	| "1-31-META"
	| "1-20-IMG"
	| "1-13-IMG"
	| "1-14-IMG"
	| "1-43-META"
	| "1-26-LINK"
	| "1-34-META"
	| "1-19-IMG"
	| "1-42-META"
	| "1-36-META"
	| "1-47-META"
	| "1-3-IMG"
	| "1-15-IMG"
	| "1-27-LINK"
	| "1-35-META"
	| "1-24-LINK"
	| "1-38-META"
	| "1-49-META"
	| "1-44-META"
	| "1-45-META"
	| "1-25-LINK"
	| "1-23-LINK"
	| "1-17-IMG"
	| "1-10-IMG"
	| "1-37-META"
	| "1-0-path"
	| "1-12-IMG"
	| "1-48-META"
	| "1-4-IMG"
	| "1-40-META"
	| "1-6-IMG"
	| "1-29-META"
	| "1-1-BODY"
	| "1-33-META"
	| "page-1-SECTION"
	| "1-5-IMG";

export type uFullPageScreenshotLighthouseResult = {
	bottom: number;
	height: number;
	right: number;
	width: number;
	top: number;
	left: number;
};

export type tCategoryNamesAuditLighthouseResult =
	| "performance"
	| "accessibility"
	| "best-practices"
	| "seo";
export type tCategoryAuditLighthouseResult = {
	id: string;
	title: string;
	score: number;
	auditRefs: any;
};
