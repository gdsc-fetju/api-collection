import ApiList from '@/components/ApiList';
import Nav from '@/components/Nav';
import { getContent } from '@/helpers/extract-content';

export default async function Home() {
  const allApiContent = await getContent();
  // TODO: Use state for storing the filtered APIs

  return (
    <main>
      <Nav />
      <h1 className='my-10 text-center text-2xl font-bold'>API Collection</h1>
      {/* TODO: Add Search Bar to Search for a Individual API */}
      {/* TODO: Add Filter the filteration of correct result */}
      <div className='flex justify-center gap-20'>
        <ApiList apiList={allApiContent} />
      </div>
    </main>
  );
}
