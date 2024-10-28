/*
	nav component
	src/component/sementic/nav.component.tsx
*/
"use client";
import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
{/* site link arry  */}
const languages = [
  	{ name: "일본어", url: "//japan.siwonschool.com" },
  	{ name: "아시아어", url: "//china.siwonschool.com",
		subLinks: [
			{ name: "중국어", url: "//china.siwonschool.com" },
			{ name: "베트남어", url: "//vietnam.siwonschool.com" },
			{ name: "인도네시아어", url: "//indonesia.siwonschool.com" },
			{ name: "태국어", url: "//thai.siwonschool.com" },
			{ name: "미얀마어", url: "//myanmar.siwonschool.com" },
		],
	},
	{ name: "유럽어", url: "//spain.siwonschool.com",
		subLinks: [
			{ name: "스페인어", url: "//spain.siwonschool.com" },
			{ name: "프랑스어", url: "//france.siwonschool.com" },
			{ name: "독일어", url: "//germany.siwonschool.com" },
			{ name: "러시아어", url: "//russia.siwonschool.com" },
			{ name: "이탈리아", url: "//italy.siwonschool.com" },
			{ name: "아랍어", url: "//arabic.siwonschool.com" },
			{ name: "히브리어", url: "//hebrew.siwonschool.com" },
			{ name: "헬라어", url: "//hebrew.siwonschool.com/?s=event&p=hellas" },
			{ name: "터키어", url: "//turkey.siwonschool.com" },
			{ name: "포르투갈어", url: "//spain.siwonschool.com/?s=event&p=portugal" },
			{ name: "라틴어", url: "//ssl.siwonschool.com/?s=event&p=latin" },
		],
	},
	{ name: "진짜학습지", url: "//daily.siwonschool.com",
		subLinks: [
			{ name: "영어", url: "//daily.siwonschool.com/?s=event&t=masterpack" },
			{ name: "일본어", url: "//daily.siwonschool.com/?s=event&t=japan" },
			{ name: "스페인어", url: "//daily.siwonschool.com/?s=event&t=spain" },
			{ name: "중국어", url: "//daily.siwonschool.com/?s=event&t=china" },
			{ name: "베트남어", url: "//daily.siwonschool.com/?s=event&t=vietnam" },
			{ name: "프랑스어", url: "//daily.siwonschool.com/?s=event&t=france" },
			{ name: "독일어", url: "//daily.siwonschool.com/?s=event&t=germany" },
			{ name: "러시아어", url: "//daily.siwonschool.com/?s=event&t=russia" },
			{ name: "회원전용복지몰", url: "//daily.siwonschool.com/?s=event&t=siwonmall_vip" },
		],
	},
	{ name: "시원스쿨 쓸", url: "//ssl.siwonschool.com" },
	{ name: "한국어", url: "//korean.siwonschool.com" },
	{ name: "영어회화", url: "//www.siwonschool.com",
		subLinks: [
			{ name: "영어회화", url: "//www.siwonschool.com" },
			{ name: "초등영어", url: "//junior.siwonschool.com" },
			{ name: "초등영어탭", url: "//junior.siwonschool.com/?s=event&t=superkidstab" },
		]
	},
	{ name: "시험영어", url: "//lab.siwonschool.com" ,
		subLinks : [
			{ name: "토익", url: "//lab.siwonschool.com/?p=toeic" },
			{ name: "토스/오픽", url: "//lab.siwonschool.com/?p=tosopic" },
			{ name: "텝스", url: "//lab.siwonschool.com/?p=teps" },
			{ name: "지텔프", url: "//lab.siwonschool.com/?p=gtelp" },
			{ name: "아이엘츠", url: "//lab.siwonschool.com/?p=ielts" },
			{ name: "토플", url: "//lab.siwonschool.com/?p=toefl" },
			{ name: "듀오링고", url: "//lab.siwonschool.com/?s=event&t=duolingo" },
			{ name: "영문법/회화", url: "//lab.siwonschool.com/?s=event&t=basic_grammar" },
			{ name: "비즈니스/취업영어", url: "//lab.siwonschool.com/?s=event&t=businesspack" },
			{ name: "SPA", url: "//lab.siwonschool.com/?s=event&t=spa" },
		]
	},
	{ name: "편입", url: "//ut.siwonschool.com" },
	{ name: "B2B·직무/자격증", url: "//b2b.siwonschool.com" },
	{ name: "강사채용", url: "//recruit.siwonschool.com/?s=recruit&p=main&sec_cate1=188" },
	{ name: "회원전용복지몰", url: "//daily.siwonschool.com/?s=event&t=siwonmall_vip" },
];
{/* sns link arry  */}
const socialLinks = [
  { name: "유튜브", url: "//www.youtube.com/channel/UC19bLFMBYY1YChAWQ7sNl8A", class: "youtube" },
  { name: "네이버 TV", url: "//tv.naver.com/siwonvietnam/", class: "navertv" },
  { name: "인스타그램", url: "//www.instagram.com/siwonvietnam/", class: "instagram" },
  { name: "블로그", url: "//blog.naver.com/siwonvietnam" , class: "naverblog", },
  { name: "페이스북", url: "//www.facebook.com/siwonvietnam/", class: "facebook" },
];

export default function NavComponent() {
  return (
    <div id={ styles.siwon_navigation }>
      <div className={ styles.inner_wrap }>
		{/* site link */}
        <ul className={ styles.language_menu }>
			{ languages.map(( lang, index ) => (
			<li key={ index }>
				<Link href={ lang.url } target="_blank">
					{ lang.name }
				</Link>
				{ lang.subLinks && lang.subLinks.length > 0 && (
					<ul className={ styles.sub_menu }>
					{lang.subLinks.map(( subLang, subIndex ) => (
						<li key={ subIndex } className={ styles.name } >
						<Link
							href={ subLang.url }
							target="_blank"
						>
							{ subLang.name }
						</Link>
						</li>
					))}
					</ul>
				)}
			</li>
          ))}
        </ul>
		{/* sns link */}
        <ul className={ styles.social_links }>
          { socialLinks.map(( socialLink, index ) => (
            <li key={ index } className={ styles[socialLink.class] }>
              <Link href={ socialLink.url } target="_blank"></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
