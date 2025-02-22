'use client';
import Link from 'next/link';
import React, { useState } from 'react';
// animation
import { motion } from 'framer-motion';
// component
import LinkButton from '@components/_utiles/link/link.component';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import Table from '@components/_utiles/table/table.component';
// hook
import { Post, usePostHook } from './postList.hook';
// style
import styles from './postList.module.scss';

export default function PostListItem() {
  const [isLoaderDone, setIsLoaderDone] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const { postData } = usePostHook();

  // loader
  const handleLoaderComplete = (): void => {
    setIsLoaderDone(true);
    setShowContent(true);
  };

  const posts = postData;

  const columns: Column<Post>[] = [
    {
      key: 'title',
      header: '제목',
      render: (post: Post) => (
        <Link href={`/post/view/${post.id}`}>{post.title}</Link>
      ),
    },
    { key: 'author', header: '작성자' },
    { key: 'date', header: '작성일' },
  ];

  return (
    <>
      {/* loader */}
      <Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
      {/* board_view container */}
      <motion.div
        className={styles.board_view}
        initial={{
          display: 'none',
          y: '100%',
        }}
        animate={{
          display: 'block',
          y: showContent ? 0 : '100%',
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        }}
      >
        <div className={`${styles.board_detail} ${styles.info_container}`}>
          <FadeInMotion delay={0} initialX={-100} initialY={0}>
            <h1 className={styles.board_title}>board</h1>
          </FadeInMotion>
          <div className={styles.info_cont}>
            <FadeInMotion delay={0.4} initialX={0} initialY={100}>
              <h3>자유롭게 글을 작성해보세요</h3>
            </FadeInMotion>
          </div>
        </div>

        <div className={styles.board_main}>
          <div className={styles.post_header}>
            <div className={styles.post_header_left}>
              <div className={styles.post_title}>
                <h2>총 <span>{posts.length}</span>개의 게시글</h2>
              </div>
            </div>
            <div className={styles.post_header_right}>
              <ul className={styles.post_button}>
                <li>
                  <LinkButton
                    variant="btn_pastel_blue"
                    href="/post/write"
                    text="글 작성"
                    target="_self"
                    className={''}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* post table */}
          <div className={styles.post_table}>
            <Table items={posts} columns={columns} />
          </div>
        </div>
      </motion.div>
    </>
  );
}
