import styled from 'styled-components';
export const ImageGalleryContainer = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: 12px;

  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 450px) {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[1]}px;
  }
`;
export const ImageGalleryList = styled.ul`
  padding: 0 20px;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  column-count: 3;
  /* grid-column-gap: 1rem; */
  column-gap: 1rem;
  @media screen and (max-width: 450px) {
    column-count: 2;
  }
`;
