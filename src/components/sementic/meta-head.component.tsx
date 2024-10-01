import Head from "next/head";
export default function MetaHeadComponent({
    lang,
    title,
    description,
    keyword,
    image,
    twimage,
}) {
    return (
        <Head>
            <title>{ title || "시원스쿨 베트남어"}</title>
            <meta charSet="utf-8" />
            <meta name="apple-mobile-web-app-title" content="시원스쿨" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="description" content={ description || "기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳"} />
            <meta name="keyword" content={ keyword || "시원스쿨, 베트남어,시원스쿨 베트남어, 베트남어 배우기, 베트남어 회화, 베트남어 기초, 베트남어 학원, 베트남어 인강, 베트남어 번역, 베트남어 사전, 베트남어 전망, 베트남어 문법,베트남어 어휘,송유리 강사,김효정 강사,이수진 강사, 베트남어 시험" } />
            <meta property="og:title" content="대한민국 왕초보탈출 시원스쿨" />
            <meta property="og:description" content={ description || "기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳" } />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ `https://${lang}.siwonschool.com/` } />
            <meta property="og:site_name" content="시원스쿨" />
            <meta property="og:image" content={ image || "https://siwon-cdn.siwonschool.com/asia/meta/200x200.png" } />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="format-detection" content="telephone=no" />
            <link href="https://siwon-cdn.siwonschool.com/img/member/favicon.ico" rel="shortcut icon" />
            <link rel="apple-touch-icon-precomposed" href="https://siwon-cdn.siwonschool.com/pc/www/header/56x56.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://siwon-cdn.siwonschool.com/pc/www/header/114x114.png"></link>
            <meta name="twitter:image" content={ twimage || "https://siwon-cdn.siwonschool.com/asia/meta/400x400.png" } />
           {/*
            <meta name="twitter:card" content={ } />
            <meta name="twitter:url" content={ } />
           */}
            <meta name="twitter:description" content={description || "기초베트남어인강, 베트남어배우기, 베트남어학원, 베트남어회화, 베트남어알파벳"} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=1200" />
            <link rel="canonical" href={`https://${lang}.siwonschool.com/`} />
            <link rel="alternate" href={`https://${lang}.siwonschool.com/m/`} />
            <link href={`https://siwon-cdn.siwonschool.com/img/${lang}/favicon.ico`} rel="shortcut icon" />
            <link rel="apple-touch-icon-precomposed" href="https://siwon-cdn.siwonschool.com/asia/meta/56x56.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://siwon-cdn.siwonschool.com/asia/meta/114x114.png" />
            {/* FONT */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        </Head>
    );
}
