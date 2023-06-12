import styles from './Avatar.module.css';

//V2
export function Avatar({hasBorder=true, src}) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
		 />
	);
}

// V1
// export function Avatar(props) {
// 	const hasBorder = props.hasBorder != false;

// 	return (
// 		<img
// 			className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
// 			src={props.src}
// 		 />
// 	);
// }




// V1
//     return (
// 			<img className={styles.avatar} src={props.src} />
//     );
// }