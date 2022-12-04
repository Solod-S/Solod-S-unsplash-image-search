import { combineReducers } from '@reduxjs/toolkit';
import { favoriteSlice } from './slices/favoriteSlice';
import { imgIndx } from './slices/imgIndxSlice';
import { modalSlice } from './slices/modalSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
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
