import { createSlice } from '@reduxjs/toolkit';
export const imgIndx = createSlice({
  name: 'imgIndx',
  initialState: null,
  reducers: {
    setImgIndx(state, action) {
      return (state = action.payload);
    },
    changeImgIndx(state, action) {
      return (state = state + action.payload);
    },
  },
});

export const { setImgIndx, changeImgIndx } = imgIndx.actions;
