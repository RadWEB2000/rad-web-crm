"use client";
import { createContext, useState } from "react";
import { iGoogleSearchConsoleData } from "ts/interface";

type tDataExplorerContext = {
	filter: {
		queries: any;
		pages: any;
		filtered: "Strony" | "Zapytania";
	};
	data: iGoogleSearchConsoleData[];
	sort: {
		name: {
			handle: any;
			direction: "asc" | "des";
		};
		clicks: {
			handle: any;
			direction: "asc" | "des";
		};
		views: {
			handle: any;
			direction: "asc" | "des";
		};
		ctr: {
			handle: any;
			direction: "asc" | "des";
		};
		position: {
			handle: any;
			direction: "asc" | "des";
		};
		sorted: "name" | "clicks" | "views" | "ctr" | "position";
	};
};

type tDataExplorerProvider = {
	children: JSX.Element | React.ReactNode;
	queries: iGoogleSearchConsoleData[];
	pages: iGoogleSearchConsoleData[];
};

export const DataExplorerContext = createContext<tDataExplorerContext>({
	filter: {
		queries: () => {},
		pages: () => {},
		filtered: "Zapytania",
	},
	data: [],
	sort: {
		name: {
			handle: () => {},
			direction: "des",
		},
		clicks: {
			handle: () => {},
			direction: "des",
		},
		views: {
			handle: () => {},
			direction: "des",
		},
		ctr: {
			handle: () => {},
			direction: "des",
		},
		position: {
			handle: () => {},
			direction: "des",
		},
		sorted: "name",
	},
});

type tDirectionSort = {
	click: "asc" | "des";
	ctr: "asc" | "des";
	name: "asc" | "des";
	position: "asc" | "des";
	views: "asc" | "des";
};

export default function DataExplorerProvider({
	children,
	pages,
	queries,
}: tDataExplorerProvider) {
	const [dataFilter, setDataFilter] = useState<"pages" | "queries">("queries");
	const [dataSort, setDataSort] = useState<
		"name" | "clicks" | "views" | "ctr" | "position"
	>("views");

	const [directionSort, setDirectionSort] = useState<tDirectionSort>({
		ctr: "asc",
		click: "asc",
		name: "asc",
		position: "asc",
		views: "asc",
	});

	function getDataFiltered() {
		if (dataFilter === "pages") {
			return pages;
		} else if (dataFilter === "queries") {
			return queries;
		} else return queries;
	}

	function handleClickSort() {
		setDataSort("clicks");
		if (directionSort.click == "asc") {
			setDirectionSort({
				...directionSort,
				click: "des",
			});
		} else {
			setDirectionSort({
				...directionSort,
				click: "asc",
			});
		}
	}

	function handleCtrSort() {
		setDataSort("ctr");
		if (directionSort.ctr == "asc") {
			setDirectionSort({
				...directionSort,
				ctr: "des",
			});
		} else {
			setDirectionSort({
				...directionSort,
				ctr: "asc",
			});
		}
	}

	function handleNameSort() {
		setDataSort("name");
		if (directionSort.name == "asc") {
			setDirectionSort({
				...directionSort,
				name: "des",
			});
		} else {
			setDirectionSort({
				...directionSort,
				name: "asc",
			});
		}
	}

	function handleViewsSort() {
		setDataSort("views");
		if (directionSort.views == "asc") {
			setDirectionSort({
				...directionSort,
				views: "des",
			});
		} else {
			setDirectionSort({
				...directionSort,
				views: "asc",
			});
		}
	}

	function handlePositionSort() {
		setDataSort("position");
		if (directionSort.position == "asc") {
			setDirectionSort({
				...directionSort,
				position: "des",
			});
		} else {
			setDirectionSort({
				...directionSort,
				position: "asc",
			});
		}
	}

	function getDataSorted() {
		if (dataSort === "clicks") {
			if (directionSort.click === "asc") {
				return getDataFiltered().sort((a, b) => b.clicks - a.clicks);
			} else {
				return getDataFiltered().sort((a, b) => a.clicks - b.clicks);
			}
		} else if (dataSort === "ctr") {
			if (directionSort.ctr === "asc") {
				return getDataFiltered().sort((a, b) => b.ctr - a.ctr);
			} else {
				return getDataFiltered().sort((a, b) => a.ctr - b.ctr);
			}
		} else if (dataSort === "name") {
			if (directionSort.name === "asc") {
				return getDataFiltered().sort((a, b) =>
					a.keys[0].localeCompare(b.keys[0])
				);
			} else {
				return getDataFiltered().sort((a, b) =>
					b.keys[0].localeCompare(a.keys[0])
				);
			}
		} else if (dataSort === "position") {
			if (directionSort.position === "asc") {
				return getDataFiltered().sort((a, b) => b.position - a.position);
			} else {
				return getDataFiltered().sort((a, b) => a.position - b.position);
			}
		} else if (dataSort === "views") {
			if (directionSort.views === "asc") {
				return getDataFiltered().sort((a, b) => b.impressions - a.impressions);
			} else {
				return getDataFiltered().sort((a, b) => a.impressions - b.impressions);
			}
		} else {
			if (directionSort.click === "asc") {
				return getDataFiltered().sort((a, b) => b.clicks - a.clicks);
			} else {
				return getDataFiltered().sort((a, b) => a.clicks - b.clicks);
			}
		}
	}

	return (
		<DataExplorerContext.Provider
			value={{
				filter: {
					filtered: dataFilter === "pages" ? "Strony" : "Zapytania",
					pages: () => setDataFilter("pages"),
					queries: () => setDataFilter("queries"),
				},
				data: getDataSorted(),
				sort: {
					clicks: {
						direction: directionSort.click,
						handle: () => handleClickSort(),
					},
					ctr: {
						direction: directionSort.ctr,
						handle: () => handleCtrSort(),
					},
					name: {
						direction: directionSort.name,
						handle: () => handleNameSort(),
					},
					position: {
						direction: directionSort.position,
						handle: () => handlePositionSort(),
					},
					sorted: dataSort,
					views: {
						direction: directionSort.views,
						handle: () => handleViewsSort(),
					},
				},
			}}
		>
			{children}
		</DataExplorerContext.Provider>
	);
}
