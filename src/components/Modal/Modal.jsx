import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setModalSlice } from 'redux/myModalSlice';
import { changeImageIndx } from 'redux/myImageIndxSlice';
import {
  Overlay,
  ModalModal,
  Img,
  Prev,
  Next,
  Btn,
  Download,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { object } from 'yup';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ data, download }) {
  const dispatch = useDispatch();
  const indx = useSelector(state => state.imageIndx);
  const scrollImgByKeyDown = event => {
    if (event.code === 'ArrowRight' && indx + 1 !== data.length) {
      dispatch(changeImageIndx(+1));
    }
    if (event.code === 'ArrowLeft' && indx !== 0) {
      dispatch(changeImageIndx(-1));
    }
  };
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      dispatch(setModalSlice());
    }
  };
  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(setModalSlice());
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
    <Overlay onClick={handleBackDropClick}>
      <ModalModal className="animate__animated animate__pulse">
        <Btn
          onClick={() => download(data, indx, 'inner')}
          variant="contained"
          size="small"
        >
          <Download size={55} fill="#fff" />
        </Btn>

        <Img src={urls.regular} alt={alt_description} />
      </ModalModal>
      {indx !== 0 && (
        <Prev
          size={77}
          fill="#fff"
          onClick={() => dispatch(changeImageIndx(-1))}
        />
      )}
      {indx + 1 !== data.length && (
        <Next
          size={77}
          fill="#fff"
          onClick={() => dispatch(changeImageIndx(+1))}
        />
      )}
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
};
