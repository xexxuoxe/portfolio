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







<?php
if($s=="myclass" && !empty($_SESSION['Log_no'])){
	/*
	$sql = "SELECT * FROM ".SITE.".".USERNOTICE." WHERE uno = ".$_SESSION['Log_no']." AND checkYn = 'N' AND sdate <= NOW() AND edate >= NOW() AND notice_seq = 1";
	$db->execute($sql);
	$info = $db->getData();

	if(!empty($info['msg'])){
		if($info['notice_type']=="alert"){
			echo "
			<script type=\"text/javascript\">
				alert(\"".$info['msg']."\");
			</script>
			";

			$sql = "UPDATE ".SITE.".".USERNOTICE." SET checkYn = 'Y', checkDate = NOW() WHERE uno = ".$_SESSION['Log_no']." AND notice_seq = 1";
			$db->execute($sql);
		}
	}
	*/
}

	$host = explode(".",$_SERVER['HTTP_HOST']);
	if(substr($host[0], 0, 1)=="d"){
		$_member_host = "dmember";
	}else if(substr($host[0], 0, 1)=="t"){
		$_member_host = "tmember";
	}else{
		$_member_host = "member";
	}
?>

<?php
	$host = explode(".",$_SERVER['HTTP_HOST']);
	if(substr($host[0], 0, 1)=="d"){
		$_member_host = "dmember";
	}else if(substr($host[0], 0, 1)=="t"){
		$_member_host = "tmember";
	}else{
		$_member_host = "member";
	}
?>

<form name="frm_join" method="post" action="https://<?=$_member_host?>.siwonschool.com/?s=sns_login">
<input type="hidden" id="sns_domain" name="sns_domain" value="<?=SITE?>" />
<input type="hidden" id="sns_email" name="sns_email" value="" />
<input type="hidden" id="sns_id" name="sns_id" value="" />
<input type="hidden" id="sns_name" name="sns_name" value="" />
<input type="hidden" id="sns_gender" name="sns_gender" value="" />
<input type="hidden" id="sns_birthday" name="sns_birthday" value="" />
<input type="hidden" id="sns_enc_id" name="sns_enc_id" value="" />
<input type="hidden" id="sns_age" name="sns_age" value="" />
<input type="hidden" id="sns_sort" name="sns_sort" value="" />
</form>

<!-- 레이어 팝업: 교재 자세히보기 -->
<div class="wrap_layer_popup pop_book" id="pop_book">
	<h2 class="pop_tit">교재소개<a href="javascript:;" class="layer_popup_close"><img src="//siwon-cdn.siwonschool.com/img/vietnam/comm/bt_close01.png" alt="닫기" /></a></h2>
	<div class="wrap_layer_cont" id="bookdetail">
	</div>
</div>
<a href="javascript:;" id="pop_book" class="layer_popup"></a>
<!-- // 레이어 팝업: 교재 -->

<input type="hidden" name="book" value="<?=isset($_GET['book']) ?$_GET['book']:''?>">
<script type="text/javascript">
$(document).ready(function(){
	var bcode = "<?=isset($_GET['bcode']) ? $_GET['bcode']:''?>";
	var logid = "<?=isset($_SESSION['Log_id']) ? $_SESSION['Log_id']:''?>";

	if(bcode!="" && logid != ""){
		$("input#ck_"+bcode).prop("checked",true);
		var anchor_book_pos = $("#anchor_book").position();
		trade_layer();

		if(window.location.hash=="#anchor_book"){
		$(".pop_apply").css("top",(anchor_book_pos.top+200)+"px");
		}
	}else if(bcode!="" && logid == ""){
		loginChk("<?=isset($_SESSION['Log_id']) ? $_SESSION['Log_id']:''?>");
	}

	if($("input[name=book]").val()){
		var obj = $("a#pop_book[bookno='"+$("input[name=book]").val()+"']");
		var pos = obj.closest("div").position();
		$(document).scrollTop(pos.top);
		obj.trigger("click");
	}

});
</script>

