import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLandingFinished: false, // Initialisation de isLandingFinished
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLandingFinished(state, action) {
      state.isLandingFinished = action.payload;
    },
  },
});

export const { setLoading, setLandingFinished } = loadingSlice.actions;
export default loadingSlice.reducer;
