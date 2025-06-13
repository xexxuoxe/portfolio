'use client';

import { usePost, PostData } from '../hooks/useCreate';
import { useSession } from 'next-auth/react'
import UserInfoPage from '@components/m/main/guestbook/components/userInfo.component';
import WriteGuestButtons from './components/actionGuestButtons';
import styles from './postWrite.module.scss';

interface PostWriteProps {
  post?: PostData | null;
}

export default function PostWritePage({ post }: PostWriteProps) {
  const {
    title,
    contents,
    handleSubmit,
    handleTitleChange,
    handleContentsChange,
  } = usePost(post);

  const { data: session } = useSession();

  return (
    <>
      <UserInfoPage />
      <div className={styles.writeForm}>
        <textarea
          id='contents'
          cols={200}
          wrap="hard"
          value={contents}
          maxLength={100}
          onChange={handleContentsChange}
          placeholder="어떤 점이 좋은지, 또 어떤 부분을 더 보완하면 좋을지 의견을 자유롭게 적어주세요!"
          className={!session?.user ? styles.off : styles.on}
          readOnly={!session?.user ? true : false}
        />
        <WriteGuestButtons postId={post?.id || ''} handleSubmit={handleSubmit} />
      </div></>
  );
}