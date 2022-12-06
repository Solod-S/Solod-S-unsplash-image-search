import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IoIosSearch } from 'react-icons/io';
import { Container, Header, Form, Button, Input } from './Searchbar.styled';

export function Searchbar({ onImgsSeach }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get('query') ?? '';
  const handleSubeventmit = event => {
    event.preventDefault();
    const searcForm = event.currentTarget;
    const query = searcForm.elements.searchQuery.value.toLowerCase();
    setSearchParams({
      query,
    });
    searcForm.reset();
  };
  useEffect(() => {
    if (currentParams.length) {
      onImgsSeach(currentParams);
    }
  }, [currentParams, onImgsSeach]);
  return (
    <Header>
      <Container>
        <Form onSubmit={handleSubeventmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
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
