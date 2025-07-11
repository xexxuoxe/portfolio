'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '@components/_utiles/loader/loader.component';
import PostItem from '@components/main/post/list/components/postItem'

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
        <div className={styles.board_main}>
          <ul className={styles.post_header}>
            <li>
              <button>
                ALL({pages.length})
              </button>
            </li>
            <div className={styles.post_write_btn}>
              <Link href="/post/write">
                <span>Writing</span>
              </Link>
            </div>
          </ul>
          <PostItem />
        </div>y
      </motion.div>
    </>
  );
}
