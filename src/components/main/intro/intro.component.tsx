'use client'
import { useIntroAnimation } from './intro.hook';
import styles from './intro.module.scss';

export default function IntroItemPage() {
	const { followRef, contentRefs, loaderRef, mainViewRef, handleIndexEffect } = useIntroAnimation();

	return (
		<>
			<div className={styles.main_view} ref={mainViewRef} onClick={handleIndexEffect}>
				<div className={styles.intro_txt}>
					<div ref={(el) => (contentRefs.current[0] = el)} className={`${styles.intro_content} ${styles.intro_content01}`}>
						<h1 className={styles.title}>Portfolio</h1>
					</div>
					<div ref={(el) => (contentRefs.current[1] = el)} className={`${styles.intro_content} ${styles.intro_content02}`}>
						<h1 className={styles.title}>Lee Eun Seo</h1>
					</div>
					<div ref={(el) => (contentRefs.current[2] = el)} className={`${styles.intro_content} ${styles.intro_content03}`}>
						<h1 className={styles.title}>Projects</h1>
					</div>
				</div>
				<div className={styles.follow} ref={followRef}>
					VIEW<br />PROJECT
				</div>
			</div>
			<div className={styles.loader_window} ref={loaderRef}></div>
		</>
	);
}
