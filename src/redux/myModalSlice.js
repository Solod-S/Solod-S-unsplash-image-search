import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    setModalSlice(state, _) {
      return (state = !state);
    },
  },
});

export const { setModalSlice } = modalSlice.actions;
