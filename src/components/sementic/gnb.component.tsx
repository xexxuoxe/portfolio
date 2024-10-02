'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useResponsive } from '@lib/context/responsive.context';

import styles from './gnb.module.scss';

export default function GnbComponent() {
	const { currentBreakpoint, isBreakpoint } = useResponsive();

	return (
		<div id={ styles.siwon_header }>
			<div className={styles.container}>
				<h1 className={ styles.logo }>
					<Link href="/">
						<Image
							src="https://siwon-cdn.siwonschool.com/asia/layout/logo.png"
							alt="siwonschool members"
							layout="fill"
						/>
					</Link>
				</h1>

						{/* <Image
							src="https://data.siwonschool.com/banner/img/vietnam/2021/04/13/bimg_src_1618283065.png"
							alt="siwonschool members"
							layout="fill"
						/> */}
						
				<ul className={ styles.util_menu }>
					{/* 로그인 전 */}
					<li>
						<Link href="/signin">로그인</Link>
					</li>
					<li className={ styles.join }>
						<Link href={ `/signup/step1` } className={ styles.bar }>회원가입</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
