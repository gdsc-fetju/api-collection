import ApiList from '@/components/ApiList';
import { getContent } from '@/helpers/extract-content';

export default async function Home() {
  const allApiContent = await getContent();
  console.log(allApiContent);

  return (
    <main>
      <h1 className='text-center text-2xl font-bold my-10'>API Collection</h1>
      <div className='flex justify-center gap-20'>
        <ApiList apiList={allApiContent} />
      </div>
    </main>
  );
}
