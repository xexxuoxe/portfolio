'use client'
import styles from './postView.module.scss';
import PostListItem from '@components/main/post/list/postList.component';
import LinkButton from '@components/_utiles/link/link.component';
import { PostCont } from './postView.hook';

interface PostViewItemProps {
	post: PostCont;
}

export default function PostViewItem({ post }: PostViewItemProps) {
	console.log(post)
	return (
		<div className={styles.inner_container}>
			<div className={styles.siwon_board}>
				<div className={styles.board_view_top}>
					<div className={styles.view_top_header}>
						<div className={styles.view_top_left}>
							<h4 className={styles.view_top_title}>{post.title}</h4>
							<ul className={styles.view_top_detail}>
								<li>
									<span className={styles.detail_subject}>작성자</span>
									<span>{post.author}</span>
								</li>
								<li>
									<span className={styles.detail_subject}>작성일</span>
									<span>{post.date}</span>
								</li>
								<li>
									<span className={styles.detail_subject}>조회수</span>
									<span>{post.views}</span>
								</li>
							</ul>
						</div>
						<div className={styles.view_top_right}>
							<button type='button'>이전</button>
							<button type='button'>다음</button>
						</div>
					</div>
					<div className={styles.view_top_sub}>
						<p>{post.teacher}</p>
					</div>
				</div>
				<div className={styles.board_view_main}>
					<article>{post.contents}</article>
				</div>
				<div className={styles.board_view_bottom}>
					<div className={styles.view_bottom_list}>
						<LinkButton
							variant="btn_list"
							className="link_btn"
							href="/post/list"
							text="목록보기"
						/>
					</div>
				</div>
			</div>
			{/* 강의 리스트 */}
			<PostListItem></PostListItem>
		</div>
	)
}
