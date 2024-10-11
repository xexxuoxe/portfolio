'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import ComponentSelect from'@components/_utiles/select/select.component';
import styles from './postWrite.module.scss';

export default function PostWritePage() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [file, setFile] = useState(null);
	const [satisfaction, setSatisfaction] = useState('');
	const [selectedOption, setSelectedOption] = useState({ label: 'FAMILY SITE', value: '' });
	// const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 파일 처리를 위해 FormData 사용
		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', content);
		formData.append('satisfaction', satisfaction);
		if (file) {
			formData.append('file', file);
		}

		// 여기에 서버로 데이터를 보내는 로직을 추가하세요.
		// 예: API 호출을 통해 formData를 서버에 전송

		console.log('제출된 데이터:', { title, content, satisfaction, file: file?.name });

		// 작성 완료 후 게시판 목록 페이지로 이동
		router.push('/board');
	};
	// 만족도 api
	const stars = [
		{
			value: 1,
			select: "★"
		},
		{
			value: 2,
			select: "★★"
		},
		{
			value: 3,
			select: "★★★"
		},
		{
			value: 4,
			select: "★★★★"
		},
		{
			value: 5,
			select: "★★★★★"
		},
	];

	return (
		<div className={styles.inner_container}>
			<div className={styles.siwon_board}>
				<form onSubmit={handleSubmit}>
					<table>
						<colgroup>
							<col width={"30%"} />
							<col width={"70%"} />
						</colgroup>
						<tbody>
							<tr>
								<th className={styles.th}>
									<label htmlFor="write_text">제목</label>
								</th>
								<td className={styles.td}>
									<input
										type="text"
										id="write_text"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										required
									/>
								</td>
							</tr>
							<tr>
								<th className={styles.th}>
									<label htmlFor="write_content">내용</label>
								</th>
								<td className={styles.td}>
									<textarea
										id="write_content"
										value={content}
										rows="6"
										onChange={(e) => setContent(e.target.value)}
										required
									></textarea>
								</td>
							</tr>
							<tr>
								<th className={styles.th}>
									<label htmlFor="write_file">첨부파일</label>
								</th>
								<td className={styles.td}>
									<input
										type="file"
										id="write_file"
										onChange={(e) => setFile(e.target.files[0])}
									/>
								</td>
							</tr>
							<tr>
								<th className={styles.th}>
									<label htmlFor="write_satisfac">만족도</label>
								</th>
								<td className={styles.td}>
								<ComponentSelect
									className={styles.select}
									options={stars}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<button type="submit" className={styles.form_cancel}>취소</button>
				<button type="submit" className={styles.submit}>작성 완료</button>

			</div>
		</div>
	);
}
