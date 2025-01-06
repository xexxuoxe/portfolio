/*
	meta tag sementic
	scr/components/sementic/meta.component.tsx
*/
'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import Head from 'next/head';

interface MetaContextType {
    lang: string;
    title: string;
    description: string;
    image: string;
    setMeta: (meta: Partial<MetaContextType>) => void;
}

const MetaContext = createContext<MetaContextType | undefined>(undefined);

export const useMetaContext = () => {
	const context = useContext(MetaContext);
    if (!context) {
        throw new Error('useMetaContext must be used within a MetaProvider');
    }
    return context;

};

export const MetaProvider = ({ children }: { children: ReactNode }) => {
    const [meta, setMeta] = useState<MetaContextType>({
        lang: 'ko',
        title: '기본 제목',
        description: '기본 설명',
        image: '/default-image.png',
        setMeta: (newMeta) => setMeta((prev) => ({ ...prev, ...newMeta })),
    });

    return (
        <MetaContext.Provider value={{ ...meta, setMeta }}>
            <MetaHeadComponent {...meta} />
            {children}
        </MetaContext.Provider>
    );
};

// MetaHeadComponent 정의
const MetaHeadComponent = ({ title, description, image }: MetaContextType) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* 추가적인 메타 태그 필요 시 여기에 추가 */}
        </Head>
    );
};


// const defaultMeta: MetaContextType = {
//     lang: "언어",
// 	title: '반디부디: 내가 직접 그리는 나의 인생지도',
// 	description:
// 	'이루고 싶은 목표를 지도에 남겨보세요. 목표와 관련된 다양한 스티커를 붙여 나만의 지도를 만들고 공유할 수 있어요.',
// 	keyword: [
// 		'반디부디',
// 		'bandiboodi',
// 		'인생지도',
// 		'신년계획',
// 		'계획',
// 		'목표설정',
// 		'목표달성',
// 		'자기계발',
// 		'회고',
// 		'응원',
// 	],
// 	url: 'https://www.bandiboodi.com',
// 	image: "기본 이미지 URL",
// 	ogImage: '/opengraph-image.png',
// };

// const MetaContext  = createContext<MetaContextType>(defaultMeta)

// export const useMetaContext = () => useContext(MetaContext);

// interface MetaProviderProps {
// 	children: ReactNode;
// }

// export function MetaProvider({ children }: MetaProviderProps) {
//     const [ meta, setMeta ] = useState<MetaContextType>(defaultMeta);

//     const updateMeta = ( newMeta: Partial<MetaContextType> ) => {
//         setMeta(prevMeta => ({ ...prevMeta, ...newMeta }));
//     };

//     return (
//         <MetaContext.Provider value={{ ...meta, setMeta: updateMeta }}>
//             {children}
//         </MetaContext.Provider>
//     );
// }

// export function MetaHeadComponent() {
//     const { lang, title, description, keyword, image } = useMetaContext();
//     return (
//         <Head>
// 			<title>{title}</title>
//             <meta charSet="utf-8" />
//             <meta name="apple-mobile-web-app-title" content="시원스쿨" />
//             <meta name="referrer" content="no-referrer-when-downgrade" />
// 			<meta name="description" content={description} />
//             <meta name="keyword" content={keyword} />
//             <meta property="og:title" content="대한민국 왕초보탈출 시원스쿨" />
//             <meta property="og:description" content={description} />
//             <meta property="og:type" content="website" />
//             <meta property="og:url" content={ `https://${lang}.siwonschool.com/` } />
//             <meta property="og:site_name" content="시원스쿨" />
//             <meta property="og:image" content={image} />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
//             <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="format-detection" content="telephone=no"/>
// 			<link href="https://siwon-cdn.siwonschool.com/img/member/favicon.ico" rel="shortcut icon" />
//             <link rel="apple-touch-icon-precomposed" href="https://siwon-cdn.siwonschool.com/pc/www/header/56x56.png" />
//             <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://siwon-cdn.siwonschool.com/pc/www/header/114x114.png"></link>
//             <meta name="twitter:image" content={image} />
//             <meta name="twitter:description" content={description} />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=1200" />
//             <link rel="canonical" href={`https://${lang}.siwonschool.com/`} />
//             <link rel="alternate" href={`https://${lang}.siwonschool.com/m/`} />
//             <link href={`https://siwon-cdn.siwonschool.com/img/${lang}/favicon.ico`} rel="shortcut icon" />
//             <link rel="apple-touch-icon-precomposed" href="https://siwon-cdn.siwonschool.com/asia/meta/56x56.png" />
//             <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://siwon-cdn.siwonschool.com/asia/meta/114x114.png" />
//             {/* FONT */}
//             <link rel="preconnect" href="https://fonts.gstatic.com" />
//             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" />
//             <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
//         </Head>
//     );
// }


