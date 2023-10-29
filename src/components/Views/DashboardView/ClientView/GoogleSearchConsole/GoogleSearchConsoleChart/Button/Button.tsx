import { motion } from 'framer-motion';
import styles from 'views/DashboardView/ClientView/GoogleSearchConsole/GoogleSearchConsoleChart/Button/Button.module.scss';
type tButton = {
	action: any;
	isActive: boolean;
	name: string;
	theme: 'clicks' | 'views' | 'ctr' | 'position';
};

export default function Button(props: tButton) {
	const { action, isActive, name, theme } = props;
	return (
		<motion.button
			className={styles.wrapper}
			data-active={isActive}
			data-theme={theme}
			onClick={action}
			whileHover={{
				scale: 1.02,
			}}
			whileTap={{
				scale: 0.87,
			}}
		>
			{name}
		</motion.button>
	);
}
