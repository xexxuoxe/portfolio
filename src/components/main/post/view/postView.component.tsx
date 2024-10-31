/*
	post view component
	src/components/main/post/view/postView.component.tsx
*/
'use client'
import styles from './postView.module.scss';
import PostListItem from '@components/main/post/list/postList.component';
import LinkButton from '@components/_utiles/link/link.component';
import Button from '@components/_utiles/button/button.component';
import { usePostView } from '../view/postView.hook';

interface PostViewItemProps {
	post: number;
}

export default function PostViewItem({ post }: PostViewItemProps) {

	const { postData, handleDelete } = usePostView(post);

	if (!postData) {
        return <div>로딩 중</div>;
    }

	return (
		<div className={ styles.inner_container }>
			<div className={ styles.siwon_board }>
				<div className={ styles.board_view_top }>
					<div className={ styles.view_top_header }>
						<div className={ styles.view_top_left }>
							<h4 className={ styles.view_top_title }>{ postData.title }</h4>
							<ul className={ styles.view_top_detail }>
								<li>
									<span className={ styles.detail_subject }>작성자</span>
									<span>{ postData.author }</span>
								</li>
								<li>
									<span className={ styles.detail_subject }>작성일</span>
									<span>{ postData.date }</span>
								</li>
								<li>
									<span className={ styles.detail_subject }>조회수</span>
									<span>{ postData.views }</span>
								</li>
							</ul>
						</div>
						<div className={ styles.view_top_right }>
							<LinkButton
								variant="btn_base"
								className="link_btn"
								href={ `/post/view/${ parseInt(postData.id) - 1 }` }
								text="이전"
							/>
							<LinkButton
								variant="btn_base"
								className="link_btn"
								href={ `/post/view/${ parseInt(postData.id) + 1 }` }
								text="다음"
							/>
						</div>
					</div>
					<div className={ styles.view_top_sub }>
						<p>{ postData.teacher }</p>
					</div>
				</div>
				<div className={ styles.board_view_main }>
					<article>{ postData.content }</article>
				</div>
				<div className={ styles.board_view_bottom }>
					<div className={ styles.view_bottom_list }>
						<Button
							variant="btn_base"
							type='button'
							className="link_btn"
							onClick={ handleDelete }
							text="삭제하기"
						/>
						<LinkButton
							variant="btn_base"
							className="link_btn"
							href={ `/post/modify/${ postData.id }` }
							text="수정하기"
						/>
						<LinkButton
							variant="btn_base"
							className="link_btn"
							href="/post/list"
							text="목록보기"
						/>
					</div>
				</div>
			</div>
			<PostListItem></PostListItem>
		</div>
	)

}
