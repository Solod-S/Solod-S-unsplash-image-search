import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from '../SharedLayout/SharedLayout';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const FavoritePage = lazy(() =>
  import('../../pages/FavoritePage/FavoritePage')
);

export const App = () => {
  return (
    <Routes>
      <Route end path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
