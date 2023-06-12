import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://github.com/AlexandrePaes.png"
			/>

			<div className={styles.profile}>
				<Avatar	src="https://github.com/LondonComputadores.png" />

				<strong>Alexandre Mib</strong>
				<p />
				<strong>Software Engineer</strong>
			</div>

			<footer>
				<a href="#">
					<PencilLine />
					Edit your profile
				</a>
			</footer>
		</aside>
	);
}