import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <div className="animate__animated animate__pulse">
      <ButtonLoadMore type="button" onClick={() => onLoadMore()}>
        Load more
      </ButtonLoadMore>
    </div>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
