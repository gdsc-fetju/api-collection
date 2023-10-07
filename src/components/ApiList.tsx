'use client';
import { IApiContent } from '@/interfaces/api-content.interface';
import ApiCard from './ApiCard';
import { useEffect, useState } from 'react';

function ApiList() {
  // TODO: Setup filter with custom hook
  const [apiList, setApiList] = useState<IApiContent[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/get-content');
      const api = await res.json();
      setApiList(api);
      console.log(api);
    })();
  }, []);

  if (!apiList.length) {
    return <p>No APIs found</p>;
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {apiList.map((api, index) => (
        <ApiCard key={index} api={api} />
      ))}
    </section>
  );
}

export default ApiList;
