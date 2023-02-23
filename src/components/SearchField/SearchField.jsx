import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export function SearchField({ handleSubmit }) {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');
  const [name, setName] = useState(searchName ?? '');

  const handleFormSUbmit = event => {
    event.preventDefault();
    handleSubmit(name);
    console.log(name);
  };
  const handleInput = event => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleFormSUbmit}>
        <input
          onChange={handleInput}
          type="text"
          name={name}
          value={name || ''}
          placeholder="Search movie..."
        />
        <button>Search</button>
      </form>
    </div>
  );
}
