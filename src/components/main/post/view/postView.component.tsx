'use client'
import Link from 'next/link';
import styles from './postView.module.scss';
import PostListItem from '@components/main/post/list/postList.component';
import { usePostHook } from './postView.hook';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

export default function PostViewItem() {

	const {postData} = usePostHook();

	console.log(postData)

	return (
		<div className={styles.inner_container}>
			<div className={styles.siwon_board}>
				<div className={styles.board_view_top}>
					<div className={styles.view_top_header}>
						<div className={styles.view_top_left}>
							<h4 className={styles.view_top_title}>vsl go-at</h4>
							<ul className={styles.view_top_detail}>
								<li>
									<span className={styles.detail_subject}>작성자</span>
									<span>이은*</span>
								</li>
								<li>
									<span className={styles.detail_subject}>작성일</span>
									<span>2024.09.22</span>
								</li>
								<li>
									<span className={styles.detail_subject}>조회수</span>
									<span>241</span>
								</li>
							</ul>
						</div>
						<div className={styles.view_top_right}>
							<button type='button'>이전</button>
							<button type='button'>다음</button>
						</div>
					</div>
					<div className={styles.view_top_sub}>
						<p>최지선 선생님</p>
					</div>
				</div>
				<div className={styles.board_view_main}>
					<article>베트남어에서 유일무이한 VSL 강좌. 최고입니다.</article>
				</div>
				<div className={styles.board_view_bottom}>
					{/* <Link href={}>목록보기</Link> */}
				</div>
			</div>
			{/* 강의 리스트 */}
			<PostListItem></PostListItem>
		</div>
	)
}
