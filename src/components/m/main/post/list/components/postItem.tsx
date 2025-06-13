'use client';

import React, { useState } from 'react';
import Pagination from '@components/_utiles/m/pagination/pagination.component';
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
              <div className={styles.post_title}>
                <h1>{page.title}</h1>
              </div>
              <p className={styles.post_content}>{page.contents}</p>
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
