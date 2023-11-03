"use client";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { GoFile, GoFileDirectoryFill } from "react-icons/go";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import getDate from "lib/functions/getDate2";
import styles from "views/DashboardView/ClientView/Details/Managment/Managment.module.scss";
import { useState } from "react";
type tManagment = {
	cooperation: {
		start: string;
		end?: string;
	};
	specialists: {
		label: string;
		uri: string;
	}[];
};

export default function Managment(props: tManagment) {
	const [isOpenExpertsMenu, setIsOpenExpertsMenu] = useState(false);

	const {
		cooperation: { start, end },
		specialists,
	} = props;

	const cooperation = {
		start: {
			day: getDate(start, "short").day,
			month: getDate(start, "short").month,
			year: getDate(start, "short").year,
		},
		end: {
			day: getDate(end ? end : start, "short").day,
			month: getDate(end ? end : start, "short").month,
			year: getDate(end ? end : start, "short").year,
		},
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				<button className={styles.button}>
					<span className={styles.icon}>
						<IoMdSettings />
					</span>
					<p className={styles.label}>Konfiguracja</p>
				</button>
				<Link className={styles.button} href="#">
					<span className={styles.icon}>
						<GoFileDirectoryFill />
					</span>
					<p className={styles.label}>Dokumenty</p>
				</Link>
				<button className={styles.button}>
					<span className={styles.icon}>
						<GoFile />
					</span>
					<p className={styles.label}>Usługi</p>
				</button>
			</div>
			<div className={styles.colaboration}>
				<div className={styles.experts}>
					<button onClick={() => setIsOpenExpertsMenu(!isOpenExpertsMenu)}>
						<span>
							<FaUserFriends />
						</span>
						<p>Specjaliści</p>
					</button>
					{isOpenExpertsMenu && (
						<ul>
							{specialists.map(({ label, uri }) => {
								return (
									<li key={uri} onClick={() => setIsOpenExpertsMenu(false)}>
										<Link href="#">{label}</Link>
									</li>
								);
							})}
						</ul>
					)}
				</div>
				<p className={styles.time}>
					<i>
						<MdOutlineCalendarToday />
					</i>
					<span>{`${cooperation.start.day} ${cooperation.start.month} ${cooperation.start.year}`}</span>
					{end && (
						<>
							<span>-</span>
							<span>
								{`${cooperation.end.day} ${cooperation.end.month} ${cooperation.end.year}`}
							</span>
						</>
					)}
				</p>
			</div>
		</div>
	);
}
