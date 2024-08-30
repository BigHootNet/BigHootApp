import { createSlice } from '@reduxjs/toolkit';

interface ContentState {
  isContentLoaded: boolean;
}

const initialState: ContentState = {
  isContentLoaded: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContentLoaded(state) {
      state.isContentLoaded = true;
    },
  },
});

export const { setContentLoaded } = contentSlice.actions;

export default contentSlice.reducer;