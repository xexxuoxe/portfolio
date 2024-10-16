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
							<col width={"20%"} />
							<col width={"80%"} />
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
								{/* <ComponentSelect
									className={styles.select}
									options={stars}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/> */}
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div className={styles.policy_wrap}>
					<div className={styles.policy_wrap_inner}>
						<p className={styles.notice}>[ 개인정보 수집 및 활용 동의 안내 ]</p>
						<p className={styles.notice}>1. 개인정보 수집 이용 목적</p>
						- 이벤트 신청 접수에 따른 본인 확인 절차 진행 및 문의사항 응대
						- 제출한 수강 수기를 바탕으로 학습법 및 학원 홍보
						<p className={styles.notice}>2. 개인정보 수집 항목</p>
						- 신청인의 이름, 시원스쿨 ID, 수강한 강의명, 공인 어학시험 성적표, 수강후기
						<p className={styles.notice}>3. 개인정보 이용기간 및 보유기간</p>
						- 홍보 페이지 게시 종료 시까지
						<p className={styles.notice}>4. 개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익</p>
						- 귀하는 개인 정보 제공 동의를 거부할 권리가 있으며 동의 거부에 따른 불이익은
						없으나, 위 제공사항은 이벤트 참여에 반드시 필요한 사항으로 거부하실 경우
						이벤트 신청이 불가능함을 알려드립니다.
						㈜에스제이더블유인터내셔널에 개인정보를 제공 및 이를 마케팅에 활용하는 것에 동의합니다.
					</div>
				</div>
				<div className={styles.submit_btn}>
					<button type="submit" className={styles.form_cancel}>취소</button>
					<button type="submit" className={styles.submit}>작성 완료</button>
				</div>
			</div>
		</div>
	);
}
