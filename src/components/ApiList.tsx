'use client';
import { useEffect, useState } from 'react';
import { IApiContent } from '@/interfaces/api-content.interface';
import ApiCard from './ApiCard';
import Search from './Search/SearchBar';
import Spinner from './Search/Spinner';

function ApiList({ searchTerm }: { searchTerm: string }) {
  // TODO: Setup filter with custom hook
  const [apiList, setApiList] = useState<IApiContent[]>([]);
  const [filteredApiList, setFilteredApiList] = useState<IApiContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch('/api/get-content');
      const api = await res.json();
      setApiList(api);
      setFilteredApiList(api);
      setIsLoading(false);
      console.log(api);
    })();
  }, []);

  useEffect(() => {
    const filtered = apiList.filter((api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApiList(filtered);

  }, [apiList, searchTerm]);


  const handleSearch = (searchTerm: string) => {
    const filtered = apiList.filter((api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApiList(filtered);
  };

  if (!apiList.length) {
    // return <p>No APIs found</p>;
    
  }
  if (isLoading) {
    return <Spinner />;
  }
  
  if (!filteredApiList.length) {
    // return <p>No APIs found</p>;
    
  }
  return (
    <div>
    <Search onSearch={handleSearch} /> 
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {filteredApiList.map((api, index) => (
        <ApiCard key={index} api={api} />
      ))}
    </section>
  </div>

  );
}

export default ApiList;
