'use client'

import ApiList from '@/components/ApiList';
import Nav from '@/components/Nav';
import Search from '@/components/Search/SearchBar';
import React, {useState} from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <main>
      <Nav />
      <h1 className='my-10 text-center text-2xl font-bold'>API Collection</h1>
      {/* TODO: Add Search Bar to Search for a Individual API */}
      {/* <Search onSearch={handleSearch} />  */}
      {/* TODO: Add Filter the filteration of correct result */}
      <div className='flex justify-center gap-20'>
      <ApiList searchTerm={searchTerm} />
      </div>
    </main>
  );
}
