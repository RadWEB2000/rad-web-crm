import Image from "next/image";
import styles from "views/DashboardView/ClientView/PageSpeedInsights/Preview/Preview.module.scss";
type tPreview = {
	alt: string;
	src: string;
	title: string;
};

export default function Preview(props: tPreview) {
	const { alt, src, title } = props;
	return (
		<figure className={styles.wrapper}>
			<Image
				alt={alt}
				fill
				loading="eager"
				src={src}
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
				title={title}
			/>
		</figure>
	);
}
