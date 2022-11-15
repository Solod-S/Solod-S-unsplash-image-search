import { createSlice } from '@reduxjs/toolkit';
export const imageIndx = createSlice({
  name: 'imageIndx',
  initialState: null,
  reducers: {
    setImageIndx(state, action) {
      return (state = action.payload);
    },
    changeImageIndx(state, action) {
      return (state = state + action.payload);
    },
  },
});

export const { setImageIndx, changeImageIndx } = imageIndx.actions;
