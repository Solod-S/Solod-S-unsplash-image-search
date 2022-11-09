import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { myFavoriteSlice } from './myFavoriteSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

export const rootReduser = combineReducers({
  favorite: myFavoriteSlice.reducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
