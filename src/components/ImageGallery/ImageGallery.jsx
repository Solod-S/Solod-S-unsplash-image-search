import React from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, setIndx }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map((image, indx) => (
          <ImageGalleryItem
            key={image.id}
            data={image}
            setIndx={setIndx}
            indx={indx}
          />
        ))}
      </ImageGalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  setIndx: PropTypes.func.isRequired,
};
