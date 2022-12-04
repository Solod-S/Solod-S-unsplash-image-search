import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    setModal(state, _) {
      return (state = !state);
    },
  },
});

export const { setModal } = modalSlice.actions;
