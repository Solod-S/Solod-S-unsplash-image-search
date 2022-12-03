import styled from 'styled-components';
import { FiSave } from 'react-icons/fi';
import { HiOutlineHeart } from 'react-icons/hi';
export const GalleryItemLi = styled.li`
  position: relative;
  overflow: hidden;
  color: ${p => p.theme.colors.primaryText};
  /* max-width: 350px;
  height: 100%; */
  /* margin: ${p => p.theme.space[4]}px; */
  margin-bottom: 1rem;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  object-fit: contain;
  object-position: center;
  overflow: hidden;
  cursor: zoom-in;
  transition: transform 0.25s;

  :hover {
    transform: scale(1.1);
    z-index: 5;
  }
`;
export const GalleryItemImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.25s;

  ${GalleryItemLi}:hover & {
    transform: scale(1.2);
  }
`;
export const GalleryItemHoverWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  ${GalleryItemLi}:hover & {
    opacity: 1;
  }
`;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    padding: 0.3rem;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  text-decoration: none;
`;
export const FooterName = styled.h4`
  font-size: 16px;
  color: white;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const FooterDownloadBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-30px, -10px);
  @media screen and (max-width: 1000px) {
    bottom: -0.6rem;
    right: -1.7rem;
  }
`;
export const DownloadIcon = styled(FiSave)`
  cursor: pointer;
  opacity: 0.6;

  transition: fill 0.25s, opacity 0.25s, transform 0.25s;
  ${FooterDownloadBtn}:hover & {
    opacity: 1;
    transform: scale(1.4);
    fill: grey;
    @media screen and (max-width: 700px) {
      transform: scale(1.1);
    }
  }
`;
export const AddToFavoriteBtn = styled.button`
  transition: fill 0.25s, opacity 0.25s, transform 0.25s;

  z-index: 1;
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: 6%;
  right: 0;
  @media screen and (max-width: 1000px) {
    top: 1rem;
    right: -1.7rem;
  }
  transform: translate(-30px, -10px);
  ${GalleryItemLi}:hover & {
    opacity: 1;
  }
`;
export const AddToFavoriteIcon = styled(HiOutlineHeart)`
  cursor: pointer;
  opacity: 0.6;

  transition: fill 0.25s, opacity 0.25s, transform 0.25s;
  ${AddToFavoriteBtn}:hover & {
    opacity: 1;
    transform: scale(1.4);
    fill: 'red';
    @media screen and (max-width: 700px) {
      transform: scale(1.1);
    }
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.25s;
  :hover {
    transform: scale(1.1);
  }
`;
export const FooterImg = styled.img`
  border-radius: ${p => p.theme.radii.round};
  margin-right: 1rem;
`;
