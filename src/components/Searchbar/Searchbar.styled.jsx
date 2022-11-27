import styled from 'styled-components';
import img from '../../img/header.jpg';

export const Header = styled.header`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;

  /* max-width: 1600px; */

  justify-content: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  padding: 200px 50px;

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

export const PixabayLogo = styled.img`
  width: 222px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  width: 280px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: ${p => p.theme.space[3]}px;
  transition: width 250ms linear;
`;
export const Button = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.primaryText};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 250ms linear;
  :hover {
    background-color: ${p => p.theme.colors.hoverBtnColor};
  }
`;
export const Logo = styled.img`
  height: 30px;
`;
export const LinkLogo = styled.a`
  cursor: pointer;
`;
