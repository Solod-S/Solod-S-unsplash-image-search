import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalModal,
  ModalImg,
  ShowPrevImg,
  ShowNextImg,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { object } from 'yup';
const HREF = '#';
const modalRoot = document.querySelector('#modal-root');

export function Modal({ whenClose, data, indx, changeIndx }) {
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

  const { urls, alt_description, links } = data[indx];
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
      {indx !== 0 && (
        <ShowPrevImg size={55} fill="#fff" onClick={() => changeIndx(-1)} />
      )}
      <ModalModal className="animate__animated animate__pulse">
        <ModalImg src={urls.regular} alt={alt_description} />
      </ModalModal>
      {indx + 1 !== data.length && (
        <ShowNextImg size={55} fill="#fff" onClick={() => changeIndx(+1)} />
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
};

//----------
//State
//----------
// const modalRoot = document.querySelector('#modal-root');
// export class Modal extends React.Component {
//   static propTypes = {
//     whenClose: PropTypes.func.isRequired,
//     changeZoomImage: PropTypes.func.isRequired,
//     data: PropTypes.arrayOf(object).isRequired,
//     indx: PropTypes.number.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//     window.addEventListener('keydown', this.scrollImgByKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//     window.removeEventListener('keydown', this.scrollImgByKeyDown);
//   }
//   scrollImgByKeyDown = event => {
//     if (
//       event.code === 'ArrowRight' &&
//       this.props.indx + 1 !== this.props.data.length
//     ) {
//       this.props.changeZoomImage(+1);
//     }
//     if (event.code === 'ArrowLeft' && this.props.indx !== 0) {
//       this.props.changeZoomImage(-1);
//     }
//   };
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       // console.log(`Escape нажали`);
//       this.props.whenClose();
//     }
//   };
//   handleBackDropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.whenClose();
//     }
//   };

//   render() {
//     const { indx, data, changeZoomImage } = this.props;
//     const { largeImageURL, tags } = data[indx];
//     return createPortal(
//       <ModalOverlay onClick={this.handleBackDropClick}>
//         {indx !== 0 && (
//           <ShowPrevImg
//             size={55}
//             fill="#fff"
//             onClick={() => changeZoomImage(-1)}
//           />
//         )}
//         <ModalModal>
//           <ModalImg src={largeImageURL} alt={tags} />
//         </ModalModal>
//         {indx + 1 !== data.length && (
//           <ShowNextImg
//             size={55}
//             fill="#fff"
//             onClick={() => changeZoomImage(+1)}
//           />
//         )}
//       </ModalOverlay>,
//       modalRoot
//     );
//   }
// }
