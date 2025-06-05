import styles from './guestbook.module.scss';
import PostListItem from '@components/main/post/list/postList.component';
import PostWritePage from '@components/main/post/write/postWrite.component';

export const GuestSection = () => {
  return (
    <section className={styles.archivingSection} id='ARCHIVING'>
      <h1 className={styles.title}>반가워요🤚 자유롭게 작성해보세요 !</h1>
      <PostListItem />
      <PostWritePage />
    </section>
  );
};
