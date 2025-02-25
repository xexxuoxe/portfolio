'use client';

import { motion } from 'framer-motion';
import { useLoader } from '../hooks/useLoader';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import PostWriteButtons from './components/actionButtons';
import { usePost, PostData } from '../hooks/useCreate';
import styles from './postWrite.module.scss';

interface PostWriteProps {
  post?: PostData | null;
}

export default function PostWritePage({ post }: PostWriteProps) {
  const { showContent, handleLoaderComplete } = useLoader();
  const {
    title,
    contents,
    tags,
    handleSubmit,
    handleTitleChange,
    handleContentsChange,
    handleTagsChange
  } = usePost(post);

  return (
    <>
      <Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
      <motion.div
        className={styles.board_write}
        initial={{ display: 'none', y: '100%' }}
        animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <div className={styles.info_cont}>
          <FadeInMotion delay={0} initialX={100} initialY={0}>
            <h3>글을 자유롭게 작성해보세요😀</h3>
          </FadeInMotion>
        </div>
        <div className={styles.write_detail}>
          <div className={styles.input_group}>
            <label htmlFor=''>Title</label>
            <input
              id='title'
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor='contents'>Contents</label>
            <textarea
              id='contents'
              value={contents}
              onChange={handleContentsChange}
              placeholder="내용을 입력해주세요."
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor='tags'>Tags <span>(태그는 쉼표로 구분해주세요)</span></label>
            <input
              id='tags'
              type="text"
              value={tags.join(', ')}
              onChange={handleTagsChange}
              placeholder="쉼표로 구분해서 작성해주세요."
            />
          </div>
        </div>
        <PostWriteButtons postId={post?.id || ''}  handleSubmit={handleSubmit}
        />
      </motion.div>
    </>
  );
}