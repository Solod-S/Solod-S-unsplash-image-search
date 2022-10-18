import styled from 'styled-components';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 15px;
  max-width: 200px;
  display: flex;

  justify-content: center;
`;
export const PrevPageIcon = styled(AiOutlineStepBackward)``;
export const NextPageIcon = styled(AiOutlineStepForward)``;
export const PrevPageBtn = styled.button`
  cursor: pointer;
  transition: transform 0.25s;
  :hover {
    transform: scale(1.4);
  }
`;
export const NextPageBtn = styled.button`
  cursor: pointer;
  transition: transform 0.25s;
  :hover {
    transform: scale(1.4);
  }
`;

export const CurrentPage = styled.p`
  font-size: 20px;
`;
