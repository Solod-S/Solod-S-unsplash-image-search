import styled from 'styled-components';
export const ImageGalleryItemLi = styled.li`
  color: ${p => p.theme.colors.primaryText};
  width: 350px;
  height: 233px;
  margin: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  object-fit: contain;
  object-position: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s;

  :hover {
    transform: scale(1.1);
  }
`;
export const ImageGalleryItemImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.25s;

  ${ImageGalleryItemLi}:hover & {
    transform: scale(1.2);
  }
`;
