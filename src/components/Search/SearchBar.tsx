'use client'

import React, { ChangeEvent, useState } from 'react';

export type SearchProps = {
  onSearch: (value: string) => void
}

const Search = (props: SearchProps) => {
  const { onSearch } = props;
  const [value, setValue] = useState('');

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <div className="relative">

      <input
        type="text"
        placeholder="Search API.."
        className="border-2 py-2 mb-10 px-5 border-blue-300 rounded-full text-lg focus:border-blue-600 outline-none home-search-input w-full "
        value={value}
        onChange={searchHandler}
        onKeyDown={handleKeyDown} />

      <button type="submit" className="absolute right-5 top-3">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
