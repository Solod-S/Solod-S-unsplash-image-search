import React from 'react';
import { List, Container } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, download, addToFovorite }) => {
  return (
    <Container>
      <List>
        {images.map((image, indx) => (
          <ImageGalleryItem
            key={image.id}
            data={image}
            indx={indx}
            download={download}
            addToFovorite={addToFovorite}
          />
        ))}
      </List>
    </Container>
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
};
