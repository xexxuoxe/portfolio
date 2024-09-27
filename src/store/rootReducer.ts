import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import agreeReducer from './slices/signup/agree.slice';
// Import other reducers here

const combinedReducer = combineReducers({
    agree: agreeReducer
    // Add other reducers here
});

const rootReducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return combinedReducer(state, action);
    }
};

export default rootReducer;