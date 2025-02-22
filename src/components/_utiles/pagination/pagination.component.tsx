import styles from './pagination.module.scss';

interface PaginationProps {
	className?: string;
	variant?: string;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	className = '',
	variant = 'default',
	currentPage,
	totalPages,
	onPageChange
}) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className={`${styles[variant]} ${className} ${styles.pagination}`}>
			<ul className={styles.page_list}>
				<li>
					<button
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className={styles.page_prev}
					>
						&lt;
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
						className={styles.page_next}
					>
						&gt;
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;