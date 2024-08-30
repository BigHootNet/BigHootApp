import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
  isLandingFinished: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
  isLandingFinished: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLandingFinished: (state, action: PayloadAction<boolean>) => {
      state.isLandingFinished = action.payload;
    },
  },
});

export const { setLoading, setLandingFinished } = loadingSlice.actions;
export default loadingSlice.reducer;
