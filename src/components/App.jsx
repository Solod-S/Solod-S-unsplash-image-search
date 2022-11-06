import { Route, Routes, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import FavoritePage from 'pages/Favorite/FavoritePage';
import { SharedLayout } from './SharedLayout/SharedLayout';

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

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:id" element={<MovieDetailsPage />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Route>
//     </Routes>
//   );
// };
