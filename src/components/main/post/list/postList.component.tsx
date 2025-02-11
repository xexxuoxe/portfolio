/*
	post list component
	src/components/main/post/list/postList.component.tsx
*/
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './postList.module.scss';
import LinkButton from '@components/_utiles/link/link.component';
import Table from '@components/_utiles/table/table.component';
import { Post, usePostHook } from './postList.hook';

export default function PostListItem() {

	const {
		postData,
	} = usePostHook();

	const posts = postData;

	const columns = [
        {
            key: 'title',
            header: '제목',
            render: (posts: Post) => (
                <Link href={`/post/view/${posts.id}`}>
                    { posts.title }
                </Link>
            )
        },
        { key: 'author', header: '작성자' },
        { key: 'date', header: '작성일' },
    ];

    return (
		<div className={styles.inner_container}>
			<div className={styles.siwon_board}>
				<div className={styles.post_header}>
					<div className={styles.post_header_left}>
						<div className={styles.post_title}>
							<h2>총 <span>{posts.length}</span>개의 게시글</h2>
						</div>
					</div>
					<div className={styles.post_header_right}>
						<ul className={styles.post_button}>
							<li>
								<LinkButton
									variant="btn_pastel_blue"
									href="/post/write"
									text="글 작성"
								/>
							</li>
						</ul>
					</div>
				</div>
				{/* post table */}
				<div className={styles.post_table}>
					<Table
						items={posts}
						columns={columns}
					/>
				</div>
			</div>
		</div>
    )
}
