/* 
	pagination component
	src/component/_utiles/pagination/pagination.component.tsx
*/
import styles from './pagination.module.scss';

interface PaginationProps {
  className : string;
  variant: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ className, variant, currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={`${styles[variant]} ${className} ${styles.pagination}`}>
      <ul className={styles.page_list}>
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`${currentPage === number ? styles.page_num_on : styles.page_num}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
