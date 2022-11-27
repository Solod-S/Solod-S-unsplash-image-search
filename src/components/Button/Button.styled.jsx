import styled from 'styled-components';
export const ButtonLM = styled.button`
  position: relative;
  align-items: center;
  margin: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  display: block;

  letter-spacing: 0.06em;
  cursor: pointer;
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.secondaryBackGroundColor};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.space[4]}px;
  line-height: 1.8;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  transition: transform 0.25s;
  :hover {
    transform: scale(1.1);
  }
`;
