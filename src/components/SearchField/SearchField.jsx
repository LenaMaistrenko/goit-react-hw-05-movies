import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from '../SearchField/SearchField.styled';
import propTypes from 'prop-types';

export function SearchField({ handleSubmit }) {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');
  const [name, setName] = useState(searchName ?? '');

  const handleFormSUbmit = event => {
    event.preventDefault();
    handleSubmit(name);
  };
  const handleInput = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleFormSUbmit}>
        <input
          onChange={handleInput}
          type="text"
          name={name}
          value={name || ''}
          placeholder="Search movie..."
        />
        <button>Search</button>
      </Form>
    </div>
  );
}

SearchField.propTypes = {
  movies: propTypes.func,
};
