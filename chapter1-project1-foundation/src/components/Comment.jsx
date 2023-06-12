import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/AlexandrePaes.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Alexandre Paes</strong>
							<time title='11 de Maio às 7:30' dateTime='2022-05-11 07:30:00'>Publicado há 1 hora</time>
						</div>

						<button title='Delete comment'>
							<Trash size={24}/>
						</button>
					</header>

					<p>Awesome!</p>

				</div>

				<footer>
					<button>
						<ThumbsUp />{' '} 
						Aplause <span>20</span>
					</button>
				</footer>

			</div>

		</div>

	)
}