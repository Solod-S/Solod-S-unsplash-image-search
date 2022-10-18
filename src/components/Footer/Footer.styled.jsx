import styled from 'styled-components';

export const FooterEl = styled.footer`
  background-color: #444444;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[1]}px;
  padding-right: 5%;

  text-align: end;
`;
export const CopyrightLink = styled.a`
  color: ${p => p.theme.colors.primaryText};
  text-decoration: underline;
`;
export const CopyrightText = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;
