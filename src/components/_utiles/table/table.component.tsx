'use client';

import React, { useState } from 'react';
import ComponentPagination from '@components/_utiles/pagination/pagination.component';
import styles from './table.module.scss'

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface PostListProps<T> {
  items: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
}

function PostList<T>({ items, columns, itemsPerPage = 10 }: PostListProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
	setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className={styles.table_container}>
        <table>
          <thead>
            <tr className={styles.table_header}>
              {columns.map((column) => (
                <th key={column.key as string} className={styles.table_header_list}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className={styles.table_body}>
                {columns.map((column) => (
                  <td key={column.key as string} className={styles.table_body_list}>
                    {column.render ? column.render(item) : item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length > itemsPerPage && (
        <ComponentPagination
          currentPage={currentPage}
          totalPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
}

export default PostList;
