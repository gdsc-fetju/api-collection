import { IApiContent } from '@/interfaces/api-content.interface';

interface Props {
  api: IApiContent;
}

function ApiCard({ api }: Props) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        {/* <Image src="/images/stock/imgphoto-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /> */}
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {api.name}
          <div className='badge badge-secondary'>
            {api.free ? 'free' : 'paid'}
          </div>
        </h2>
        <p>{api.description}</p>
        <div className='card-actions justify-end'>
          {api.categories.map((category, index) => (
            <div key={index} className='badge badge-outline'>
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiCard;
