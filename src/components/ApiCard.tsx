import { IApiContent } from '@/interfaces/api-content.interface';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  api: IApiContent;
}

function ApiCard({ api }: Props) {
  return (
    <Link target='_blank' href={api.url}>
      <div className='card mx-auto my-2 w-90 transform rounded-lg flex justify-between bg-base-100 p-3 h-80 shadow-xl transition-transform hover:scale-105 hover:bg-gray-300'>
        <figure>
          <Image
            src={api.image ? `/images/${api.image}` : '/images/default.webp'}
            alt={api.name}
            width={100}
            height={100}
          />
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
    </Link>
  );
}

export default ApiCard;
