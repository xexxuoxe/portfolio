'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './footer.module.scss';

export default function FooterComponent() {
	return (
		<div id={ styles.siwon_footer }>

            <div className={ styles.ft_top }>
                <div className={ styles.container }>
                    <ul className={ styles.link_group }>
                        <li><Link href="//www.siwonschool.com/?s=school" target="_blank">회사소개</Link></li>
                        <li><Link href="//b2b.siwonschool.com/" target="_blank">단체수강</Link></li>
                        <li><Link href="//www.siwonschool.com/?s=alliance" target="_blank">제휴안내</Link></li>
                        <li><Link href="//recruit.siwonschool.com/?s=recruit&p=main" target="_blank">채용정보</Link></li>
                        <li className={ styles.m_hide }><Link href="//recruit.siwonschool.com/?s=recruit&p=main" target="_blank">강사채용</Link></li>
                        <li><Link href="//www.siwonschool.com/?s=map" target="_blank">찾아오시는 길</Link></li>
                    </ul>

                    <ul className={ styles.policy_group }>
                        <li><Link href="/?s=info&t=agreement">이용약관</Link></li>
                        <li><Link href="/?s=info&t=service">유료 서비스 이용약관</Link></li>
                        <li className={ styles.personal}><Link href="/?s=info&t=policy"><em>개인정보처리방침</em></Link></li>
                    </ul>

                    <div className={ styles.family_site }>
                        <a href="#site_list" className={ styles.select } id={ styles.btn_family }>
                            <span className={ styles.fam_stit }>family site</span>
                            <i className={ styles.sjwcon_caret_down }></i>
                        </a>

                        <div id={ styles.site_list }>
                            <div>
                                <ul>
                                    <li className={ styles.cate }>기초영어</li>
                                    <li><Link href="//www.siwonschool.com/" target="_blank">시원스쿨 기초영어</Link></li>
                                    <li><Link href="//superkids.siwonschool.com/" target="_blank">시원스쿨 키즈</Link></li>
                                    <li><Link href="//native.siwonschool.com/" target="_blank">시원스쿨 네이티브</Link></li>
                                    <li><Link href="//daily.siwonschool.com/?s=event&t=dailyenglish&utm_campaign=siwonschool&utm_source=site&utm_medium=free&utm_content=banner&utm_term=main_visual_right" target="_blank">시원스쿨 학습지</Link></li>
                                    <li className={ styles.cate }>LAB</li>
                                    <li><Link href="//lab.siwonschool.com/" target="_blank">시원스쿨 토익</Link></li>
                                    <li className={ styles.cate }>일/아시아</li>
                                    <li><Link href="//japan.siwonschool.com/" target="_blank">일본어</Link></li>
                                    <li><Link href="//china.siwonschool.com/" target="_blank">중국어</Link></li>
                                    <li><Link href="//vietnam.siwonschool.com/" target="_blank">베트남어</Link></li>
                                    <li><Link href="http://indonesia.siwonschool.com/" target="_blank">인도네시아어</Link></li>
                                    <li><Link href="http://thai.siwonschool.com/" target="_blank">태국어</Link></li>
                                    <li><Link href="http://myanmar.siwonschool.com/" target="_blank">미얀마어</Link></li>
                                    <li className={ styles.cate }>유럽어</li>
                                    <li><Link href="//spain.siwonschool.com/" target="_blank">스페인어</Link></li>
                                    <li><Link href="//france.siwonschool.com/" target="_blank">프랑스어</Link></li>
                                    <li><Link href="//germany.siwonschool.com/" target="_blank">독일어</Link></li>
                                    <li><Link href="//russia.siwonschool.com/" target="_blank">러시아어</Link></li>
                                    <li><Link href="//arabic.siwonschool.com/" target="_blank">아랍어</Link></li>
                                    <li><Link href="//italy.siwonschool.com/" target="_blank">이탈리아어</Link></li>
                                    <li><Link href="//hebrew.siwonschool.com/" target="_blank">히브리어</Link></li>
                                    <li><Link href="//turkey.siwonschool.com/" target="_blank">터키어</Link></li>
                                    <li className={ styles.cate }>기업교육</li>
                                    <li><Link href="//b2b.siwonschool.com/" target="_blank">기업교육</Link></li>
                                    <li className={ styles.cate }>강사채용</li>
                                    <li><Link href="//recruit.siwonschool.com" target="_blank">강사채용</Link></li>
                                </ul>
                            </div>

                            <Link href="#" className={ styles.sel_txt }><span className={ styles.fam_stit }>family site</span><i className={ `${styles.sjwcon_caret_down} ${styles.c2}` }></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ styles.ft_bottom }>
                <div className={ styles.container }>
                    <p className={ styles.ft_logo }><Image src="https://siwon-cdn.siwonschool.com/member/comm/footer_logo.png" width={115} height={78} alt="siwonschool" /></p>

                    <div className={ styles.wrap }>
                        <address>
                            <p className={ styles.txt01 }><span className={ styles.company }>㈜에스제이더블유인터내셔널</span><span>사업자등록번호 214-87-98782</span><span>통신판매업신고번호 제2010-서울서초1503호</span></p>
                            <p className={ styles.txt02 }><span>원격평생교육시설 신고번호 강남교육지원청 제 원-329호</span></p>
                            <p className={ `${styles.txt03} ${ styles.m_hide }` }><span>서울특별시 영등포구 영신로 166 영등포반도아이비밸리 7층,8층 대표 양홍걸</span><span>개인정보책임자 최광철</span></p>
                            <div className={ styles.m_hide }>
                                <p className={ styles.mt15 }><span>고객센터  <Link href="mailto:siwoncs@siwonschool.com">siwoncs@siwonschool.com</Link></span><span>마케팅/제휴문의  <Link href="mailto:marketer@siwonschool.com">marketer@siwonschool.com</Link></span></p>
                                <p><span>강사/저자문의  <Link href="mailto:recruit@siwonschool.com">recruit@siwonschool.com</Link></span><span>제안 및 고객(사업)최고책임자 <Link href="mailto:ceo@siwonschool.com">ceo@siwonschool.com</Link></span></p>
                            </div>
                        </address>

                        <div className={ styles.info_group }>
                            <ul>
                                <li className={ styles.tit }>cs<span className={ styles.m_hide }> center</span></li>
                                <li className={ styles.tel }>02) 6409-0878</li>
                                <li className={ `${styles.txt} ${styles.m_hide}` }><span>평&nbsp;&nbsp;&nbsp;일</span>09:00 ~ 18:00</li>
                                <li className={ `${styles.txt} ${ styles.m_hide }` }><span>토요일</span>09:00 ~ 14:00</li>
                            </ul>
                        </div>

                        <p className={ styles.copyright }>Copyright &copy; 2010 siwonschool. All Rights Reserved.</p>

                        <ul className={ styles.util_group }>
                            {/* 로그인 전 */}
                            <li><Link href="/?s=join">회원가입</Link></li>
                            <li><Link href="/?s=login">로그인</Link></li>
                            <li><Link href="">APP 다운</Link></li>

                            {/* 로그인 후 */}
                            {/* <li><a href="/?s=logout">로그아웃</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	)
}
