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
  images,
  searchQuery,
  totalPages,
}) => {
  return (
    <Wrapper className="animate__animated animate__pulse" id="down">
      {currentPage !== 1 && (
        <PrevPageBtn type="button" onClick={() => onLoadMore(-1)}>
          <PrevPageIcon size={25} fill="#444444" />
        </PrevPageBtn>
      )}
      {searchQuery && (
        <CurrentPage>
          {currentPage}/{totalPages}
        </CurrentPage>
      )}

      {images.length > 11 && (
        <NextPageBtn type="button" onClick={() => onLoadMore(+1)}>
          <NextPageIcon size={25} fill="#444444" />
        </NextPageBtn>
      )}
    </Wrapper>
  );
};
ButtonPanel.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
