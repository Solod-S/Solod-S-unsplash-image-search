import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarContainer,
  SearchBarHeader,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarLogo,
  SearchBarLinkLogo,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../img/Pixabay-logo.png';

export default function Searchbar({ onImgsSeach }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubeventmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      return;
    }
    onImgsSeach(searchQuery);
    setSearchQuery('');
  };

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBarHeader>
      <SearchBarContainer>
        {/* <SearchBarLinkLogo
        href="https://unsplash.com/documentation/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <SearchBarLogo src={logo} />
      </SearchBarLinkLogo> */}

        <SearchBarForm onSubmit={handleSubeventmit}>
          <SearchBarInput
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
            value={searchQuery}
            onChange={handleNameChange}
            placeholder="Search images and photos"
          />
          <SearchBarButton type="submit">
            <IoIosSearch size={18} fill="#444444" />
          </SearchBarButton>
        </SearchBarForm>
      </SearchBarContainer>
    </SearchBarHeader>
  );
}

Searchbar.propTypes = {
  onImgsSeach: PropTypes.func.isRequired,
};
