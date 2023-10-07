import ApiList from '@/components/ApiList';
import Nav from '@/components/Nav';

export default async function Home() {
  return (
    <main>
      <Nav />
      <h1 className='my-10 text-center text-2xl font-bold'>API Collection</h1>
      {/* TODO: Add Search Bar to Search for a Individual API */}
      {/* TODO: Add Filter the filteration of correct result */}
      <div className='flex justify-center gap-20'>
        <ApiList />
      </div>
    </main>
  );
}
