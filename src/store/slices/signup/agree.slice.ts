import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

export interface AgreeState {
    all: boolean;
    util: boolean;
    essential: boolean;
    personal: boolean;
    marketing: boolean;
}

interface AgreeStateExtended extends AgreeState {
    isDetail: AgreeState;
    isAgo: string | null;
}

const initialState: AgreeStateExtended = {
    all: false,
    util: false,
    essential: false,
    personal: false,
    marketing: false,
    isDetail: {
        all: false,
        util: false,
        essential: false,
        personal: false,
        marketing: false,
    },
    isAgo: null,
};

export const agreeSlice = createSlice({
    name: 'agree',
    initialState,
    reducers: {
        setAgreeState: (state, action: PayloadAction<Partial<AgreeState>>) => {
            return { ...state, ...action.payload };
        },
        toggleDetail: (state, action: PayloadAction<keyof AgreeState>) => {
            state.isDetail[action.payload] = !state.isDetail[action.payload];
        },
        setIsAgo: (state, action: PayloadAction<string | null>) => {
            state.isAgo = action.payload;
        },
        checkAgree: (state, action: PayloadAction<{ type: keyof AgreeState; checked: boolean }>) => {
            const { type, checked } = action.payload;
            if (type === 'all') {
                Object.keys(state).forEach((key) => {
                    if (key !== 'isDetail' && key !== 'isAgo') {
                        state[key as keyof AgreeState] = checked;
                    }
                });
            } else {
                state[type] = checked;
                state.all = Object.entries(state).every(([key, value]) => 
                    key === 'all' || key === 'isDetail' || key === 'isAgo' || value
                );
            }
        },
    },
});

export const { setAgreeState, toggleDetail, setIsAgo, checkAgree } = agreeSlice.actions;

export const selectAgreeState = (state: RootState) => state.agree;

export default agreeSlice.reducer;