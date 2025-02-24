'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import FadeInMotion from '@components/_utiles/parallax/fadeInMotion.component';
import Pagination from '@components/_utiles/pagination/pagination.component';
import { useNotion } from '@lib/notion/hook/useNotion.hook';
import styles from './postItem.module.scss';

export default function PostItem() {
  const { pages } = useNotion();
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;
  const totalPages = Math.ceil(pages.length / postsPerPage);

  const paginatedPages = pages.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles.post_body}>
        <div className={styles.post_table}>
          {paginatedPages.map((page, index) => (
            <div key={index} className={styles.post_card}>
              <FadeInMotion delay={index * 0.1} initialX={0} initialY={100}>
                <Link href={`/post/view/${page.id}`}>
                  <div className={styles.post_tags}>
                    {page.tags.map((item, index) => (
                      <span key={index} className={styles.tag}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <h1 className={styles.post_title}>{page.title}</h1>
                  <p className={styles.post_content}>{page.contents}</p>
                </Link>
              </FadeInMotion>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
