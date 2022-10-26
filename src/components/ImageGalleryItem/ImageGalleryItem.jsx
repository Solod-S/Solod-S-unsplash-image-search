import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
  ImageGalleryItemHoverWrapper,
  ImageFooter,
  ImageFooterLeft,
  ImageFooterName,
  ImagefooterDownloadBtn,
  ImageDownloadIcon,
  FooterLink,
  FooterImg,
} from './ImageGalleryItem.style';
export const ImageGalleryItem = ({ data, setIndx, indx, downloadImage }) => {
  const setIndxInModal = event => {
    if (event.target.nodeName !== 'DIV') {
      return;
    }
    setIndx(indx);
  };

  return (
    <>
      <ImageGalleryItemLi animate__wobble onClick={setIndxInModal}>
        <ImageGalleryItemImg
          className="animate__animated animate__pulse"
          src={data.urls.regular}
          alt={data.alt_description}
        />
        <ImageGalleryItemHoverWrapper>
          <ImageFooter>
            <ImageFooterLeft href={data.user.profileUrl} target="_blank">
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
              {/* <h4 className="image__footerLeftName">{data.user.username}</h4> */}
              <ImagefooterDownloadBtn
                onClick={() => downloadImage({ data })}
                variant="contained"
                size="small"
              >
                <ImageDownloadIcon size={33} fill="#fff" />
              </ImagefooterDownloadBtn>
            </ImageFooterLeft>
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
