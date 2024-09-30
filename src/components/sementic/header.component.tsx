/* eslint-disable @next/next/no-head-element */
export default function HeaderComponent() {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="apple-mobile-web-app-title" content="시원스쿨"/>
            <meta name="referrer" content="no-referrer-when-downgrade"/>
            <meta property="keywords" content="시원, 시원스쿨, 영어교육, 영어, 잉글리쉬, 영어학습, 기초영어, 시원영어, 이시원"/>
            <meta property="description" content="왕초보 영어회화, 비즈니스, 면접, 모바일 강의, 온라인 기초영어"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://member.siwonschool.com"/>
            <meta property="og:site_name" content="시원스쿨"/>
            <meta property="og:title" content="대한민국 왕초보탈출 시원스쿨"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="format-detection" content="telephone=no"/>
            <link href="//siwon-cdn.siwonschool.com/img/member/favicon.ico" rel="shortcut icon"/>
            <link rel="apple-touch-icon-precomposed"  href="//siwon-cdn.siwonschool.com/pc/www/header/56x56.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="//siwon-cdn.siwonschool.com/pc/www/header/114x114.png"></link>
        </head>
    );
  }



  <?php

  // 일/아,유럽어 GNB 배너 공통 영역
  include $_SERVER['DOCUMENT_ROOT'].'/../common/header/gnb_site/site_common.php';

  $metadata = $site_metatag->getMetatag(); //함수호출

  //이전에 선언부가 있을때 해당 값으로 대체( 이벤트 랜딩 페이지 )
  if( empty($metatags['title']) ){
	  $metatags['title'] = $metadata['metatag_title'];
  }
  if( empty($metatags['desc']) ){
	  $metatags['desc'] = $metadata['metatag_description'];
  }
  if( empty($metatags['keywords']) ){
	  $metatags['keywords'] = $metadata['metatag_keyword'];
  }
  if( empty($metatags['og_image']) ){
	  $metatags['og_image'] = $metadata['metatag_og_image'];
  }
  $p = isset($_GET['p']) ? $_GET['p'] : '';
  ?>
  <!DOCTYPE html>
  <html lang="ko">
  <head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	  })(window,document,'script','dataLayer','GTM-PBTTXXT');</script>
  <!-- End Google Tag Manager -->

	  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5JBY005GCJ"></script>
  <script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-5JBY005GCJ');
  </script>


  <meta charset="utf-8">
  <meta name="referrer" content="no-referrer-when-downgrade" />
  <meta name="keyword" content="<?=( empty($metatags['keywords']) ) ? '시원스쿨, 베트남어,시원스쿨 베트남어, 베트남어 배우기, 베트남어 회화, 베트남어 기초, 베트남어 학원, 베트남어 인강, 베트남어 번역, 베트남어 사전, 베트남어 전망, 베트남어 문법,베트남어 어휘,송유리 강사,김효정 강사,이수진 강사, 베트남어 시험' : preg_replace('/\r\n|\r|\n/','',strip_tags($metatags['keywords'])); ?>">
  <meta name="description" content="<?=( empty($metatags['desc']) ) ? '기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳' : preg_replace('/\r\n|\r|\n/','',strip_tags($metatags['desc'])); ?>">
  <meta property="og:keywords" content="<?=( empty($metatags['keywords']) ) ? '시원스쿨, 베트남어,시원스쿨 베트남어, 베트남어 배우기, 베트남어 회화, 베트남어 기초, 베트남어 학원, 베트남어 인강, 베트남어 번역, 베트남어 사전, 베트남어 전망, 베트남어 문법,베트남어 어휘,송유리 강사,김효정 강사,이수진 강사, 베트남어 시험' : preg_replace('/\r\n|\r|\n/','',strip_tags($metatags['keywords'])); ?>">
  <meta property="og:description" content="<?=( empty($metatags['desc']) ) ? '기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳' : preg_replace('/\r\n|\r|\n/','',strip_tags($metatags['desc'])); ?>">
  <meta property="og:type" content="website">
  <meta property="og:url" content="//<?=$_SERVER['HTTP_HOST']?><?=$_SERVER['REQUEST_URI']?>">
  <meta property="og:site_name" content="<?=( empty($metatags['title']) ) ? '시원스쿨 베트남어' : $metatags['title']; ?>">
  <meta property="og:title" content="<?=( empty($metatags['title']) ) ? '시원스쿨 베트남어' : $metatags['title']; ?>">
  <meta property="og:image" content="<?=( empty($metatags['og_image']) ) ? '//siwon-cdn.siwonschool.com/asia/meta/200x200.png' : $metatags['og_image']; ?>">
  <meta name="twitter:image" content="<?=( empty($metatags['tw_image']) ) ? '//siwon-cdn.siwonschool.com/asia/meta/400x400.png' : $metatags['tw_image']; ?>">
  <meta name="twitter:card" content="<?=( empty($metatags['card']) ) ? 'summary' : $metatags['card']; ?>">
  <meta name="twitter:url" content="//<?=$_SERVER['HTTP_HOST']?><?=$_SERVER['REQUEST_URI']?>">
  <meta name="twitter:description" content="<?=( empty($metatags['desc']) ) ? '기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳' : preg_replace('/\r\n|\r|\n/','',strip_tags($metatags['desc'])); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="apple-mobile-web-app-title" content="시원스쿨 베트남어">
  <meta name="viewport" content="width=1200">
  <title><?=( empty($metatags['title']) ) ? '시원스쿨 베트남어' : $metatags['title']; ?></title>

  <link rel="canonical" href="https://vietnam.siwonschool.com/">
  <link rel="alternate" href="https://vietnam.siwonschool.com/m/">

  <link href="//siwon-cdn.siwonschool.com/img/vietnam/favicon.ico" rel="shortcut icon">
  <link rel="apple-touch-icon-precomposed"  href="//siwon-cdn.siwonschool.com/asia/meta/56x56.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="//siwon-cdn.siwonschool.com/asia/meta/114x114.png" />

  <!-- fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">

  <!-- css -->
  <link rel="stylesheet" href="//<?=$gl['assets_url']?>/css/reset.min.css">
  <link href="common/css/comm.css?<?=time()?>" rel="stylesheet">
  <link href="common/css/layout.css?<?=time()?>" rel="stylesheet">
  <link href="common/css/table.css?<?=time()?>" rel="stylesheet">
  <link href="common/css/layerpop_mov.css?<?=time()?>" rel="stylesheet">
  <link href="common/css/vietnam_style.css?<?=time()?>" rel="stylesheet">
  <link href="//<?=$gl['assets_url']?>/css/keyframes.css?<?=time()?>" rel="stylesheet">
  <link href="//<?=$gl['assets_url']?>/vendor/swiper/8.4.7/swiper-bundle.min.css" rel="stylesheet">
  <link href="//<?=$gl['assets_url']?>/module/event/comm/html/css/lab_event.min.css?<?=time()?>" rel="stylesheet">
  <link href="common/css/core.min.css?<?=time()?>" rel="stylesheet">
  <?php
	  if ( $module && file_exists('common/css/'.$module.'.min.css') ) {
		  echo '<link rel="stylesheet" href="common/css/'.$module.'.min.css?'.time().'">';
	  }
  ?>

  <!-- Criteo 로더 파일 -->
  <script type="text/javascript" src="//dynamic.criteo.com/js/ld/ld.js?a=49701" async="true"></script>
  <!-- END Criteo 로더 파일 -->

  <!-- library -->
  <script src="//<?=$gl['assets_url']?>/vendor/jquery/jquery-3.5.1.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/jquery/jquery-migrate-3.3.2.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/swiper/8.4.7/swiper-bundle.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/bxslider/4.2.12.custom.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/jquery/jquery-ui.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/etc/jquery.cookie.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/etc/imgLiquid-min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/etc/lodash.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/vendor/etc/lazysizes.min.js" async></script>
  <script src="//<?=$gl['assets_url']?>/vendor/countdown/jquery.countdown.min.js"></script>
  <script src="//<?=$gl['assets_url']?>/js/pc/comm.js?<?=time()?>"></script>
  <?php if ( $module == 'main' && date('Ymd') <= '20230101' ) { ?>
  <script src="https://app.embed.im/snow.js" defer></script>
  <? } ?>

  <script src="common/js/vietnam_script.js?<?=time()?>"></script>
  <script src="module/<?=$module?>/<?=$module?>.js?<?=time()?>"></script>

  <script language="javascript" src="https://pgweb.uplus.co.kr/WEB_SERVER/js/escrowValid.js"></script>
  <?php if($_SERVER['HTTPS'] == "on"){ ?>
  <script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
  <?php }else{ ?>
  <script src="//dmaps.daum.net/map_js_init/postcode.v2.js"></script>
  <?php } ?>
  <script>var MEMBER_URL = '<?=$MemURL?>';</script>
  <script type="application/ld+json">
  {
	  "@context": "http://schema.org",
	  "@type": "Organization",
	  "name": "시원스쿨베트남어",
	  "url": "https://vietnam.siwonschool.com/",
	  "sameAs": [
		  "https://www.facebook.com/siwonvietnam/",
		  "https://blog.naver.com/siwonvietnam",
		  "https://www.instagram.com/siwonvietnam/",
		  "https://www.youtube.com/channel/UC19bLFMBYY1YChAWQ7sNl8A",
		  "https://tv.naver.com/siwonvietnam/",
		  "https://m.post.naver.com/siwonvietnam"
	  ]
  }
  </script>

  </head>
  <body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBTTXXT"
					height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?php require_once $_SERVER['DOCUMENT_ROOT']."/../common/header/fam_renew.html" ?>

  <?php //사이트별 메인 색상 테마
	  require_once $_SERVER['DOCUMENT_ROOT']."/../common/module/semantic/asia/theme_option.php"
  ?>

  <?php if( $s=="main" ){
	  // 메인 최상단 탑 배너 (일/아 공통)
	  require_once $_SERVER['DOCUMENT_ROOT']."/../common/module/main/asia/html/header_topban.php";
  }?>

  <?php if($s !="main" &&$s !="event" && $s !="payment" && $p!="detail"){?>
  <div class="topban2">
	  <div class="sl"><ul>
	  <?=$sub_top_banner?>
	  </ul></div>
  </div>
  <?php } ?>

  <div id="siwon_wrap">
	  <?php
		  // 일/아 통합 - siwon_header
		  include $_SERVER['DOCUMENT_ROOT'].'/../common/header/gnb_asia.html';
	  ?>

  <?php if($s !="main" && $s !="event" && $s !="payment" ){
	  include 'sub_navi.html';
  }?>


