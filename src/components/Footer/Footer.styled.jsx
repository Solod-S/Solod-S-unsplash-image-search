import styled from 'styled-components';

export const FooterEl = styled.footer`
  background-color: #444444;
  /* position: fixed;
  bottom: 0;
  width: 100%; */
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.primaryText};
  text-align: end;
  /* padding-right: 50px; */
`;
