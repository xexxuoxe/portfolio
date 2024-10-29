/*
	post write component
	src/component/main/post/write/postWrite.component.tsx
*/
'use client';

import Input from '@components/_utiles/input/input.component';
import Editor from '@components/_utiles/draftEditor/draftEditor.component';
import Checkbox from '@components/_utiles/checkbox/checkbox.component';
import Link from '@components/_utiles/link/link.component';
import Button from '@components/_utiles/button/button.component';
import { postData , usePostWrite } from './postWrite.hook';
import styles from './postWrite.module.scss';

interface PostWriteItemProps {
	post: postData;
}

export default function PostWritePage({ post } : PostWriteItemProps) {

	const { postData, handleChange, handleSubmit } = usePostWrite(post);

	return (
		<div className={ styles.inner_container }>
			<div className={ styles.siwon_board }>
				<form onSubmit={ handleSubmit }>
					<table>
						<colgroup>
							<col width={ "10%" } />
						    <col width={ "90%" } />
						</colgroup>
						<tbody>
						<tr>
							<th className={ styles.th }>
								<label htmlFor="write_title">제목</label>
							</th>
							<td className={ styles.td }>
							<Input
								id="write_title"
								variant ="input_base"
								name="title"
								type="text"
								value={ postData.title }
								onChange={ handleChange }
								placeholder='제목을 입력해주세요'
								className="title"
							/>
							</td>
						</tr>
						<tr>
							<th className={ styles.th }>
								<label htmlFor="write_content">내용</label>
							</th>
							<td className={ styles.td }>
							<Editor />
							{/* value={ postData.content } */}
							</td>
						</tr>
						</tbody>
					</table>
					<div className={ styles.policy_wrap }>
						<Checkbox
							id="policy"
							name="collect"
							variant="checkbox_base"
							className=""
							onChange={ handleChange }
							checked={ postData.collect }
						/>
						<label htmlFor="policy">개인정보 수집 및 활용 동의</label>
					</div>
					<div className={ styles.submit_btn }>
							<Link
								text="취소"
								href="/post/list"
								target="_self"
								variant="btn_base"
								className=""
							/>
							<Button
								text="작성 완료"
								type="submit"
								variant="btn_base"
								className="form_submit"
							/>
					</div>
				</form>
			</div>
		</div>
	);
}
