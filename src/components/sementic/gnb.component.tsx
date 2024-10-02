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
			<div className={ `${styles.container} container` }>
				<h1 className={ styles.logo }>
					<Link href="/">
						{
							isBreakpoint('desktop') &&
								<Image
								src="https://siwon-cdn.siwonschool.com/member/comm/logo.png"
								alt="siwonschool members"
								width={290}
								height={30}
								/>
						}
						{
							isBreakpoint('mobile') &&
								<Image
								src="https://siwon-cdn.siwonschool.com/member/m/comm/logo.png"
								alt="siwonschool members"
								width={150}
								height={39}
								/>
						}
					</Link>
				</h1>

				<ul className={ styles.util_menu }>
					{/* 로그인 전 */}
					<li>
						<Link href="/signin">로그인</Link>
					</li>
					<li className={ styles.join }>
						<Link href={ `/signup/step1` } className={ styles.bar }>회원가입</Link>
					</li>

					{/* 로그인 후 */}
					{/* <li><a href="/?s=logout">로그아웃</a></li>
					<li><a href="/?s=modify" className="bar">내정보관리</a></li> */}
				</ul>
			</div>
		</div>
	)
}