{/* 메뉴 햄버거 박스 */}
<?php
	include $_SERVER['DOCUMENT_ROOT'].'/../common/header/gnb_site/gnb_site.php';

	$japan_chk = ($gsite=="japan")?true:false;
	$login_chk = (!empty($_SESSION['Log_no']))?true:false;
	if(!empty($_SESSION['Log_no'])){
		$_COOKIE[$_SESSION['Log_no']."member_flag"] = isset($_COOKIE[$_SESSION['Log_no']."member_flag"]) ? $_COOKIE[$_SESSION['Log_no']."member_flag"] : '';
		$st_log_grade = isset($_SESSION['Log_grade']) ? strtolower(substr($_SESSION['Log_grade'], 0, 1)) : '';
		$member_flag_name = ($gsite=="japan")?'(<span class="member_flag">'.$_COOKIE[$_SESSION['Log_no']."member_flag"].'</span>)</strong><i class="ico_grade '.$st_log_grade.'">&nbsp;</i>':'</strong>';
	}


	switch ($gsite) {
		case 'thai':
			$notice_url = '/?s=customer&p=notice';
			break;
		default :	// japan, china, vietnam, indonesia
			$notice_url = '/?s=customer&t=notice';
			break;
	}

	$sql = "SELECT * FROM lcms_siwon.banner_list WHERE bid = 'PC_MAIN_TOP_RIGHT_FLOATING_BNR' AND site = '".$gsite."' AND edate >= '".date('Y-m-d H:i:s')."' AND d_state = 'N' AND useYN != 'N' ORDER BY sort ASC, sno DESC LIMIT 0,1";

	$rs = $db->execute($sql);
	$mtrdata = array();
	if ($row = $db->getData($rs)) {
		$mtrdata[] = $row;
		$floatting_bnr_exists = 'Y';
	}

