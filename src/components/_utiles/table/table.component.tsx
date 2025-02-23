'use client';
import React, { useState } from 'react';
import Pagination from '@components/_utiles/pagination/pagination.component';
import styles from './table.module.scss'

interface Record {
	[key: string]: string | number | boolean | null | undefined;
}

interface Column<T> {
	key: keyof T;
	header: string;
	render?: (item: T) => React.ReactNode;
}

interface PostListProps<T extends object> {
	className?: string;
	variant?: string;
	items: T[];
	columns: Column<T>[];
	itemsPerPage?: number;
}

function PostList<T extends Record>({
	className,
	variant = 'default',
	items,
	columns,
	itemsPerPage = 10
}: PostListProps<T>) {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	}

	const renderCell = (item: T, column: Column<T>): React.ReactNode => {
		if (column.render) {
			return column.render(item);
		}
		const value = item[column.key];
		return value != null ? String(value) : '';
	}

	return (
		<div className={`${variant ? styles[variant] : ''} ${className}`}>
			<div className={styles.table_container}>
				<table>
					<thead>
						<tr className={styles.table_header}>
							<th className={styles.table_header_list}>번호</th>
							{columns.map((column) => (
								<th key={String(column.key)} className={styles.table_header_list}>
									{column.header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{currentItems.map((item, index) => (
							<tr key={index} className={styles.table_body}>
								<td className={styles.table_body_list}>
									{(currentPage - 1) * itemsPerPage + index + 1}
								</td>
								{columns.map((column) => (
									<td key={String(column.key)} className={styles.table_body_list}>
										{renderCell(item, column)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{items.length > itemsPerPage && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(items.length / itemsPerPage)}
					onPageChange={paginate}
					className={className}
					variant={variant}
				/>
			)}
		</div>
	);
}

export default PostList;