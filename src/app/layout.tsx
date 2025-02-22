'use client';

// import type { Metadata } from 'next'
import { Suspense } from 'react';
import Loading from './loading';
import { StoreProviders } from '@store/stroe.provider';
import ErrorWrapper from '@lib/error/errorWrapper.boundary';
import { AlertProvider } from '@lib/alert/alert.context';
import { LoadingProvider } from '@lib/loading/loading.context';
import NavComponent from '@components/sementic/nav.component'
import { ResponsiveProvider } from '@lib/context/responsive.context';
import SmoothScroll from '@lib/scroll/smooth.componen';
import './globals.scss'

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {

    return (
        <html lang="ko">
            <ErrorWrapper>
                <StoreProviders>
					<MetaProvider>
							<body>
								<AlertProvider>
									<LoadingProvider>
										<Suspense fallback={ <Loading /> }>
											<ResponsiveProvider>
												{/* <SmoothScroll> */}
													<NavComponent />
													{children}
												{/* </SmoothScroll> */}
											</ResponsiveProvider>
										</Suspense>
									</LoadingProvider>
								</AlertProvider>
							</body>
					</MetaProvider>
                </StoreProviders>
            </ErrorWrapper>
        </html>
    )
}
