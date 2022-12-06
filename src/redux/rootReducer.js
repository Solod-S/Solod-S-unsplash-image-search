import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { favoriteSlice } from './slices/favoriteSlice';
import { imgIndx } from './slices/imgIndxSlice';
import { modalSlice } from './slices/modalSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

export const rootReduser = combineReducers({
  favorite: favoriteSlice.reducer,
  imgIndx: imgIndx.reducer,
  modal: modalSlice.reducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
