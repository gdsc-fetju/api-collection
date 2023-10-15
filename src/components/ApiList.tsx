'use client';
import { useEffect, useState } from 'react';
import { IApiContent } from '@/interfaces/api-content.interface';
import ApiCard from './ApiCard';
import Search from './Search/SearchBar';
import Spinner from './Search/Spinner';
import { useFuse } from '@/hooks/useFuse';

function ApiList() {
  // TODO: Setup filter with custom hook
  const [apiList, setApiList] = useState<IApiContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search, filteredApis, setSearch } = useFuse(apiList);

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
    return <Spinner />;
  }

  return (
    <div className='flex w-11/12 flex-col items-center'>
      <Search setSearch={setSearch} search={search} />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3'>
        {!filteredApis.length
          ? 'No APIs found'
          : filteredApis.map((api, index) => (
              <ApiCard key={index} api={api.item} />
            ))}
      </section>
    </div>
  );
}

export default ApiList;
