'use client';

import { SearchIcon } from '@/shared/SearchIcon';
import React from 'react';

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className='relative w-full'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <SearchIcon />
      </div>
      <input
        type='text'
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-16 text-2xl text-gray-800 focus:border-blue-500 focus:ring-blue-500'
        placeholder='Search'
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
