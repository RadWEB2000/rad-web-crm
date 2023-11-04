"use client";
import { useState } from "react";
import styles from "views/DashboardView/ClientView/Details/TrackedKeywords/TrackedKeywords.module.scss";
import { TfiTrash } from "react-icons/tfi";
type tTrackedKeywords = {
	keywords: string[];
	title: string;
};

export default function TrackedKeywords(props: tTrackedKeywords) {
	const { keywords, title } = props;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const [keywordsArea, setKeywordsArea] = useState("");
	function addKw() {
		const kArray = keywordsArea.split(",");
		[...kArray, ...keywords];
	}

	return (
		<>
			<div className={styles.wrapper}>
				<h2>{title}</h2>
				<ul>
					{keywords.map((item, index) => {
						function deleteKw() {
							keywords.splice(index, index + 1);
						}

						return (
							<li key={index}>
								<p>{item}</p>
								<button onClick={() => deleteKw()}>
									<TfiTrash />
								</button>
							</li>
						);
					})}
				</ul>
				<div>
					<button onClick={() => setIsOpenModal(!isOpenModal)}>dodaj kw</button>
				</div>
			</div>
			{isOpenModal && (
				<div className={styles.modal}>
					<div onClick={() => setIsOpenModal(false)}>
						<button>zamknij</button>
					</div>
					<textarea onInput={(e: any) => setKeywordsArea(e.target.value)} />
					<button onClick={() => addKw()}>dodaj</button>
				</div>
			)}
		</>
	);
}
