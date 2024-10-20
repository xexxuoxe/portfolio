/* 
	post write component
	src/component/main/post/write/postEdit.component.tsx
*/
'use client';
import Input from '@components/_utiles/input/input.component';
import TextArea from '@components/_utiles/textarea/textarea.component';
import Checkbox from '@components/_utiles/checkbox/checkbox.component';
import Link from '@components/_utiles/link/link.component';
import Button from '@components/_utiles/button/button.component';
import { usePostEdit } from './postEdit.hook';
import styles from './postEdit.module.scss';

export default function PostEditPage() {
  const { formData, handleChange, handleSubmit } = usePostEdit();

  console.log(formData);

  return (
    <div className={styles.inner_container}>
      <div className={styles.siwon_board}>
        <form onSubmit={handleSubmit}>
          <table>
            <colgroup>
              <col width={"10%"} />
              <col width={"90%"} />
            </colgroup>
            <tbody>
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_title">제목</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_title"
					          variant ="input_gray"
                    type="text"
                    name="title"
                    defaultValue={formData.title}
                    value={formData.title}
                    onChange={handleChange}
                    className="title"
                  />
                </td>
              </tr>
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_content">내용</label>
                </th>
                <td className={styles.td}>
                  <TextArea
                    id="write_content"
					          variant ="input_gray"
                    name="content"
                    defaultValue={formData.content}
                    value={formData.content}
                    onChange={handleChange}
                    className="content"
                  />
                </td>
              </tr>
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_file">첨부파일</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_file"
                    type="file"
                    name="file"
                    defaultValue={formData.file}
                    value={formData.file}
                    onChange={handleChange}
                    className="file"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.policy_wrap}>
            <Checkbox
              id="policy"
              name="collect"
              checked={formData.collect}
              onChange={handleChange}
            />
            <label htmlFor="policy">개인정보 수집 및 활용 동의</label>
          </div>
          <div className={styles.submit_btn}>
		 		<Link
					variant="btn_list"
					className="list_btn"
					href="/post/list"
					text="취소"
				/>
				<Button
					// onClick={}
					type="submit"
					text="작성 완료"
					variant="btn_list"
					className="form_submit"
				/>
          </div>
        </form>
      </div>
    </div>
  );
}
