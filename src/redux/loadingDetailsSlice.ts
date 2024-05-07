
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false,
};

const loadingDetailsSlice = createSlice({
    name: 'loadingDetails',
    initialState,
    reducers: {
        setLoadingDetails: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoadingDetails } = loadingDetailsSlice.actions;
export default loadingDetailsSlice.reducer;
