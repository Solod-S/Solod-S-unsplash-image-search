import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setImageIndx } from 'components/redux/imageIndxSlice';
import { setModalSlice } from 'components/redux/modalSlice';
import {
  ImageAddToFavoriteBtn,
  ImageAddToFavoriteIcon,
  ImageGalleryItemLi,
  ImageGalleryItemImg,
  ImageGalleryItemHoverWrapper,
  ImageFooter,
  ImageFooterWrapper,
  ImageFooterName,
  ImagefooterDownloadBtn,
  ImageDownloadIcon,
  FooterLink,
  FooterImg,
} from './ImageGalleryItem.style';
export const ImageGalleryItem = ({
  data,
  setIndx,
  indx,
  downloadImage,
  addToFovorite,
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);

  const setIndxInModal = event => {
    if (event.target.nodeName !== 'DIV') {
      return;
    }
    // setIndx(indx);
    dispatch(setImageIndx(indx));
    dispatch(setModalSlice());
  };

  return (
    <>
      <ImageGalleryItemLi animate__wobble onClick={setIndxInModal}>
        {favorite.includes(data.id) ? (
          <ImageAddToFavoriteBtn
            onClick={() => addToFovorite(data.id)}
            variant="contained"
            size="small"
          >
            <ImageAddToFavoriteIcon size={33} fill="red" />
          </ImageAddToFavoriteBtn>
        ) : (
          <ImageAddToFavoriteBtn
            onClick={() => addToFovorite(data.id)}
            variant="contained"
            size="small"
          >
            <ImageAddToFavoriteIcon size={33} fill="#fff" />
          </ImageAddToFavoriteBtn>
        )}

        <ImageGalleryItemImg
          className="animate__animated animate__pulse"
          src={data.urls.regular}
          alt={data.alt_description}
        />
        <ImageGalleryItemHoverWrapper>
          <ImageFooter>
            <ImageFooterWrapper href={data.user.profileUrl} target="_blank">
              <FooterLink
                href={data.user.links.html}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FooterImg
                  src={data.user.profile_image.small}
                  alt={data.alt_description}
                />

                <ImageFooterName>{data.user.username}</ImageFooterName>
              </FooterLink>
              <ImagefooterDownloadBtn
                onClick={() => downloadImage({ data })}
                variant="contained"
                size="small"
              >
                <ImageDownloadIcon size={33} fill="#fff" />
              </ImagefooterDownloadBtn>
            </ImageFooterWrapper>
          </ImageFooter>
        </ImageGalleryItemHoverWrapper>
      </ImageGalleryItemLi>
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
  setIndx: PropTypes.func.isRequired,
};
