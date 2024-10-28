/*
	footer sementic
	scr/components/sementic/footer.component.tsx
*/
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import Select from'@components/_utiles/select/select.component';
import Slider from'@components/_utiles/slider/slider.component';

export default function FooterComponent() {

	const [selectedOption, setSelectedOption] = useState({ label: 'FAMILY SITE', value: '' });

	//select list array
	const options = [
		{
			label: '기초영어',
			options: [
				{ label: '시원스쿨 기초영어', value: '//www.siwonschool.com/' },
				{ label: '시원스쿨 편입영어', value: '//ut.siwonschool.com' },
				{ label: '시원스쿨 네이티브', value: '//native.siwonschool.com/' },
			]
		},
		{
			label: 'LAB',
			options: [
				{ label: '시원스쿨 토익', value: '//lab.siwonschool.com/' },
				{ label: '시원스쿨 토스/오픽', value: '//lab.siwonschool.com/?p=tosopic' },
				{ label: '시원스쿨 텝스', value: '//lab.siwonschool.com/?p=teps' },
				{ label: '시원스쿨 지텔프', value: '//lab.siwonschool.com/?p=gtelp' },
				{ label: '시원스쿨 아이엘츠', value: '//lab.siwonschool.com/?p=ielts' },
				{ label: '시원스쿨 토플', value: '//lab.siwonschool.com/?p=toefl' },
				{ label: '시원스쿨 듀오링고', value: '//lab.siwonschool.com/?s=event&t=duolingo' },
				{ label: '시원스쿨 영문법/회화', value: '//lab.siwonschool.com/?s=event&t=basic_grammar' },
				{ label: '시원스쿨 비즈니스/취업영어', value: '//lab.siwonschool.com/?s=event&t=businesspack' },
				{ label: '시원스쿨 SPA', value: '//lab.siwonschool.com/?s=event&t=spa' },
			]
		},
		{
			label: '일/아시아',
			options: [
				{ label: '시원스쿨 일본어', value: '//japan.siwonschool.com/' },
				{ label: '시원스쿨 중국어', value: '//china.siwonschool.com/' },
				{ label: '시원스쿨 베트남어', value: '//vietnam.siwonschool.com/' },
				{ label: '시원스쿨 인도네시아어', value: '//indonesia.siwonschool.com/' },
				{ label: '시원스쿨 태국어', value: '//thai.siwonschool.com/' },
				{ label: '시원스쿨 미얀마어', value: '//myanmar.siwonschool.com/' },
			]
		},
		{
			label: '유럽어',
			options: [
				{ label: '시원스쿨 스페인어', value: '//spain.siwonschool.com/' },
				{ label: '시원스쿨 프랑스어', value: '//france.siwonschool.com/' },
				{ label: '시원스쿨 독일어', value: '//germany.siwonschool.com/' },
				{ label: '시원스쿨 러시아어', value: '//russia.siwonschool.com/' },
				{ label: '시원스쿨 이탈리아어', value: '//italy.siwonschool.com/' },
				{ label: '시원스쿨 아랍어', value: '//arabic.siwonschool.com/' },
				{ label: '시원스쿨 히브리어', value: '//hebrew.siwonschool.com/' },
				{ label: "시원스쿨 헬라어", value: "//hebrew.siwonschool.com/?s=event&p=hellas" },
				{ label: '시원스쿨 터키어', value: '//turkey.siwonschool.com/' },
				{ label: "시원스쿨 포르투갈어", value: "//spain.siwonschool.com/?s=event&p=portugal" },
				{ label: "시원스쿨 라틴어", value: "//ssl.siwonschool.com/?s=event&p=latin" },
			]
		},
		{
			label: '기업교육',
			options: [
				{ label: '기업교육', value: '//b2b.siwonschool.com/' },
			]
		},
		{
			label: '강사채용',
			options: [
				{ label: '강사채용', value: '//recruit.siwonschool.com' },
			]
		},
	];

	//slide list array
	const slides = [
		{
			id: "slide01",
			title: "2022 국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_nba2023.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide02",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_customer2021.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide03",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_customer2020.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide04",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_goodtowork.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide05",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_brand2020.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide06",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_yearbrand2017.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide07",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_yearbrand2022.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide08",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_consumer.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide09",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_nba2019.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide10",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem_brand2018.png",
			link: "//www.siwonschool.com/?s=press"
		},
		{
			id: "slide11",
			title: "국가브랜드 대상",
			img: "https://siwon-cdn.siwonschool.com/pc/www/footer/emblem_v2/emblem01.png",
			link: "//www.siwonschool.com/?s=press"
		},
	]

	// 현재 날짜 가져오기
	const today = new Date();
	const todayYear = today.getFullYear();

	return (
		<div id={ styles.siwon_footer }>
            <div className={ styles.inner_wrap }>
				{/* footer top */}
				<div className={ styles.footer_top }>
					<div className={ styles.corp_list }>
						<ul className={ styles.corp_list_left }>
							<li>
								<Link href="//www.siwonschool.com/?s=school" target="_blank">회사소개</Link>
							</li>
							<li>
								<Link href="/?s=info&t=agreement">이용약관</Link>
							</li>
							<li className={ styles.personal_info }>
								<Link href="/?s=info&t=policy">개인정보처리방침</Link>
							</li>
						</ul>
						<ul className={ styles.corp_list_right }>
							<li>
								<Link href="//b2b.siwonschool.com/" target="_blank">단체수강</Link>
							</li>
							<li>
								<Link href="//www.siwonschool.com/?s=alliance" target="_blank">제휴안내</Link>
							</li>
							<li>
								<Link href="//recruit.siwonschool.com/?s=recruit&p=main" target="_blank">채용(강사/직원)</Link>
							</li>
							<li>
								<Link href="//www.siwonschool.com/?s=map" target="_blank">찾아오시는 길</Link>
							</li>
							{/* family_site */}
							<li className={ styles.family_site }>
								<Select
									options={options}
									variant="select_base"
									className={styles.select}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/>
							</li>
						</ul>
					</div>
				</div>
				{/* footer bottom */}
				<div className={ styles.footer_bottom }>
					<h1 className={ styles.logo }>
						<Image
							src="https://siwon-cdn.siwonschool.com/img/comm/asia_footer/footer_vietnam.png"
							width={585}
							height={37}
							alt="siwonschool"
						/>
					</h1>
					<div className={ styles.corp_info }>
						<article>
							<div className={ styles.txt01 }>
								<p>회사명<span>㈜에스제이더블유인터내셔널</span></p>
								<p>대표자<span>양홍걸</span></p>
								<p>주소<span>서울특별시 영등포구 영신로 166 영등포반도아이비밸리 7층,8층</span></p>
							</div>
							<div className={ styles.txt02 }>
								<p>사업자번호<span>214-87-98782</span></p>
								<p> 통신판매업신고번호
									<span>제2016-서울영등포-1275호
										<Link href="//www.ftc.go.kr/bizCommPop.do?wrkr_no=2148798782">[정보조회]</Link>
									</span>
								</p>
								<p>원격평생교육시설 신고번호<span>남부교육지원청-691호</span></p>
							</div>
							<div className={styles.txt03}>
								<p>고객센터<span>02)6409-0878</span></p>
								<p>기업체 교육 컨설팅 및 출강<span>02)2014-8254</span></p>
								<p>FAX<span>02)6406-1309</span></p>
							</div>
							<div className={styles.txt04}>
								<p>고객센터/통번역문의
									<span>
										<Link href="mailto:siwoncs@siwonschool.com">siwoncs@siwonschool.com</Link>
									</span>
								</p>
								<p>마케팅/제휴문의
									<span>
										<Link href="mailto:marketer@siwonschool.com">marketer@siwonschool.com</Link>
									</span>
								</p>
								<p>제안 및 고객(사업)최고책임자
									<span>
										<Link href="mailto:ceo@siwonschool.com">ceo@siwonschool.com</Link>
									</span>
								</p>
							</div>
							<div className={styles.txt05}>
								<p>호스팅 제공자<span>㈜)KT</span></p>
								<p> 개인정보보호책임자<span>최광철</span></p>
							</div>
						</article>
						<div className={ styles.award_slide }>
							<Slider
								slides={slides}
								spaceBetween={30}
								slidesPerView={8}
								loop={true}
								navigation={true}
								pagination={false}
								scrollbar={false}
								autoplay={{ delay: 2000, disableOnInteraction: false }}
							/>
						</div>
						<address className={ styles.copyright }>
							Copyright &copy; {`${todayYear}`} siwonschool. All Rights Reserved.
						</address>
					</div>
				</div>
			</div>
        </div>
	)
}
