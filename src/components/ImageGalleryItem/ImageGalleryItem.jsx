import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setImageIndx } from 'redux/slices/myImageIndxSlice';
import { setModalSlice } from 'redux/slices/myModalSlice';
import {
  AddToFavoriteBtn,
  AddToFavoriteIcon,
  GalleryItemLi,
  GalleryItemImg,
  GalleryItemHoverWrapper,
  Footer,
  FooterWrapper,
  FooterName,
  FooterDownloadBtn,
  DownloadIcon,
  FooterLink,
  FooterImg,
} from './ImageGalleryItem.style';
export const ImageGalleryItem = ({ data, indx, download, addToFovorite }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);

  const setIndxInModal = event => {
    if (event.target.nodeName !== 'DIV') {
      return;
    }
    dispatch(setImageIndx(indx));
    dispatch(setModalSlice());
    document.querySelector('body').classList.add('modal-root');
  };

  return (
    <>
      <GalleryItemLi animate__wobble onClick={setIndxInModal}>
        {favorite.includes(data.id) ? (
          <AddToFavoriteBtn
            onClick={() => addToFovorite(data.id)}
            variant="contained"
            size="small"
          >
            <AddToFavoriteIcon size={33} fill="red" />
          </AddToFavoriteBtn>
        ) : (
          <AddToFavoriteBtn
            onClick={() => addToFovorite(data.id)}
            variant="contained"
            size="small"
          >
            <AddToFavoriteIcon size={33} fill="#fff" />
          </AddToFavoriteBtn>
        )}

        <GalleryItemImg
          className="animate__animated animate__pulse"
          src={data.urls.regular}
          alt={data.alt_description}
        />
        <GalleryItemHoverWrapper>
          <Footer>
            <FooterWrapper href={data.user.profileUrl} target="_blank">
              <FooterLink
                href={data.user.links.html}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FooterImg
                  src={data.user.profile_image.small}
                  alt={data.alt_description}
                />

                <FooterName>{data.user.username}</FooterName>
              </FooterLink>
              <FooterDownloadBtn
                onClick={() => download(data, '_', 'main')}
                variant="contained"
                size="small"
              >
                <DownloadIcon size={33} fill="#fff" />
              </FooterDownloadBtn>
            </FooterWrapper>
          </Footer>
        </GalleryItemHoverWrapper>
      </GalleryItemLi>
    </>
  );
};
ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      full: PropTypes.string.isRequired,
      raw: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
      small: PropTypes.string.isRequired,
      small_s3: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    }),
    alt_description: PropTypes.string,
  }),
};
