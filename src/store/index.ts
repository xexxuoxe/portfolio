import { configureStore } from '@reduxjs/toolkit';
import agreeReducer from '@store/slices/signup/agree.slice';
// 다른 리듀서들도 여기에 임포트

export const store = configureStore({
    reducer: {
        agree: agreeReducer,
        // 다른 리듀서들도 여기에 추가
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;