import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LazyLoader } from 'components/Loader/LazyLoader';

import { Box } from 'components/Box/Box';
import { Header, Link, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box m="0 auto">
      <Header id="up">
        <Nav>
          <Link end="true" to="/">
            Home
          </Link>
          <Link to="/favorite">Favorite</Link>
        </Nav>
      </Header>
      <Suspense fallback={<LazyLoader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
