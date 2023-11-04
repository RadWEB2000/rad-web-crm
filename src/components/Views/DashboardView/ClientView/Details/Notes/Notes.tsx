"use client";
import styles from "views/DashboardView/ClientView/Details/Notes/Notes.module.scss";
export default function Notes() {
	return (
		<>
			<div className={styles.wrapper}>
				<ul className={styles.notes}>
					<li className={styles.note}>
						<div className={styles.date}>
							<p>08:52 | 2023-10-09</p>
						</div>
						<div className={styles.content}>
							<p>
								Sapiente voluptate ipsum. Perspiciatis aut ad. Quia animi
								quibusdam similique sit aut et. Et sit eos architecto id modi
								sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Hic, optio facere quisquam vitae quasi, repellat magni nobis
								dolorum nihil voluptatum labore ad eligendi consequatur pariatur
								distinctio totam error cumque deleniti. Animi officiis
								recusandae maiores, voluptas laborum facere magni dolorem amet
								id veritatis nihil odio minima ut officia ipsa. Autem, eligendi
								dolores obcaecati repellendus iure eos reprehenderit similique!
								Fugiat, facilis. Tempora! Suscipit nostrum sapiente vitae
								voluptatum eum blanditiis natus voluptates! Quis obcaecati,
								earum, culpa provident cum rerum sit ea quaerat animi pariatur
								suscipit maiores vitae aut? Velit ipsum nisi perspiciatis unde.
								Blanditiis ducimus voluptas dolor libero aperiam suscipit est
								vel, eligendi eius accusamus? Quidem necessitatibus, eum, eius
								veniam aut numquam perspiciatis est officiis beatae cumque
								molestiae qui illo, excepturi unde laborum?
							</p>
						</div>
						<div className={styles.author}>
							<p>Radosław Adamczyk</p>
						</div>
					</li>
					<li className={styles.note}>
						<div className={styles.date}>
							<p>2023-10-09</p>
						</div>
						<div className={styles.content}>
							<p>
								Sapiente voluptate ipsum. Perspiciatis aut ad. Quia animi
								quibusdam similique sit aut et. Et sit eos architecto id modi
								sit.
							</p>
						</div>
						<div className={styles.author}>
							<p>Radosław Adamczyk</p>
						</div>
					</li>
					<li className={styles.note}>
						<div className={styles.date}>
							<p>2023-10-09</p>
						</div>
						<div className={styles.content}>
							<p>
								Sapiente voluptate ipsum. Perspiciatis aut ad. Quia animi
								quibusdam similique sit aut et. Et sit eos architecto id modi
								sit.
							</p>
						</div>
						<div className={styles.author}>
							<p>Radosław Adamczyk</p>
						</div>
					</li>
					<li className={styles.note}>
						<div className={styles.date}>
							<p>2023-10-09</p>
						</div>
						<div className={styles.content}>
							<p>
								Sapiente voluptate ipsum. Perspiciatis aut ad. Quia animi
								quibusdam similique sit aut et. Et sit eos architecto id modi
								sit.
							</p>
						</div>
						<div className={styles.author}>
							<p>Radosław Adamczyk</p>
						</div>
					</li>
					<li className={styles.note}>
						<div className={styles.date}>
							<p>2023-10-09</p>
						</div>
						<div className={styles.content}>
							<p>
								Sapiente voluptate ipsum. Perspiciatis aut ad. Quia animi
								quibusdam similique sit aut et. Et sit eos architecto id modi
								sit.
							</p>
						</div>
						<div className={styles.author}>
							<p>Radosław Adamczyk</p>
						</div>
					</li>
				</ul>
				<button>dodaj notkę</button>
			</div>
			<div className={styles.modal}>
				<form onSubmit={(e) => e.preventDefault()}>
					<div>
						<label htmlFor="title">Tytuł</label>
						<input type="text" name="title" />
					</div>
					<div>
						<label htmlFor="date">Data</label>
						<input type="date" name="date" />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea name="message" />
					</div>
					<button>dodaj</button>
				</form>
			</div>
		</>
	);
}
