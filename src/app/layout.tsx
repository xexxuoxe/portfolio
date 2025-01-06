
// import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import './globals.scss'
import { StoreProviders } from '@store/stroe.provider'
import ErrorWrapper from '@lib/error/errorWrapper.boundary';
import { AlertProvider } from '@lib/alert/alert.context'
import { LoadingProvider } from '@lib/loading/loading.context';
import { MetaProvider } from '@components/sementic/siwon/meta.component';
import { ResponsiveProvider } from '@lib/context/responsive.context'

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
											{children}
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
