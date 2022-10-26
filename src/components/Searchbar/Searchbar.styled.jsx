import styled from 'styled-components';
import img from '../../img/header.jpg';

export const SearchBarHeader = styled.header`
  padding-top: 0.3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const SearchBarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;

  max-width: 1400px;

  justify-content: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  padding: 200px 50px;
  border-radius: ${p => p.theme.radii.normal};
  transition: padding 250ms linear;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${img});
  content: '';
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SearchBarPixabayLogo = styled.img`
  width: 222px;
`;

export const SearchBarForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
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
