import styles from './guestbook.module.scss';
import PostWritePage from '@components/m/main/post/write/postWrite.component';
import PostItem from '@components/m/main/post/list/components/postItem';

export function GuestSection() {
  return (
    <section className={styles.guestbookSection} id='GUESTBOOK'>
      <div className={styles.guestbookWrap}>
        <div className={styles.wrapLeft}>
          <h1 className={styles.title}>반가워요🤚<br />자유롭게 작성해보세요 !</h1>
          <div className={styles.write_detail}><PostWritePage /></div>
        </div>
      <PostItem />
      </div>
    </section>
  );
};