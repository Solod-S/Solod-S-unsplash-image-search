import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav } from './SharedLayout.styled';

import { Box } from 'components/Box/Box';

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
      {/* <Outlet /> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
