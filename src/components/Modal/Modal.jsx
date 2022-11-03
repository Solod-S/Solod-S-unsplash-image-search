import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalModal,
  ModalImg,
  ShowPrevImg,
  ShowNextImg,
  ModalBtnDownload,
  ModalIconDownload,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { object } from 'yup';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ whenClose, data, indx, changeIndx, downloadImage }) {
  const scrollImgByKeyDown = event => {
    if (event.code === 'ArrowRight' && indx + 1 !== data.length) {
      changeIndx(+1);
    }
    if (event.code === 'ArrowLeft' && indx !== 0) {
      changeIndx(-1);
    }
  };
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      whenClose();
    }
  };
  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      whenClose();
    }
  };

  const { urls, alt_description } = data[indx];
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', scrollImgByKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', scrollImgByKeyDown);
    };
  });

  return createPortal(
    <ModalOverlay onClick={handleBackDropClick}>
      <ModalModal className="animate__animated animate__pulse">
        <ModalBtnDownload
          onClick={() => downloadImage({ data, indx })}
          variant="contained"
          size="small"
        >
          <ModalIconDownload size={55} fill="#fff" />
        </ModalBtnDownload>

        <ModalImg src={urls.regular} alt={alt_description} />
      </ModalModal>
      {indx !== 0 && (
        <ShowPrevImg size={77} fill="#fff" onClick={() => changeIndx(-1)} />
      )}
      {indx + 1 !== data.length && (
        <ShowNextImg size={77} fill="#fff" onClick={() => changeIndx(+1)} />
      )}
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  whenClose: PropTypes.func.isRequired,
  changeIndx: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(object).isRequired,
  indx: PropTypes.number.isRequired,
  downloadImage: PropTypes.func.isRequired,
};
