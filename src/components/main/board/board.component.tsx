'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './board.module.scss';
import ComponentSelect from '@/components/_utiles/select/select.component';
// import api from '@/lib/api/fetch.client';  // 경로는 실제 위치에 맞게 조정해주세요

// API 응답 타입 정의
// interface BoardItem {
//   // 여기에 실제 게시글 아이템의 속성들을 정의하세요
//   id: number;
//   title: string;
//   // 기타 필요한 속성들...
// }

// interface BoardListResponse {
//   message: string;
//   data: BoardItem[];
// }

export default function ListItem() {
    const [selectedOption, setSelectedOption] = useState({ label: '선생님', value: '' });
    //const [boardList, setBoardList] = useState<BoardItem[]>([]);

    const optionsTeacher = [
        {
            label: '선생님',
            options: [
                { label: '김빛나', value: 'kim' },
                { label: '이말순', value: 'lee' },
                { label: '박나래', value: 'park' },
            ]
        },
    ];

    // useEffect(() => {
    //     const fetchBoardList = async () => {
    //         try {
    //             const response = await api.get<BoardListResponse>('/boardList');  // API 엔드포인트 경로를 실제 경로로 수정해주세요
    //             if (response.data) {
    //                 setBoardList(response.data.data);
    //             }
    //         } catch (error) {
    //             console.error('Failed to fetch board list:', error);
    //         }
    //     };

    //     fetchBoardList();
    // }, []);

    return (
        <div className={styles.siwon_board}>
            <div className={styles.table_header}>
                <div className={styles.table_header_left}>
                    <div className={styles.table_title}>
                        <h2>총 <span>588</span>개의 수강후기</h2>
						{/* {boardList.length} */}
                    </div>
                    <ul className={styles.table_filter}>
                        <li>
                            <ComponentSelect
                                options={optionsTeacher}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                id="default"
                            />
                        </li>
                    </ul>
                </div>
                <div className={styles.table_header_right}>
                    <ul className={styles.table_button}>
                        <li>
							<Link href="//b2b.siwonschool.com/" target="_blank">내 수강후기</Link>
						</li>
                        <li>
							<Link href="//b2b.siwonschool.com/" target="_blank">수강후기 작성</Link>
						</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}