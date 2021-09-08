import React from 'react';
import shild from '../../../../images/shild.jpeg';

const Card = ({ acc }) => {
  return (
    <div className='bg-gray-700 p-4 px-6 rounded-xl mb-1 text-gray-100'>
      <div className=' w-full lg:max-w-full lg:flex'>
        <div
          className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          title='Mountain'
        >
          <img src={shild} />
        </div>
        <div className='bg-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-8'>
            <div className='flex justify-between'>
              <div className=' font-bold text-xl mb-2'>
                {acc?.nickname ? acc.nickname : 'nickname temp'}
              </div>

              <span>{acc?.statuses ? acc.statuses : 'status temp'}</span>
            </div>

            <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className='flex justify-between'>
            <span>{acc?.level ? acc.level : 'level temp'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
