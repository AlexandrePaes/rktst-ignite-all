import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {

	const [comments, setComments] = useState([
		'Post muito bacana, hein?!'
	])

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	})

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment() {
		event.preventDefault()

		const newCommentText = event.target.comment.value

		setComments([...comments, newCommentText]);

		event.target.comment.value = '';
	}

	return (
		<article className={styles.article}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl}/>
						<div className={styles.authorInfo}>
							<strong>{author.name}</strong>
							<span>{author.role}</span>
						</div>
				</div>

				<div className={styles.time}>
					{/* <time title='11 de Maio às 7:30' dateTime='2022-05-11 07:30:00'>
						{publishedDateFormatted}
					</time> */}
					{/* <time title={publishedDateFormatted} dateTime='2022-05-11 07:30:00'> */}
					
					<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
						{publishedDateRelativeToNow}
					</time>
				</div>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					if (line.type === 'paragraph') {
						return <p>{line.content}</p>
					} else if (line.type === 'link') {
						return <p><a href="#">{line.content}</a></p>;
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Leave your feedback:</strong>
				<textarea name="comment" placeholder='Leave your feedback' />
				<button type='submit'>Send</button>
			</form>

			<div className={styles.commentList}>
				{/* <Comment />
				<Comment />
				<Comment /> */}

				{comments.map(comment => {
					return <Comment content={comment} />
				})}
			</div>

		</article>
	)
}