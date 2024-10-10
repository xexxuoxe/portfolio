'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './post.module.scss';
//import ComponentSelect from '@components/_utiles/select/select.component';
import ComponentTable from '@components/_utiles/table/table.component';
import { Post, usePostHook } from './post.hook';

export default function ListItem() {
    //const [selectedOption, setSelectedOption] = useState({ label: '선생님', value: '' });
	//const postList = await api.get<{ message: string }>('http://localhost:3002/boradList');

	const {
		postData
	} = usePostHook();

	const posts = postData;

	const columns = [
		{ key: 'id', header: '번호' },
		{
			key: 'title',
			header: '제목',
			render: (post: Post) => (
				<Link href={`/posts/${post.id}`}>
					{post.title}
				</Link>
			)
		},
		{ key: 'author', header: '작성자' },
		{ key: 'date', header: '작성일' },
		{ key: 'satisfaction', header: '강의만족도' },
		{ key: 'views', header: '조회수' },
	];

    return (
        <div className={styles.siwon_board}>
            <div className={styles.post_header}>
                <div className={styles.post_header_left}>
                    <div className={styles.post_title}>
                        <h2>총 <span>588</span>개의 수강후기</h2>
						{/* {postList.length} */}
                    </div>
					<ul>
						<li>
							{/* <ComponentSelect
								className={styles.select}
								options={postList}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
							/> */}
						</li>
					</ul>
                </div>
                <div className={styles.post_header_right}>
                    <ul className={styles.post_button}>
                        <li>
							<Link href="//b2b.siwonschool.com/" target="_blank">내 수강후기</Link>
						</li>
                        <li>
							<Link href="//b2b.siwonschool.com/" target="_blank">수강후기 작성</Link>
						</li>
                    </ul>
                </div>
            </div>
			{/* post table */}
			<div className={styles.post_filter}>
				<ComponentTable
					items={posts}
					columns={columns}
				/>
			</div>
        </div>
    )
}
