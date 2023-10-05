import { IApiContent } from '@/interfaces/api-content.interface';
import ApiCard from './ApiCard';

interface Props {
  apiList: IApiContent[];
}

function ApiList({ apiList }: Props) {
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
