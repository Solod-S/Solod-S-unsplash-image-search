import React from 'react';
import PropTypes from 'prop-types';

import {
  PrevPageBtn,
  NextPageBtn,
  PrevPageIcon,
  NextPageIcon,
  Wrapper,
  CurrentPage,
} from './PaginationControlPanel.styled';
export const ButtonPanel = ({
  onLoadMore,
  currentPage,
  searchQuery,
  totalPages,
}) => {
  return (
    <Wrapper className="animate__animated animate__pulse">
      {currentPage !== 1 && (
        <PrevPageBtn type="button" onClick={() => onLoadMore(-1)}>
          <PrevPageIcon size={25} fill="#444444" />
        </PrevPageBtn>
      )}
      {searchQuery && totalPages && currentPage && (
        <CurrentPage>
          {currentPage}/{totalPages}
        </CurrentPage>
      )}

      {totalPages > currentPage && (
        <NextPageBtn type="button" onClick={() => onLoadMore(+1)}>
          <NextPageIcon size={25} fill="#444444" />
        </NextPageBtn>
      )}
    </Wrapper>
  );
};
ButtonPanel.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  searchQuery: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
