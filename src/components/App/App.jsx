import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { lazy } from 'react';
import { addToFavorite, removeFromFavorite } from 'redux/slices/favoriteSlice';

import { SharedLayout } from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const FavoritePage = lazy(() =>
  import('../../pages/FavoritePage/FavoritePage')
);

export const App = () => {
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const handleFovorite = id => {
    if (!favorite.includes(id)) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };

  return (
    <Routes>
      <Route end path="/" element={<SharedLayout />}>
        <Route index element={<HomePage handleFovorite={handleFovorite} />} />
        <Route
          path="favorite"
          element={<FavoritePage handleFovorite={handleFovorite} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
