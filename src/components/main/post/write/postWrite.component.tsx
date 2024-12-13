'use client';

import Input from '@components/_utiles/input/input.component';
import TextArea from '@components/_utiles/textarea/textarea.component';
import Checkbox from '@components/_utiles/checkbox/checkbox.component';
import Link from '@components/_utiles/link/link.component';
import Button from '@components/_utiles/button/button.component';
import { PostData, usePostWrite } from './postWrite.hook';
import styles from './postWrite.module.scss';

interface PostWriteProps {
  post?: PostData; // 타입 수정
}

export default function PostWritePage({ post }: PostWriteProps) {
  const { postData, handleChange, handleSubmit } = usePostWrite(post);

  return (
    <div className={styles.inner_container}>
      <div className={styles.siwon_board}>
        <form onSubmit={handleSubmit}>
          <table>
            <colgroup>
              <col width="10%" />
              <col width="90%" />
            </colgroup>
            <tbody>
              {/* 작성자 입력 */}
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_author">이름</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_author"
                    variant="input_base"
                    name="author"
                    type="text"
                    value={postData.author}
                    onChange={handleChange}
                    placeholder="작성자 이름을 입력해주세요"
                    className="author"
                    required
                  />
                </td>
              </tr>

              {/* 작성일 입력 */}
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_date">작성일</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_date"
                    variant="input_base"
                    name="date"
                    type="date"
                    value={postData.date}
                    onChange={handleChange}
                    className="date"
                    required
                  />
                </td>
              </tr>

              {/* 제목 입력 */}
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_title">제목</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_title"
                    variant="input_base"
                    name="title"
                    type="text"
                    value={postData.title}
                    onChange={handleChange}
                    placeholder="제목을 입력해주세요"
                    className="title"
                    required
                  />
                </td>
              </tr>

              {/* 선생님 입력 */}
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_teacher">선생님</label>
                </th>
                <td className={styles.td}>
                  <Input
                    id="write_teacher"
                    variant="input_base"
                    name="teacher"
                    type="text"
                    value={postData.teacher}
                    onChange={handleChange}
                    placeholder="선생님을 입력해주세요"
                    className="teacher"
                    required
                  />
                </td>
              </tr>

              {/* 내용 입력 */}
              <tr>
                <th className={styles.th}>
                  <label htmlFor="write_content">내용</label>
                </th>
                <td className={styles.td}>
                  <TextArea
                    id="write_content"
                    name="content"
                    variant="textarea_base"
                    value={postData.contents}
                    onChange={handleChange}
                    placeholder="내용을 입력해주세요"
                    className="content"
                    rows={10}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* 개인정보 수집 동의 */}
          <div className={styles.policy_wrap}>
            <Checkbox
              id="policy"
              name="collect"
              variant="checkbox_base"
              onChange={handleChange}
              checked={postData.collect}
            />
            <label htmlFor="policy">개인정보 수집 및 활용 동의</label>
          </div>

          {/* 버튼 영역 */}
          <div className={styles.submit_btn}>
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