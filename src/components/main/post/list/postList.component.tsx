'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkButton from '@components/_utiles/link/link.component';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import Table from '@components/_utiles/table/table.component';

import { useLoader } from '../hooks/useLoader';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import styles from './postList.module.scss';

export default function PostListItem() {
  
  const { showContent, handleLoaderComplete } = useLoader();
  const { pages, fetchPages } = useNotion();


  return (
    <>
      <Loader className='' variant="blind_base" onComplete={handleLoaderComplete} />
      <motion.div
        className={styles.board_view}
        initial={{ display: 'none', y: '100%' }}
        animate={{
          display: 'block',
          y: showContent ? 0 : '100%',
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      >
        <div className={`${styles.board_detail} ${styles.info_container}`}>
          <FadeInMotion delay={0} initialX={-100} initialY={0}>
            <h1 className={styles.board_title}>Board</h1>
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
                <h2>총 <span>{pages.length}</span>개의 게시글</h2>
              </div>
            </div>
          </div>
          <div className={styles.post_table}>
            <table>
              <tr>
                <th>
                  <p>{pages.title}</p>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </motion.div>
    </>
  );
}
