import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Button, Input } from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';

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
    <Header>
      <Container>
        <Form onSubmit={handleSubeventmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
            value={searchQuery}
            onChange={handleNameChange}
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <IoIosSearch size={18} fill="#444444" />
          </Button>
        </Form>
      </Container>
    </Header>
  );
}

Searchbar.propTypes = {
  onImgsSeach: PropTypes.func.isRequired,
};
