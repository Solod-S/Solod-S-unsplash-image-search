import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImg,
} from './ImageGalleryItem.style';
export const ImageGalleryItem = ({ data, setIndx, indx }) => {
  // const downloadImage = async () => {
  //   try {
  //     const response = await fetch(data.urls.full);

  //     const blob = await response.blob();

  //     let url = window.URL.createObjectURL(blob);

  //     let a = document.createElement('a');
  //     a.style = 'display: none';
  //     document.body.appendChild(a);
  //     a.href = url;
  //     a.download = data.id;
  //     a.click();
  //     a.remove();
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     alert('Something Went Wrong... Unable to Download Image');
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <ImageGalleryItemLi animate__wobble onClick={() => setIndx(indx)}>
        <ImageGalleryItemImg
          className="animate__animated animate__pulse"
          src={data.urls.regular}
          alt={data.alt_description}
        />
        {/* <button
          onClick={downloadImage}
          variant="contained"
          size="small"
          // disableElevation
          className="image__button"
          title="Download Photo"
        >
          Download
        </button> */}
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
