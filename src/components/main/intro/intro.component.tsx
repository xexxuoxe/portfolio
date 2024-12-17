/*
	evnet component
	src/component/main/evnet/evnet.component.tsx
*/
'use client'
import styles from './intro.module.scss';

export default function IntroItem() {

	return (
		<div id={styles.intro} className={styles.main_view}>
			<div className={styles.intro_txt}>
				<div className={`${styles.intro_content} ${styles.intro_content01}`}>
					<h1 className={styles.title}>test</h1>
					{/* Portfolio */}
				</div>
				<div className={`${styles.intro_content} ${styles.intro_content02}`}>
					<h1 className={styles.title}>Lee Eun Seo</h1>
				</div>
				<div className={`${styles.intro_content} ${styles.intro_content03}`}>
					<h1 className={styles.title}>Projects</h1>
				</div>
			</div>
			<div id={styles.follow}></div>
		</div>
    )
}