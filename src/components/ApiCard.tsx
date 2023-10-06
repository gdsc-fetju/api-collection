import { IApiContent } from '@/interfaces/api-content.interface';
import Image from 'next/image';

interface Props {
  api: IApiContent;
}

function ApiCard({ api }: Props) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        {/* TODO: Refactor this */}
        {api.image ? (
          <Image
            src={`/images/${api.image}`}
            alt={api.name}
            width={100}
            height={100}
          />
        ) : (
          <Image
            src='/images/default.webp'
            alt={api.name}
            width={100}
            height={100}
          />
        )}
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
