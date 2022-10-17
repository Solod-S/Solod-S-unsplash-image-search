import styled from 'styled-components';
export const SearchBarHeader = styled.header`
  z-index: 2;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  padding: 14px 50px;
  transition: padding 250ms linear;
`;
export const SearchBarPixabayLogo = styled.img`
  width: 222px;
`;

export const SearchBarForm = styled.form`
  display: flex;
`;
export const SearchBarInput = styled.input`
  width: 280px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 8px;
  transition: width 250ms linear;
`;
export const SearchBarButton = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;

  background-color: ${p => p.theme.colors.primaryText};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;
export const SearchBarLogo = styled.img`
  height: 30px;
`;
export const SearchBarLinkLogo = styled.a`
  cursor: pointer;
`;
