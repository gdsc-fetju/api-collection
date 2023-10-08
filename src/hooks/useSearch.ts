import { IApiContent } from '@/interfaces/api-content.interface';
import React from 'react';

function useSearch(allApis: IApiContent[]) {
  const [filteredApis, setFilteredApis] = React.useState<IApiContent[]>([]);
  const [search, setSearch] = React.useState<string>('');

  React.useEffect(() => {
    console.log('hello world');
    const newFilteredArray = allApis.filter((api) =>
      api.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApis(newFilteredArray);
  }, [search, allApis]);

  return { search, filteredApis, setSearch };
}

export default useSearch;
