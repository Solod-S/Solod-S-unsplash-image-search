import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
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

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
