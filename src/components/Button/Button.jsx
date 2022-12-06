import PropTypes from 'prop-types';

import { ButtonLM } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <div className="animate__animated animate__pulse">
      <ButtonLM type="button" onClick={() => onLoadMore()}>
        Load more
      </ButtonLM>
    </div>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
