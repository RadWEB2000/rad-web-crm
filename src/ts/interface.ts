export interface iMenu {
	icon: JSX.Element | React.ReactNode;
	label: string;
	submenu?: {
		label: string;
		uri: string;
	}[];
	uri: string;
}
