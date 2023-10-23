'use client';

import ApiList from '@/components/ApiList';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className=' min-h-screen dark:bg-[#0b0a0a]  bg-stone-100'>
      <Nav />
      <h1 className='my-10 text-center text-2xl font-bold'>API Collection</h1>
      {/* TODO: Add Search Bar to Search for a Individual API */}
      {/* <Search onSearch={handleSearch} />  */}
      {/* TODO: Add Filter the filteration of correct result */}
      <div className='flex justify-center gap-20'>
        <ApiList />
      </div>
    </main>
  );
}
