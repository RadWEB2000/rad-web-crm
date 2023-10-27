import "css/Global.scss";
import "css/Dashboard.scss";
import Navigation from "layout/Navigation";
import { menu } from "data/menu";
import { settings } from "data/settings";
import Topbar from "layout/Topbar";

export const metadata = {
	title: "DASHBOARD",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body>
				<div className="nav">
					<Navigation menu={menu} settings={settings} />
				</div>
				<div className="box">
					<Topbar
						account={{
							menu: settings,
							user: "Radosław",
						}}
					/>
					<div className="main">{children}</div>
				</div>
			</body>
		</html>
	);
}