?>
<!--?php 	include BASE_HOME_URL."/common/module/event/comm/htmls/pop_survey.php";?-->
<link rel="stylesheet" href="//<?=$gl['assets_url']?>/module/semantic/<?=$depart?>/html/css/header.min.css?<?=time()?>">

<header id="siwon_header" class="<?=$gsite?>">
	<div class="header_top">
		<div class="inner">
			<h1 class="logo">
				<a href="/">
					<span class="blind">시원스쿨 <?=$gsite_nm?></span>
					<img src="//siwon-cdn.siwonschool.com/asia/layout/logo.png" alt="<?=$gsite_nm?> 로고">
				</a>
			</h1>

			<div class="util">
				<h2 class="blind">유용한 메뉴</h2>

				<ul>
					<?php if($login_chk == false){ ?>
						<li><a href="javascript:void(0);" onclick="loginChk();">로그인</a></li>
						<li><a href="https://<?=$gl['hostkey']?>member.siwonschool.com/?s=join">회원가입</a></li>
					<?php } else { ?>
						<li>
							<a href="javascript:void(0);" onClick="member_detail();" class="myinfo_menu"><strong><?=$_SESSION['Log_k_name_utf8']?>님<?=$member_flag_name?>을 응원합니다.</a>
							<div class="myinfo" id="member_detail"></div>
						</li>
						<li><a href="/?s=logout">로그아웃</a></li>
					<?php } ?>
					<li><a href="/?s=customer">고객센터</a></li>
					<li><a href="<?=$notice_url?>">공지사항</a></li>
				</ul>
			</div>

			<div class="menu_area">
				<div class="random_ban">
					<?=$HEADER_RANDOM?>
				</div>

				<div class="user_menu">
					<h2 class='blind'>사용자 메뉴</h2>

					<ul class="user_list">
						<?php if($gsite != "myanmar") { ?>
						<li class="survey"><a href="/?s=event&p=survey" aria-label="설문조사"></a></li>
						<?php } ?>
						<?php if ( $japan_chk ) { ?>
							<?php if ( $login_chk == false ) { ?>
								<li class="notice"><a href="javascript:void(0);" onClick="loginChk();"  aria-label="알람기능"></a>
							<?php } else { ?>
								<li class="notice">
									<a href="javascript:void(0);" id="myalarm" class="alarm_num" aria-label="알람기능"></a>

									<div class="layer noti">
										<div class="head_area">
											<h3 class="tit">알림</h3>
											<a href="/?s=mypage&p=alarm" class="bt_go">MY 알림 &gt;</a>
											<a href="javascript:void(0);" class="bt_close">닫기</a>
										</div>

										<div class="del_area">
											<a href="javascript:void(0);" onClick="alarm_del('all');" class="all_del">모두 삭제</a>
										</div>

										<div class="list_area">
											<ul class="list" id="alarm_list"></ul>
										</div>
									</div>
								</li>
							<?php } ?>
						<?php } ?>
						<li class="mypage">
							<a href="javascript:void(0);" aria-label="마이페이지"></a>

							<div class="layer my">
								<ul>
									<?php if ( $japan_chk ) { // 일본어만 별도 처리 ?>
										<?php if($login_chk == false){ ?>
											<li><a href="javascript:void(0);" onClick="loginChk();">마이페이지</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">수강신청내역</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">주문/배송 조회</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">내 글 관리</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">SJ멤버십</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">MY 알림</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">내 정보 관리</a></li>
										<?php } else { ?>
											<li><a href="/?s=mypage">마이페이지</a></li>
											<li><a href="/?s=mypage#anchor_payinfo">수강신청내역</a></li>
											<li><a href="/?s=mypage#anchor_delivery">주문/배송 조회</a></li>
											<li><a href="/?s=mypage#anchor_mywrite">내 글 관리</a></li>
											<li><a href="/?s=mypage&p=grade">SJ멤버십</a></li>
											<li><a href="/?s=mypage&p=alarm">MY 알림</a></li>
											<li><a href="https://<?=$gl['hostkey']?>member.siwonschool.com/?s=modify">내 정보 관리</a></li>
											<?php if ( $is_admin ) { ?>
												<li><a href="/?s=admin" alt="GNB">데이터등록</a></li>
											<?php } ?>
											<?php if ( in_array($_SESSION['Log_id'],array('unmove','dreamji87','redsoyoen')) ) { ?>
												<li><a href="/?s=mypage&p=teacher" alt="GNB">강사정산</a></li>
											<?php } ?>
										<?php } ?>
									<?php } else { ?>
										<?php if ( $login_chk == false ) { ?>
											<li><a href="javascript:void(0);" onClick="loginChk();">마이페이지</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">수강신청내역</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">주문/배송 조회</a></li>
											<li><a href="javascript:void(0);" onClick="loginChk();">내 정보 관리</a></li>
										<?php } else { ?>
											<li><a href="/?s=mypage">마이페이지</a></li>
											<li><a href="/?s=mypage#anchor_payinfo">수강신청내역</a></li>
											<li><a href="/?s=mypage#anchor_delivery">주문/배송 조회</a></li>
											<li><a href="https://<?=$gl['hostkey']?>member.siwonschool.com/?s=modify">내 정보 관리</a></li>
										<?php } ?>
									<?php } ?>
								</ul>
							</div>
						</li>

						<?php if ( $login_chk == false ) { ?>
							<li class="coupon"><a href="javascript:;" onClick="loginChk();" aria-label="쿠폰"></a></li>
							<li class="cart"><a href="javascript:;" onClick="loginChk();" aria-label="장바구니"></a></li>
						<?php } else { ?>
							<li class="coupon"><a href="/?s=mypage#anchor_coupon" class="coupon_num" aria-label="쿠폰"></a></li>
							<li class="cart"><a href="/?s=cart" class="cart_num" aria-label="장바구니"></a></li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="gnb_wrap wrap_fixarea">
		<div class="inner">
			<nav class="gnb_area">
				<h2 class="blind">사이트메뉴</h2>

				<a href="javascript:void(0);" class="all_menu"><span>전체메뉴</span></a>

				<ul class="gnb_list">
					<?=$gnb_list?>
				</ul>

				<?php if ( $login_chk == false ) {?>
					<a href="javascript:void(0);" onClick="loginChk();" class="myclass_btn">
						<span>내 강의실</span>
					</a>
				<?php } else {?>
					<a href="/?s=myclass" class="myclass_btn">
						<span>내 강의실</span>
					</a>
				<?php } ?>
			</nav>
		</div>
	</div>

	<?php if ( ($s == "main") && isset($floatting_bnr_exists) ){ ?>
	<div class="asia_float_ban">
		<a href="javascript:void(0);" class="bt_close" aria-label="close"></a>
		<div class="inbox">
			<?php if (!empty($mtrdata[0]['link'])) { ?>
			<a href="<?=$mtrdata[0]['link']?>" target="<?=$mtrdata[0]['target']?>"><img src="//data.siwonschool.com/<?=$mtrdata[0]['bimg_src']?>" alt=""></a>
			<?php } else { ?>
			<img src="//data.siwonschool.com/<?=$mtrdata[0]['bimg_src']?>" alt="">
			<?php } ?>
		</div>
	</div>
	<script>
		$('.asia_float_ban .bt_close').on('click',function(){
			$('.asia_float_ban').fadeOut(300);
		});
	</script>
	<?php } ?>

</header>

<script>
	// 알림 레이어
	$('.user_list .notice').on('click', function() {
		$(this).find('.layer').stop().slideToggle(100);
		$('.user_list .mypage .layer').hide();
	});

	$('.user_list .notice .all_del').on('click', function() {
		$(this).find('.layer').stop().slideToggle(100);
	});

	$('.util .myinfo_menu').click(function() {
		$('.user_list .mypage .layer , .user_list .notice .layer').hide();
		$('.myinfo').stop().slideToggle(100);
	});

	//마이페이지 레이어
	$('.user_list .mypage').on('click', function() {
		$(this).find('.layer').stop().slideToggle(100);
		$('.user_list .notice .layer').hide();
	});

	//수강신청 슬라이드 배너
	<?php
	if(SITE != 'japan') {
	?>

	if($('.product_sl').length > 0) {
		var prodSl = new Swiper('.product_sl .swiper-container', {
			init: false,
			autoplay: {
				delay: 5000,
			},
			slidesPerView: 1,
			loop: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
		});

		$('.gnb_list li:has(.gnb_prod_sub)').hover(function() {
			prodSl.init();
			prodSl.update();
		});
	}
	<?php
	}
	?>

	if( ! $('#no_gnbFix').length ) {
		var gnbTop = $('.wrap_fixarea').offset().top;

		$(window).on('scroll', function () {
			if ( $(window).scrollTop() > gnbTop ) {
				$('.wrap_fixarea').addClass('fix_top');
			} else {
				$('.wrap_fixarea').removeClass('fix_top');
			}
		});

		if ( $(window).scrollTop() > gnbTop ) {
			$('.wrap_fixarea').addClass('fix_top');
		}
	}

	$(document).ready(function() {
		var allmenu_contents = $('.allmenu_contents');
		var allmenu_overlay = $('.allmenu_overlay');

		$('.all_menu').on('click', function() {
			var winTop = $(window).scrollTop();
			var offset = $(this).offset().top;
			var center = winTop - 40 + ( $(window).height() - allmenu_contents.height() ) / 2;

			if ( winTop >= gnbTop ) {
				allmenu_contents.css({'position': 'absolute', 'top': center});
			} else {
				allmenu_contents.css({'position': 'absolute', 'top': offset});
			}

			allmenu_contents.fadeIn();
			allmenu_overlay.fadeIn();
		});

		var allmenu_close = function() {
			allmenu_contents.fadeOut();
			allmenu_overlay.fadeOut();
		}
		$('.allmenu_close').on('click', function() {
			allmenu_close();
		});

		allmenu_overlay.on('click', function() {
			allmenu_close();
		});

		allmenu_contents.on('click', 'a[href*="#"]', function() {
			allmenu_close();
		});


		//GNB내 다양한 카운팅 취합
		if($(".coupon_num").length > 0){
			$.ajax({
				url:"/?s=main&a=act_inc",
				dataType:"JSON",
				type : "POST",
				data : {mode:"util_nums"},
				error:function(request,status,error){
				},
				success:function(ret){
					$(".alarm_num").append(ret.alarm_num);
					$("#alarm_list").html(ret.alarm_list);
					$(".coupon_num").append(ret.coupon_num);
					$(".cart_num").append(ret.cart_num);

					// 스터디 플래너 관련 팝업 및 버튼 수정
					var alert_Layer_html = "";
					if($('#alert_Layer .inner').length > 0) {
						if(ret.is_plan == true) {
							url = "/?s=myclass&p=planner&t=plan_view";
							if(ret.is_new_lesson == true && ret.is_extend_info == true && ret.is_plan_click == false) {
								$('.sec_head .wrap_myinfo .box_btm li.l3').addClass('new');
								alert_Layer_html += "<h3>새로 추가된 강의와 연장된 수강일이 있습니다. <br>학습 계획을 수정하시겠습니까?</h3>";
								alert_Layer_html += "<div class=\"bt_group\">";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_modify\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','Y');\">예</a>";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_view\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','N');\">아니오</a>";
								alert_Layer_html += "</div>";
								$('#alert_Layer .inner').html(alert_Layer_html);
								layerPopClose();
							} else if(ret.is_new_lesson == true && ret.is_plan_click == false) {
								$('.sec_head .wrap_myinfo .box_btm li.l3').addClass('new');
								alert_Layer_html += "<h3>새로 추가된 강의가 있습니다. <br>학습 계획을 수정하시겠습니까?</h3>";
								alert_Layer_html += "<div class=\"bt_group\">";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_modify\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','Y');\">예</a>";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_view\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','N');\">아니오</a>";
								alert_Layer_html += "</div>";
								$('#alert_Layer .inner').html(alert_Layer_html);
								//layerPopClose();
							} else if(ret.is_extend_info == true && ret.is_plan_click == false) {
								$('.sec_head .wrap_myinfo .box_btm li.l3').addClass('new');
								alert_Layer_html += "<h3>연장된 수강일이 있습니다. <br>학습 계획을 수정하시겠습니까?</h3>";
								alert_Layer_html += "<div class=\"bt_group\">";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_modify\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','Y');\">예</a>";
								alert_Layer_html += "<a href=\"/?s=myclass&p=planner&t=plan_view\" target=\"_blank\" onclick=\"event_click_mouse('PLANNER','N');\">아니오</a>";
								alert_Layer_html += "</div>";
								$('#alert_Layer .inner').html(alert_Layer_html);
								layerPopClose();
							} else {
								$('#study_planner_btn').attr('href','/?s=myclass&p=planner&t=plan_view');
								$('#study_planner_btn').attr('target','_blank');
								$('#study_planner_btn').removeAttr('onclick');
							}
						} else {
							$('#study_planner_btn').attr('href','/?s=myclass&p=planner');
							$('#study_planner_btn').attr('target','_blank');
							$('#study_planner_btn').removeAttr('onclick');
						}
					}
				}
			});
		}

		//GNB내 이벤트 카운팅,리스트 취합
		if ( $('.evt_cnt').length > 0 ) {
			$.ajax({
				url:"/?s=main&a=act_inc",
				dataType:"JSON",
				type : "POST",
				data : {mode:"evt_num"},
				error:function(request,status,error){
				},
				success:function(ret){
					$(".evt_cnt").html(ret.evt_num);
					$(".evt_list").html(ret.list);
				}
			});
		}
	});



	// 2017-03-20 hwlee : 우측배너 클릭수 집계
	function FnUpdateRightBanner(sno){
		$.ajax({
			url:"/?s=main&a=act_inc",
			type:"POST",
			dataType: "json",
			async:true,
			data:{mode:"clickBanner", sno:sno},
			error : function(request,status,error){
				//alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);

			},
			success : function(data){
				//console.log(data);
				/*if (target=="_blank"){
					var newWindow = window.open("about:blank");
					newWindow.location.href = link;
				}else{
					location.href = link;
				}*/
			},
			fail : function(){

			}
		});
	}
</script>

