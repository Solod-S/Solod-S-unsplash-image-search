// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav } from './SharedLayout.styled';

import { Box } from 'components/Box/Box';

export const SharedLayout = () => {
  return (
    <Box
      m="0 auto"
      //   p="0 15px"
      //   maxWidth="1600px"
    >
      <StyledHeader id="up">
        <StyledNav>
          <StyledLink end="true" to="/">
            Home
          </StyledLink>
          <StyledLink to="/favorite">Favorite</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Outlet />
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Box>
  );
};
