import styled from 'styled-components';
export const Chevron = styled.div`
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const ChevronUp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 12px;

  bottom: 30px;
  width: 50px;
  height: 50px;
  bottom: 114px;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.4;
  transition: transform 0.25s;
  :hover {
    transform: scale(1.1);
  }
`;
export const ChevronDown = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 12px;

  bottom: 62px;
  width: 50px;
  height: 50px;

  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.4;
  transition: transform 0.25s;
  :hover {
    transform: scale(1.1);
  }
`;
export const ChevronLogo = styled.img`
  margin: auto;
  width: 32px;
  height: 32px;
`;
