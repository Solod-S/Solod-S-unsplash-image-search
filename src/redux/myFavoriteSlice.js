import { createSlice } from '@reduxjs/toolkit';
export const myFavoriteSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload);
    },
    removeFromFavorite(state, action) {
      return state.filter(favorite => favorite !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = myFavoriteSlice.actions;
