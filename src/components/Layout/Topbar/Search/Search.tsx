"use client";
import styles from "topbar/Search/Search.module.scss";
import { useState } from "react";
import { websites } from "data/websites";
import Link from "next/link";
export default function Search() {
	const [searchValue, setSearchValue] = useState<string>("");

	const getWebsites = websites.filter((item) =>
		item.uri.includes(searchValue.toLowerCase())
	);
	console.log(getWebsites);

	return (
		<div className={styles.wrapper}>
			<form className={styles.form}>
				<input
					className={styles.field}
					id="website"
					name="website"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Wpisz adres URL"
					type="url"
				/>
			</form>
			{searchValue.length >= 3 && getWebsites.length >= 1 && (
				<ul className={styles.list}>
					{getWebsites.map(({ id, uri }) => {
						return (
							<li className={styles.item} key={id}>
								<Link href="#">{uri}</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
