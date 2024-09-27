
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import './globals.scss'
import { StoreProviders } from '@store/stroe.provider'
import ErrorWrapper from '@lib/error/errorWrapper.boundary';
import { AlertProvider } from '@lib/alert/alert.context'
import { LoadingProvider } from '@lib/loading/loading.context';

import HeaderComponent from '@components/sementic/header.component'
import GnbComponent from '@components/sementic/gnb.component'
import FooterComponent from '@components/sementic/footer.component'
import { ResponsiveProvider } from '@lib/context/responsive.context'


export const metadata: Metadata = {
    title: '대한민국 왕초보탈출 시원스쿨',
    description: '왕초보 영어회화, 비즈니스, 면접, 모바일 강의, 온라인 기초영어',
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="ko">
            <ErrorWrapper>
                <StoreProviders>
                    <HeaderComponent />
                        <body id="siwon_wrap">
                            <AlertProvider>
                                <LoadingProvider>
                                    <Suspense fallback={ <Loading /> }>
                                        <ResponsiveProvider>
                                            <GnbComponent></GnbComponent>
                                            {children}
                                        </ResponsiveProvider>
                                        <FooterComponent />
                                    </Suspense>
                                </LoadingProvider>
                            </AlertProvider>
                        </body>
                </StoreProviders>
            </ErrorWrapper>
        </html>
    )
}
