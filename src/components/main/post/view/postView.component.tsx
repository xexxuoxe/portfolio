'use client';

import { motion } from 'framer-motion';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import { useLoader } from '../hooks/useLoader';
import { usePostActions } from '../hooks/useDelete';
import PostViewButtons from './components/actionButtons'; 
import styles from './postView.module.scss';

interface PostViewItemProps {
  post: {
    id: string;
    title: string;
    contents: string;
    tags: string[];
  };
}

export default function PostViewItem({ post }: PostViewItemProps) {
  const { showContent, handleLoaderComplete } = useLoader();
  const { handleDelete } = usePostActions(post.id);

  return (
    <>
      <Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
      <motion.div
        className={styles.board_view}
        initial={{ display: 'none', y: '100%' }}
        animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <div className={styles.board_detail}>
          <div className={styles.board_cont}>
            <FadeInMotion delay={0} initialX={0} initialY={100}>
              <div className={styles.view_tags}>
                {post.tags.map((item, index) => (
                  <div key={index}>
                    <h1>{item}</h1>
                  </div>
                ))}
              </div>
            </FadeInMotion>
            <FadeInMotion delay={0.3} initialX={0} initialY={100}>
              <div className={styles.view_title}>
                <h1>{post.title}</h1>
              </div>
            </FadeInMotion>
            <FadeInMotion delay={0.6} initialX={0} initialY={100}>
              <div className={styles.view_contents}>
                <div>{post.contents}</div>
              </div>
            </FadeInMotion>
          </div>
        </div>

        <PostViewButtons postId={post.id} handleDelete={handleDelete} />
      </motion.div>
    </>
  );
}