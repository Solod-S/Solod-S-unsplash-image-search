import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
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
