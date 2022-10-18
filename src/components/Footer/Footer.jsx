import React from 'react';
import { FooterEl, CopyrightText, CopyrightLink } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterEl id="down">
      <CopyrightText>
        Copyright ©{''}
        <CopyrightLink href="https://github.com/Solod-S">
          My Website
        </CopyrightLink>{' '}
        2022.
      </CopyrightText>
    </FooterEl>
  );
};
