import { IApiContent } from '@/interfaces/api-content.interface';
import Fuse from 'fuse.js';
import React from 'react';

const fuseOptions: Fuse.IFuseOptions<IApiContent> = {
  keys: ['name'],
  threshold: 0.2,
};

export function useFuse(allApis: IApiContent[]) {
  const fuse = new Fuse<IApiContent>(allApis, fuseOptions);
  const [search, setSearch] = React.useState('');
  const [filteredApis, setFilteredApis] = React.useState<
    Fuse.FuseResult<IApiContent>[]
  >([]);

  React.useEffect(() => {
    if (!search.length)
      // Thanks https://github.com/krisk/Fuse/issues/229#issuecomment-1599106161
      return setFilteredApis(
        allApis.map((item, refIndex) => ({
          item,
          refIndex,
          matches: [],
          score: 0,
        }))
      );
    setFilteredApis(fuse.search(search));
  }, [search, allApis]);

  return {
    search,
    setSearch,
    filteredApis,
  };
}
