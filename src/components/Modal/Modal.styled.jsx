import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiSave } from 'react-icons/fi';

export const Overlay = styled.div`
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
export const Img = styled.img`
  max-height: 90vh;
  cursor: pointer;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
export const Prev = styled(FiChevronLeft)`
  position: absolute;
  left: 0;
  cursor: pointer;
  transition: fill 0.25s, transform 0.25s;
  color: white;

  :hover {
    transform: scale(1.4);
  }
`;
export const Next = styled(FiChevronRight)`
  position: absolute;
  right: 0;
  cursor: pointer;
  transition: fill 0.25s, transform 0.25s;
  color: white;

  :hover {
    transform: scale(1.4);
  }
`;
export const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-30px, -10px);
`;
export const Download = styled(FiSave)`
  cursor: pointer;
  opacity: 0.6;
  fill: white;
  transition: fill 0.25s, opacity 0.25s, transform 0.25s;
  ${Btn}:hover & {
    opacity: 1;
    transform: scale(1.2);
    fill: grey;
  }
`;
