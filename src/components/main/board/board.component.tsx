//'use client'
import Link from "next/link"
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import styles from './board.module.scss';
import ComponentSelect from'@components/_utiles/select/select.component';
import api from '@lib/api/fetch.client';

export default async function ListItem() {

	const boardList = await api.get<{ message: string }>('http://localhost:3002/boradList');
	// const [selectedOption, setSelectedOption] = useState({ label: 'FAMILY SITE', value: '' });

	console.log(boardList);
	return (
		<div className={styles.table_header}>
			<div className={styles.table_header_left}>
				<ul>
					<li><h2>총<span></span>개의 수강후기</h2></li>
					<li>
						{/* <ComponentSelect
							options={options}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							id="default"
						/> */}
					</li>
				</ul>
			</div>
		</div>
	)
}
