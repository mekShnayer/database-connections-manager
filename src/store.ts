import loadingReducer from './redux/loadingSlice';
import loadingDetailsReducer from './redux/loadingDetailsSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        loadingDetails: loadingDetailsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