<div class="allmenu_contents">
    <a href="javascript:void(0);" class="allmenu_close" aria-label="전체 메뉴 닫기"></a>

    <div class="menu_con">
        <table>
            <colgroup>
                <col style="width:160px;"><col>
            </colgroup>
            <tbody>
                <tr>
					<th>시원스쿨 베트남어</th>
					<td>
						<ul class="list_type">
							<li><a href="/?s=info&p=info">시원스쿨 베트남어</a></li>
							<li><a href="/?s=info&p=siwonpen">시원펜 베트남어 학습법</a></li>
							<li><a href="/?s=info&p=language">남북부 언어 발음 차이</a></li>
						</ul>
					</td>
                </tr>
                <tr>
                    <th>수강신청</th>
                    <td>
                        <ul class="list_type2">
                            <li><a href="/?s=event&p=365membership">365 멤버십</a></li>
							<li><a href="/?s=event&p=vsl">VSL 패키지</a></li>
							<li><a href="/?s=event&p=goodmorning">베트남어 왕초보 탈출</a></li>
							<li><a href="/?s=event&p=opic">베트남어 오픽</a></li>
							<li><a href="/?s=event&p=govietnam">GO! 독학 베트남어 첫걸음</a></li>
							<li><a href="/?s=event&p=pkg_ipad">아이패드 패키지</a></li>
							<li><a href="//daily.siwonschool.com/?s=event&t=vietnam" target="_blank">베트남어 학습지</a></li>
							<li><a href="/?s=event&p=master">홍빛나 마스터 말문법</a></li>
							<li><a href="/?s=event&p=siwonpen">시원펜</a></li>
							<li><a href="/?s=event&p=tab_v3">베트남어탭</a></li>
							<li><a href="/?s=products#anchor_single">단과</a></li>
							<li><a href="/?s=products#anchor_book">교재/MP3</a></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>수강후기</th>
                    <td>
                        <ul class="list_type">
                            <li><a href="/?s=community&p=review#page_anchor">베스트 수강후기</a></li>
							<li><a href="/?s=community&p=review#anchor_board">100% 리얼 수강후기</a></li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <th>선생님</th>
                    <td>
						<ul class="list_type2">
                            <li class="label">VSL</li>
                            <li><a href="/?s=teacher&p=ysa">윤선애</a></li>
                        </ul>
						<ul class="list_type2">
							<li class="label">발음</li>
							<li><a href="/?s=teacher&p=duyen">쥬엔</a></li>
						</ul>
						<ul class="list_type2">
                            <li class="label">왕초보</li>
                            <li><a href="/?s=teacher&p=lsj">이수진</a></li>
                        </ul>
						<ul class="list_type2">
							<li class="label">회화/문법</li>
							<li><a href="/?s=teacher&p=hbn">홍빛나</a></li>
							<li><a href="/?s=teacher&p=lsj">이수진</a></li>
							<li><a href="/?s=teacher&p=syj">손연주</a></li>
							<li><a href="/?s=teacher&p=syr">송유리</a></li>
							<li><a href="/?s=teacher&p=cga">최고아라</a></li>
							<li><a href="/?s=teacher&p=plm">팜레민</a></li>
							<li><a href="/?s=teacher&p=khj">김효정</a></li>
						</ul>
						<ul class="list_type2">
							<li class="label">비지니스</li>
							<li><a href="/?s=teacher&p=ysa">윤선애</a></li>
						</ul>
						<ul class="list_type2">
							<li class="label">OPIc/OPI</li>
							<li><a href="/?s=teacher&p=syj">손연주</a></li>
							<li><a href="/?s=teacher&p=syr">송유리</a></li>
						</ul>
                        <ul class="list_type2">
                            <li class="label">전문가과정</li>
                            <li><a href="/?s=teacher&p=plm">팜레민</a></li>
                        </ul>
                    </td>
                </tr>
				<tr>
					<th>무료학습</th>
					<td>
						<ul class="list_type">
                            <li><a href="/?s=free&p=freemovie">무료강의</a></li>
							<li><a href="/?s=free&p=leveltest">레벨테스트</a></li>
							<li><a href="/?s=free&p=todayword">오늘의 단어</a></li>
							<li><a href="/?s=exam&p=opi">OPI 시험</a></li>
							<li><a href="/?s=free&p=nowvietnam">지금 베트남은</a></li>
						</ul>
					</td>
				</tr>
                <tr>
					<th>학습지원센터</th>
					<td>
						<ul class="list_type">
                            <li><a href="/?s=community&p=teacher_diary">선생님 다이어리</a></li>
							<li><a href="/?s=community&p=today_ready">오늘의 각오</a></li>
							<li><a href="/?s=community&p=study_qna">공부 질문하기</a></li>
							<li><a href="/?s=community&p=study_file">공부 자료실</a></li>
						</ul>
					</td>
				</tr>
                <tr>
                    <th>이벤트</th>
                    <td>
                        <ul class="list_type evt_list">
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>고객센터</th>
                    <td>
                        <ul class="list_type">
                            <li><a href="/?s=customer&t=notice">공지사항</a></li>
							<li><a href="/?s=customer&t=faq">자주하는 질문</a></li>
							<li><a href="/?s=customer&t=onnon">1:1문의</a></li>
							<li><a href="/?s=customer#remote_call">원격지원</a></li>
							<li><a href="<?=RECRUIT_TEACHER_URL?>" target="_blank">강사채용</a></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="sec_btm">
        <div class="desc">시원스쿨 베트남어의 <span class="point">다양한 소식</span>을 빠르게 만날 수 있어요!</div>

        <div class="sns_links">
            <ul>
                <li><a href="https://www.youtube.com/channel/UC19bLFMBYY1YChAWQ7sNl8A" class="sns_utube" target="_blank"><span>유튜브</span></a></li>
                <li><a href="https://tv.naver.com/siwonvietnam/" class="sns_nplay" target="_blank"><span>네이버 TV</span></a></li>
                <li><a href="https://www.instagram.com/siwonvietnam/?hl=ko" class="sns_insta" target="_blank"><span>인스타그램</span></a></li>
                <li><a href="https://blog.naver.com/siwonvietnam" class="sns_nblog" target="_blank"><span>블로그</span></a></li>
                <li><a href="https://www.facebook.com/siwonvietnam/" class="sns_fb" target="_blank"><span>페이스북</span></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="allmenu_overlay"></div>
