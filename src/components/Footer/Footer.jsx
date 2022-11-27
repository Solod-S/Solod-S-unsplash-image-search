import React from 'react';
import { FooterEl, Text, Link } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterEl id="down">
      <Text>
        Copyright ©{''}
        <Link href="https://github.com/Solod-S">My Website</Link> 2022.
      </Text>
    </FooterEl>
  );
};
