'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@components/_utiles/loader/loader.component';
import FooterComponent from '@components/sementic/footer/footer.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import PostItem from '@components/main/post/list/components/postItem'
import NavComponent from '@components/sementic/navigation/nav.component';

import { useLoader } from '../hooks/useLoader';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import styles from './postList.module.scss';

export default function PostListItem() {
  const { showContent, handleLoaderComplete } = useLoader();
  const { pages } = useNotion();

  return (
    <>
      <Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
      <motion.div
        className={styles.board_view}
        initial={{ display: 'none', y: '100%' }}
        animate={{ display: 'block', y: showContent ? 0 : '100%', transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        <NavComponent />
        <div className={`${styles.board_list}`}>
          <FadeInMotion delay={0} initialX={-100} initialY={0}>
            <h1 className={styles.board_title}>Board</h1>
          </FadeInMotion>
          <div className={styles.info_cont}>
            <FadeInMotion delay={0.4} initialX={0} initialY={100}>
              <h3>개발에 관한 글을 확인하실 수 있습니다.</h3>
            </FadeInMotion>
          </div>
        </div>
        <div className={styles.board_main}>
          <ul className={styles.post_header}>
            <li>
              <button>
                ALL({pages.length})
              </button>
            </li>
            <div className={styles.post_write_btn}>
              <Link href="/post/write">
                <span>Writing 🖊</span>
              </Link>
            </div>
          </ul>
          <PostItem />
        </div>
        {/* footer */}
        <FooterComponent />
      </motion.div>
    </>
  );
}
