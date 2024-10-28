/*
	gnb sementic
	scr/components/sementic/gnb.component.tsx
*/
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './gnb.module.scss';

export default function GnbComponent() {
	return (
		<div id={ styles.siwon_header }>
			<div className={ `${styles.header_top} ${styles.inner_wrap}`}>
				{/* banner */}
				<article className={ `${styles.banner} ${styles.wrap_items}` }>
					<Image
						src="https://data.siwonschool.com/banner/img/vietnam/2021/04/22/bimg_src_1619064400.png"
						alt="siwonschool members"
						width={290}
						height={30}
					/>
				</article>
				{/* logo */}
				<h1 className={ `${styles.logo} ${styles.wrap_items}` }>
					<Link href="/">
						<Image
							src="https://siwon-cdn.siwonschool.com/asia/layout/logo.png"
							alt="siwonschool members"
							width={160}
							height={60}
						/>
					</Link>
				</h1>
				{/* user menu */}
				<div className={ `${styles.user_menu} ${styles.wrap_items}` }>
					<ul className={ `${styles.user_view} ${styles.user_container}` }>
						<li>
							<Link href="/signin">로그인</Link>
						</li>
						<li className={ styles.join }>
							<Link href={ `/signup` } className={ styles.bar }>회원가입</Link>
						</li>
						<li>
							<Link href="/signin">고객센터</Link>
						</li>
						<li>
							<Link href="/signin">공지사항</Link>
						</li>
					</ul>
					<ul className={ `${styles.user_page} ${styles.user_container}` }>
						<li className={ styles.survey }>
							<Link href="/signin"></Link>
						</li>
						<li className={ styles.mypage }>
							<Link href="/signin"></Link>
						</li>
						<li className={ styles.coupon }>
							<Link href="/signin"></Link>
						</li>
						<li className={ styles.cart }>
							<Link href="/signin"></Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
