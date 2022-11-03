import styled from 'styled-components';
export const ErrorMsg = styled.p`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  font-size: 27px;
  z-index: 3;
  font-weight: 500;
`;
export const AppWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
