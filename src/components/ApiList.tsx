'use client';
import { useEffect, useState } from 'react';
import { IApiContent } from '@/interfaces/api-content.interface';
import ApiCard from './ApiCard';
import Search from './Search/SearchBar';
import Spinner from './Search/Spinner';
import useSearch from '@/hooks/useSearch';

function ApiList() {
  // TODO: Setup filter with custom hook
  const [apiList, setApiList] = useState<IApiContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search, filteredApis, setSearch } = useSearch(apiList);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch('/api/get-content');
      const api = await res.json();
      setApiList(api);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className='w-11/12 flex flex-col items-center'>
      <Search setSearch={setSearch} search={search} />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {!filteredApis.length
          ? 'No APIs found'
          : filteredApis.map((api, index) => <ApiCard key={index} api={api} />)}
      </section>
    </div>
  );
}

export default ApiList;
