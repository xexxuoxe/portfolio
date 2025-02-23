'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Loader from '@components/_utiles/loader/loader.component';
import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import Pagination from '@components/_utiles/pagination/pagination.component';

import { useLoader } from '../hooks/useLoader';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import styles from './postList.module.scss';

export default function PostListItem() {
  const { showContent, handleLoaderComplete } = useLoader();
  const { pages, fetchPages } = useNotion();

  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // 한 페이지에 표시할 게시글 수
  const totalPages = Math.ceil(pages.length / postsPerPage);

  // 현재 페이지의 게시글 필터링
  const paginatedPages = pages.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
              <h3>총 <span>{pages.length}</span>개의 게시글</h3>
            </FadeInMotion>
          </div>
        </div>

        <div className={styles.board_main}>
          <div className={styles.post_header}>
            <h2>게시글 목록</h2>
          </div>

          <div className={styles.post_table}>
            {paginatedPages.map((page, index) => (
              <div key={index} className={styles.post_card}>
                <h1 className={styles.post_title}>{page.title}</h1>
                <p className={styles.post_content}>{page.link}</p>
                <div className={styles.post_footer}>
                  <Link href={`/post/${page.id}`}>더보기 →</Link>
                </div>
              </div>
            ))}
          </div>

          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </motion.div>
    </>
  );
}
