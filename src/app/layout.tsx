'use client';

// import type { Metadata } from 'next'
import { Suspense } from 'react';
import { Metadata } from 'next';
import Loading from './loading';
import ErrorWrapper from '@lib/error/errorWrapper.boundary';
import { AlertProvider } from '@lib/alert/alert.context';
import { LoadingProvider } from '@lib/loading/loading.context';
import { ResponsiveProvider } from '@lib/context/responsive.context';
import { SessionProvider } from "next-auth/react";
import './globals.scss';

const metadata: Metadata = {
	title: '포트폴리오 - 이은서',
	description: '프론트엔드 개발자 이은서 포트폴리오',
	openGraph: {
		title: '프론트엔드 포트폴리오 - 이은서',
		description: 'Next.js 기반의 이은서 포트폴리오 사이트입니다.',
		url: 'https://yourdomain.com',
		siteName: '홍길동 포트폴리오',
		images: [
			{
				url: '/images/ico_xexxuoxe2.png',
				width: 100,
				height: 40,
				alt: '포트폴리오 썸네일',
			},
		],
		locale: 'ko_KR',
		type: 'website',
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

	return (
		<html lang="ko">
			<ErrorWrapper>
				<body>
					<AlertProvider>
						<LoadingProvider>
							<Suspense fallback={<Loading />}>
								<ResponsiveProvider>
									<SessionProvider>
										{children}
									</SessionProvider>
								</ResponsiveProvider>
							</Suspense>
						</LoadingProvider>
					</AlertProvider>
				</body>
			</ErrorWrapper>
		</html>
	)
}