<?php //#12695. [일/중/베] 신규 배너 작업 요청의 건
if($module != "main" && $s == "event") {
require_once $_SERVER['DOCUMENT_ROOT'].'/../common/module/main/asia/html/main_popup.php';
}
?>
<?php
	/* 설문조사  */
	require_once $_SERVER['DOCUMENT_ROOT'] . '/../common/module/event/comm/htmls/pop_survey.php';
	$contents = "";
?>


<?php
	/* 일아 통합 footer */
	require_once $_SERVER['DOCUMENT_ROOT'].'/../common/contents/footer_asia.html';
?>

<?php
	// 마우스 이탈 방지 팝업
	require_once $_SERVER['DOCUMENT_ROOT']."/module/sementic/ccp_pop.html";
?>


<?php if(isset($tcode) && is_array($tcode) && count($tcode)){ ?>
<script type="text/javascript">
	<?php foreach($tcode as $k => $v){?>
		setPrecode('<?=$v?>');
	<?php } ?>
</script>
<?php } ?>

<?php
	include $_SERVER['DOCUMENT_ROOT'].'/module/track/include_track_body_vietnam.php';
?>


<a href="javascript:scroll_to_anchor('siwon_header')" id="body_top"><img src="//siwon-cdn.siwonschool.com/img/vietnam/comm/bt_page_top.gif" alt="top"></a>


<?php //시크릿한정쿠폰 토스트 배너
	require_once $_SERVER['DOCUMENT_ROOT'].'/../common/module/banner/asia/toast_bnr.php';
?>
<?php //전화상담
	require_once $_SERVER['DOCUMENT_ROOT']."/../common/module/banner/asia/telcs_pop.html";
?>

</div><!-- // siwon_wrap -->
</body>
</html>
