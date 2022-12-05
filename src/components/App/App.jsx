import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { SharedLayout } from '../SharedLayout/SharedLayout';
import HomePage from '../../../src/pages/HomePage/HomePage';
import FavoritePage from '../../../src/pages/FavoritePage/FavoritePage';

import { addToFavorite, removeFromFavorite } from 'redux/slices/favoriteSlice';

export const App = () => {
  const [images, setImages] = useState([]);
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const addToFovorite = id => {
    if (!favorite.includes(id)) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };
  return (
    <Routes>
      <Route end path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <HomePage
              addToFovorite={addToFovorite}
              images={images}
              setImages={setImages}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <FavoritePage
              images={images}
              setImages={setImages}
              addToFovorite={addToFovorite}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
