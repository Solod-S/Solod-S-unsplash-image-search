import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { myFavoriteSlice } from './myFavoriteSlice';
import { imageIndx } from './imageIndxSlice';
import { modalSlice } from './modalSlice';
import { myUnsplashSlice } from './unsplashSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

export const rootReduser = combineReducers({
  favorite: myFavoriteSlice.reducer,
  imageIndx: imageIndx.reducer,
  modal: modalSlice.reducer,
  [myUnsplashSlice.reducerPath]: myUnsplashSlice.reducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
