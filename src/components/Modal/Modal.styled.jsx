import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiSave } from 'react-icons/fi';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
export const ModalImg = styled.img`
  max-height: 90vh;
  cursor: pointer;
`;
export const ShowPrevImg = styled(FiChevronLeft)`
  position: absolute;
  left: 2rem;
  cursor: pointer;
  transition: fill 0.25s, transform 0.25s;
  :hover {
    transform: scale(1.4);
    fill: grey;
  }
`;
export const ShowNextImg = styled(FiChevronRight)`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  transition: fill 0.25s, transform 0.25s;
  :hover {
    transform: scale(1.4);
    fill: grey;
  }
`;
export const ModalBtnDownload = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-30px, -10px);
`;
export const ModalIconDownload = styled(FiSave)`
  cursor: pointer;
  opacity: 0.6;

  transition: fill 0.25s, opacity 0.25s, transform 0.25s;
  ${ModalBtnDownload}:hover & {
    opacity: 1;
    transform: scale(1.4);
    fill: grey;
  }
`;
