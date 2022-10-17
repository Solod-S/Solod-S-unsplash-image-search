import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
} from './ImageGalleryItem.style';
export const ImageGalleryItem = ({ data, setIndx, indx }) => {
  // console.log(indx);
  return (
    <ImageGalleryItemLi animate__wobble onClick={() => setIndx(indx)}>
      <ImageGalleryItemImg
        className="animate__animated animate__pulse"
        src={data.urls.regular}
        alt={data.alt_description}
      />
    </ImageGalleryItemLi>
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
