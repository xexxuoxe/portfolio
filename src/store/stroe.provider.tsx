'use client';

import { Provider } from 'react-redux';
import { store } from '@store'; // Redux 스토어 임포트 경로는 실제 위치에 맞게 조정해주세요

export function StoreProviders({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}