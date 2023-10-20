import { IApiContent } from '@/interfaces/api-content.interface';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  api: IApiContent;
}

function ApiCard({ api }: Props) {
  return (
    <Link target='_blank' href={api.url}>
      <div className=' dark:bg-gray-200 mx-0 md:mx-3 my-3 flex w-full  transform flex-col rounded-lg bg-base-100 p-4 shadow-xl transition-transform hover:scale-105 sm:w-full sm:flex-col md:flex-row'>
        <div className='w-full md:w-1/3'>
          <figure className='lg: mb-4 mr-0 justify-center  pt-5 md:mb-0 md:mr-4 lg:flex'>
            <Image
              src={api.image ? `/images/${api.image}` : '/images/default.webp'}
              alt={api.name}
              width={100}
              height={100}
              className='mx-auto md:mx-0 '
            />
          </figure>
        </div>
        <div className='md:2/3 w-full'>
          <div className='card-body'>
            <h2 className='text-center text-xl font-bold  md:text-left'>
              {api.name}
              <div className='badge badge-secondary ml-4  mt-[6px] align-top  h-4 '>
                {api.free ? 'free' : 'paid'}
              </div>
            </h2>
            <p className='text-center md:text-left'>{api.description}</p>
            <div className='card-actions flex justify-center md:justify-start'>
              {api.categories.map((category, index) => (
                <div key={index} className='badge badge-outline'>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ApiCard;
