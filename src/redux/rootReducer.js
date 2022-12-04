import { combineReducers } from '@reduxjs/toolkit';
import { myFavoriteSlice } from './slices/myFavoriteSlice';
import { imageIndx } from './slices/myImageIndxSlice';
import { modalSlice } from './slices/myModalSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

export const rootReduser = combineReducers({
  favorite: myFavoriteSlice.reducer,
  imageIndx: imageIndx.reducer,
  modal: modalSlice.reducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
